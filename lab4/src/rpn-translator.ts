import {
  ASTNode,
  BinaryOperationNode,
  BlockNode,
  EntryPointNode,
  IfStatementNode,
  LiteralNode,
  UnaryOperationNode,
  VarDeclarationNode,
  WhileStatementNode,
  IdNode,
  AssignStatementNode,
  OutStatementNode,
  GrammarNode,
  PackageDeclarationNode,
} from "../../lab3/src/ast.nodes";

export class Translator {
  private output: string[] = [];

  public translate(node: ASTNode): string {
    this.visitNode(node);
    return this.output.join(" ");
  }

  private visitNode(node: ASTNode): void {
    if (node instanceof GrammarNode) {
      this.visitGrammarNode(node as GrammarNode);
    } else if (node instanceof PackageDeclarationNode) {
      this.visitPackageDeclarationNode(node as PackageDeclarationNode);
    } else if (node instanceof EntryPointNode) {
      this.visitEntryPointNode(node as EntryPointNode);
    } else if (node instanceof EntryPointNode) {
      this.visitEntryPoint(node);
    } else if (node instanceof BlockNode) {
      this.visitBlock(node);
    } else if (node instanceof AssignStatementNode) {
      this.visitAssign(node);
    } else if (node instanceof IfStatementNode) {
      this.visitIf(node);
    } else if (node instanceof WhileStatementNode) {
      this.visitWhile(node);
    } else if (node instanceof OutStatementNode) {
      this.visitOut(node);
    } else if (node instanceof BinaryOperationNode) {
      this.visitBinaryOperation(node);
    } else if (node instanceof UnaryOperationNode) {
      this.visitUnaryOperation(node);
    } else if (node instanceof LiteralNode) {
      this.visitLiteral(node);
    } else if (node instanceof IdNode) {
      this.visitId(node);
    } else {
      throw new Error(`Unknown node type: ${node.constructor.name}`);
    }
  }

  private visitGrammarNode(node: GrammarNode): void {
    this.visitNode(node.packageDecl);
    this.visitNode(node.entryPoint);
  }

  private visitPackageDeclarationNode(node: PackageDeclarationNode): void {}

  private visitEntryPointNode(node: EntryPointNode): void {
    if (node.params) {
      this.visitNode(node.params);
    }
    this.visitNode(node.body);
  }

  private visitEntryPoint(node: EntryPointNode): void {
    this.visitNode(node.body);
  }

  private visitBlock(node: BlockNode): void {
    for (const stmt of node.statements) {
      this.visitNode(stmt);
    }
  }

  private visitAssign(node: AssignStatementNode): void {
    if (!node.expression) return;

    if (node.varDecl instanceof IdNode) {
      this.visitId(node.varDecl);
    } else if (node.varDecl instanceof VarDeclarationNode) {
      this.output.push(node.varDecl.id);
    }

    this.visitNode(node.expression);

    this.output.push("=");
  }

  private visitIf(node: IfStatementNode): void {
    this.visitNode(node.condition);
    const labelElse = `L${this.output.length + 1}`;
    const labelEnd = `L${this.output.length + 2}`;
    this.output.push(labelElse, "JF");
    this.visitNode(node.ifBlock);
    this.output.push(labelEnd, "JMP");
    this.output.push(labelElse + ":");
    if (node.elseBlock) {
      this.visitNode(node.elseBlock);
    }
    this.output.push(labelEnd + ":");
  }

  private visitWhile(node: WhileStatementNode): void {
    const labelStart = `L${this.output.length}`;
    const labelEnd = `L${this.output.length + 1}`;
    this.output.push(labelStart + ":");
    this.visitNode(node.condition);
    this.output.push(labelEnd, "JF");
    this.visitNode(node.body);
    this.output.push(labelStart, "JMP");
    this.output.push(labelEnd + ":");
  }

  private visitOut(node: OutStatementNode): void {
    this.visitNode(node.expression);
    this.output.push("OUT");
  }

  private visitBinaryOperation(node: BinaryOperationNode): void {
    this.visitNode(node.left);
    this.visitNode(node.right);
    this.output.push(node.operator);
  }

  private visitUnaryOperation(node: UnaryOperationNode): void {
    this.visitNode(node.expression);
    this.output.push(node.operator);
  }

  private visitLiteral(node: LiteralNode): void {
    this.output.push(node.value);
  }

  private visitId(node: IdNode): void {
    this.output.push(node.id);
  }

  public getOutput() {
    return this.output;
  }
}
