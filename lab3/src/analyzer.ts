import {
  ASTNode,
  AssignStatementNode,
  BinaryOperationNode,
  BlockNode,
  EntryPointNode,
  ExpressionNode,
  GrammarNode,
  IdNode,
  IfStatementNode,
  LiteralNode,
  OutStatementNode,
  PackageDeclarationNode,
  UnaryOperationNode,
  VarDeclarationNode,
  WhileStatementNode,
} from "./ast.nodes";
import { relOps } from "./parser";

type SymbolTable = Map<string, string>;

export const literalNameToTypeMap: Record<string, string> = {
  int_literal: "Int",
  float_literal: "Float",
  bool_literal: "Bool",
};

export const possibleConversions: Record<string, string[] | undefined> = {
  Int: ["Float"],
  Float: ["Int"],
};

const globallyDefinedVars = { readln: "any" };

export class SemanticAnalyzer {
  private symbolTable: SymbolTable = new Map(
    Object.entries(globallyDefinedVars)
  );

  public analyze(node: ASTNode): void {
    if (node instanceof GrammarNode) {
      this.analyze(node.packageDecl);
      this.analyze(node.entryPoint);
    } else if (node instanceof EntryPointNode) {
      this.analyze(node.body);
    } else if (node instanceof PackageDeclarationNode) {
      //
    } else if (node instanceof BlockNode) {
      node.statements.forEach((statement) => this.analyze(statement));
    } else if (node instanceof VarDeclarationNode) {
      this.declareVariable(node);
    } else if (node instanceof AssignStatementNode) {
      this.analyzeAssignment(node);
    } else if (node instanceof IfStatementNode) {
      this.analyzeIfStatement(node);
    } else if (node instanceof WhileStatementNode) {
      this.analyzeWhileStatement(node);
    } else if (node instanceof OutStatementNode) {
      this.analyzeExpression(node.expression);
    }
  }

  public inferType(expressionType?: string) {
    if (!expressionType) return "unknown";

    if (Object.keys(literalNameToTypeMap).includes(expressionType)) {
      return literalNameToTypeMap[expressionType];
    }

    return expressionType;
  }

  private declareVariable(node: VarDeclarationNode): void {
    if (this.symbolTable.has(node.id)) {
      throw new Error(
        `Variable ${node.id} is already declared [${node.line}:${node.indexInLine}]`
      );
    }
    this.symbolTable.set(node.id, node.type || "unknown");
  }

  private analyzeAssignment(node: AssignStatementNode): void {
    const varName =
      node.varDecl instanceof IdNode ? node.varDecl.id : node.varDecl.id;

    if (node.varDecl instanceof VarDeclarationNode) {
      this.declareVariable(node.varDecl);
    }

    if (!this.symbolTable.has(varName)) {
      throw new Error(
        `Variable ${varName} is not declared [${node.line}:${node.indexInLine}]`
      );
    }

    const expectedType = this.symbolTable.get(varName);
    if (node.expression) {
      const expressionType = this.analyzeExpression(node.expression);

      if (expectedType === "unknown" && expressionType) {
        this.symbolTable.set(varName, this.inferType(expressionType));
      } else if (expressionType === "any") {
        //ok
      } else if (
        expressionType &&
        expectedType !== this.inferType(expressionType)
      ) {
        if (
          expectedType &&
          possibleConversions[this.inferType(expressionType)]?.includes(
            expectedType
          )
        ) {
          return;
        }

        throw new Error(
          `Type mismatch: cannot assign ${expectedType} to ${this.inferType(
            expressionType
          )} [${node.line}:${node.indexInLine}]`
        );
      } else if (!expressionType) {
        throw new Error(`Type mismatch: unknown type`);
      }
    }
  }

  private analyzeIfStatement(node: IfStatementNode): void {
    const conditionType = this.inferType(
      this.analyzeExpression(node.condition)
    );

    if (conditionType !== "Bool") {
      throw new Error(
        `Condition in if statement must be a boolean [${node.line}:${node.indexInLine}]`
      );
    }
    this.analyze(node.ifBlock);
    if (node.elseBlock) {
      this.analyze(node.elseBlock);
    }
  }

  private analyzeWhileStatement(node: WhileStatementNode): void {
    const conditionType = this.inferType(
      this.analyzeExpression(node.condition)
    );

    if (conditionType !== "Bool") {
      throw new Error(
        `Condition in while statement must be a boolean [${node.line}:${node.indexInLine}]`
      );
    }
    this.analyze(node.body);
  }

  private analyzeExpression(node: ExpressionNode): string | undefined {
    if (node instanceof LiteralNode) {
      return node.type;
    } else if (node instanceof IdNode) {
      if (!this.symbolTable.has(node.id)) {
        throw new Error(
          `Variable ${node.id} is not declared [${node.line}:${node.indexInLine}]`
        );
      }
      return this.symbolTable.get(node.id);
    } else if (node instanceof UnaryOperationNode) {
      return this.analyzeExpression(node.expression);
    } else if (node instanceof BinaryOperationNode) {
      const leftType = this.inferType(this.analyzeExpression(node.left));
      const rightType = this.inferType(this.analyzeExpression(node.right));

      if (relOps.includes(node.operator)) {
        return "Bool";
      }

      if (
        leftType !== rightType &&
        !possibleConversions[leftType]?.includes(rightType)
      ) {
        throw new Error(
          `Type mismatch in binary operation: ${leftType} and ${rightType} [${node.line}:${node.indexInLine}]`
        );
      }

      if (
        ["+", "-", "*", "/", "^"].includes(node.operator) &&
        leftType !== "Int" &&
        leftType !== "Float"
      ) {
        throw new Error(
          `Operator ${node.operator} cannot be applied to ${leftType} [${node.line}:${node.indexInLine}]`
        );
      }

      return leftType;
    }
    throw new Error(
      `Unknown expression type [${node.line}:${node.indexInLine}]`
    );
  }
}
