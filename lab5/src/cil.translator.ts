import {
  GrammarNode,
  ASTNode,
  PackageDeclarationNode,
  EntryPointNode,
  BlockNode,
  AssignStatementNode,
  IfStatementNode,
  WhileStatementNode,
  UnaryOperationNode,
  BinaryOperationNode,
  IdNode,
  VarDeclarationsListNode,
  VarDeclarationNode,
  OutStatementNode,
  LiteralNode,
  ExpressionNode,
} from "../../lab3/src/ast.nodes";

enum CILType {
  INT32 = "int32",
  FLOAT32 = "float32",
}

export class CILTranslator {
  private cilCode: string = "";
  private variables: Map<string, CILType | undefined> = new Map();
  private labelCounter: number = 0;

  public translate(ast: ASTNode): string {
    this.cilCode += this.generateHeader();
    this.processNode(ast);
    this.cilCode = this.insertLocals(this.cilCode);
    this.cilCode += this.generateFooter();
    return this.cilCode;
  }

  private generateHeader(): string {
    return `.assembly extern mscorlib {
  .publickeytoken = (B7 7A 5C 56 19 34 E0 89)
  .ver 4:0:0:0
}

.assembly program {}
.module program.exe
.class public auto ansi Program extends [mscorlib]System.Object {
  .method public hidebysig static void Main() cil managed {
    .entrypoint
    .locals init (`;
  }

  private generateFooter(): string {
    return `ret
  }
}`;
  }

  private insertLocals(cilCode: string): string {
    const locals = Array.from(this.variables.entries())
      .map(([name, type]) => `  ${type || CILType.FLOAT32} ${name}`)
      .join(",\n");

    return cilCode.replace(".locals init (", `.locals init (\n${locals}\n)\n`);
  }

  private processNode(node: ASTNode): void {
    switch (node.constructor) {
      case GrammarNode:
        this.processGrammarNode(node as GrammarNode);
        break;
      case PackageDeclarationNode:
        this.processPackageDeclarationNode(node as PackageDeclarationNode);
        break;
      case EntryPointNode:
        this.processEntryPointNode(node as EntryPointNode);
        break;
      case BlockNode:
        this.processBlockNode(node as BlockNode);
        break;
      case VarDeclarationsListNode:
        this.processVarDeclarationsListNode(node as VarDeclarationsListNode);
        break;
      case VarDeclarationNode:
        this.processVarDeclarationNode(node as VarDeclarationNode);
        break;
      case AssignStatementNode:
        this.processAssignStatementNode(node as AssignStatementNode);
        break;
      case IfStatementNode:
        this.processIfStatementNode(node as IfStatementNode);
        break;
      case WhileStatementNode:
        this.processWhileStatementNode(node as WhileStatementNode);
        break;
      case UnaryOperationNode:
        this.processUnaryOperationNode(node as UnaryOperationNode);
        break;
      case BinaryOperationNode:
        this.processBinaryOperationNode(node as BinaryOperationNode);
        break;
      case IdNode:
        this.processIdNode(node as IdNode);
        break;
      case OutStatementNode:
        this.processOutStatementNode(node as OutStatementNode);
        break;
      case LiteralNode:
        this.processLiteralNode(node as LiteralNode);
        break;
      default:
        throw new Error(`Unsupported AST node: ${node.constructor.name}`);
    }
  }

  private getNextLabel(): string {
    return `label_${this.labelCounter++}`;
  }

  private processBlockNode(node: BlockNode): void {
    for (const statement of node.statements) {
      this.processNode(statement);
    }
  }

  private processGrammarNode(node: GrammarNode): void {
    this.processNode(node.packageDecl);
    this.processNode(node.entryPoint);
  }

  private processEntryPointNode(node: EntryPointNode): void {
    if (node.params) {
      this.processNode(node.params);
    }
    this.processNode(node.body);
  }

  private processAssignStatementNode(node: AssignStatementNode): void {
    if (node.varDecl instanceof VarDeclarationNode) {
      this.processNode(node.varDecl);

      if (!this.variables.get(node.varDecl.id) && node.expression) {
        this.variables.set(node.varDecl.id, this.inferType(node.expression));
      }
    }

    if (node.expression) {
      this.processNode(node.expression);

      this.cilCode += `stloc ${
        node.varDecl instanceof IdNode ? node.varDecl.id : node.varDecl.id
      }\n`;
    }
  }

  private inferType(node: ExpressionNode): CILType {
    let type = CILType.INT32;

    if (node instanceof BinaryOperationNode) {
      type =
        ["/", "^"].includes(node.operator) ||
        [node.left, node.right]
          .map((expression) => this.inferType(expression))
          .some((type) => type === CILType.FLOAT32)
          ? CILType.FLOAT32
          : CILType.INT32;
    } else if (node instanceof UnaryOperationNode) {
      type = this.inferType(node.expression);
    } else if (node instanceof IdNode) {
      type = this.variables.get(node.id) || type;
    } else if (node instanceof LiteralNode) {
      type = node.type === "float_literal" ? CILType.FLOAT32 : CILType.INT32;
    } else {
      throw new Error(`Invalid expression type: ${node.constructor.name}`);
    }

    return type;
  }

  private processIfStatementNode(node: IfStatementNode): void {
    const elseLabel = this.getNextLabel();
    const endLabel = this.getNextLabel();

    this.processNode(node.condition);
    this.cilCode += `brfalse ${elseLabel}\n`;
    this.processNode(node.ifBlock);
    this.cilCode += `br ${endLabel}\n${elseLabel}:\n`;
    if (node.elseBlock) {
      this.processNode(node.elseBlock);
    }
    this.cilCode += `${endLabel}:\n`;
  }

  private processWhileStatementNode(node: WhileStatementNode): void {
    const loopLabel = this.getNextLabel();
    const endLabel = this.getNextLabel();

    this.cilCode += `${loopLabel}:\n`;
    this.processNode(node.condition);
    this.cilCode += `brfalse ${endLabel}\n`;
    this.processNode(node.body);
    this.cilCode += `br ${loopLabel}\n${endLabel}:\n`;
  }

  private processUnaryOperationNode(node: UnaryOperationNode): void {
    this.processNode(node.expression);
    if (node.operator === "-") {
      this.cilCode += `neg\n`;
    }
  }

  private processBinaryOperationNode(node: BinaryOperationNode): void {
    const typeLeft = this.inferType(node.left);
    const typeRight = this.inferType(node.right);

    this.processNode(node.left);
    if (typeLeft === CILType.INT32 && typeRight === CILType.FLOAT32) {
      this.cilCode += `conv.r4\n`;
    }

    this.processNode(node.right);
    if (typeLeft === CILType.FLOAT32 && typeRight === CILType.INT32) {
      this.cilCode += `conv.r4\n`;
    }

    switch (node.operator) {
      case "+":
        this.cilCode += `add\n`;
        break;
      case "-":
        this.cilCode += `sub\n`;
        break;
      case "*":
        this.cilCode += `mul\n`;
        break;
      case "/":
        this.cilCode += `div\n`;
        break;
      case "^":
        this.cilCode += `call float64 [mscorlib]System.Math::Pow(float64, float64)\nconv.r4\n`;
        break;
      case "===":
      case "==":
        this.cilCode += `ceq\n`;
        break;
      case "!=":
        this.cilCode += `ceq\nldc.i4.0\nceq\n`; // Reverse logic for "!="
        break;
      case "<":
        this.cilCode += `clt\n`;
        break;
      case "<=":
        this.cilCode += `cgt\nldc.i4.0\nceq\n`; // Reverse of ">"
        break;
      case ">":
        this.cilCode += `cgt\n`;
        break;
      case ">=":
        this.cilCode += `clt\nldc.i4.0\nceq\n`;
        break;
      default:
        throw new Error(`Unsupported binary operator: ${node.operator}`);
    }
  }

  private processOutStatementNode(node: OutStatementNode): void {
    this.cilCode += `ldstr "Output: "\ncall void [mscorlib]System.Console::Write(string)\n`;
    const type = this.inferType(node.expression);
    this.processNode(node.expression);

    this.cilCode += `call void [mscorlib]System.Console::WriteLine(${type})\n`;
  }

  private processLiteralNode(node: LiteralNode): void {
    if (node.type === "int_literal") {
      this.cilCode += `ldc.i4 ${node.value}\n`;
    } else if (node.type === "float_literal") {
      this.cilCode += `ldc.r4 ${node.value}\n`;
    } else if (node.type === "bool_literal") {
      this.cilCode += `ldc.i4 ${node.value === "true" ? 1 : 0}\n`;
    }
  }

  private processPackageDeclarationNode(node: PackageDeclarationNode): void {
    this.cilCode += `// Package: ${node.id.ids.join(".")}\n`;
  }

  private processIdNode(node: IdNode): void {
    if (node.id === "readln") {
      this.cilCode += `call string [mscorlib]System.Console::ReadLine()\n`;
      this.cilCode += `call int32 [mscorlib]System.Convert::ToInt32(string)\n`;
    } else {
      this.cilCode += `ldloc ${node.id}\n`;
    }
  }

  private processVarDeclarationsListNode(node: VarDeclarationsListNode): void {
    for (const declaration of node.declarations) {
      this.processNode(declaration);
    }
  }

  private processVarDeclarationNode(node: VarDeclarationNode): void {
    let cilType: CILType | undefined = undefined;

    if (node.type) {
      cilType = node.type === "Float" ? CILType.FLOAT32 : CILType.INT32;
    }

    if (!this.variables.has(node.id)) {
      this.variables.set(node.id, cilType);
    }
  }
}
