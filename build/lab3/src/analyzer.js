"use strict";
// import { ASTNode } from "./ast.nodes";
// export class SemanticAnalyzer {
//   analyze(ast: ASTNode): void {
//     this.visitNode(ast);
//   }
//   private visitNode(node: ASTNode): void {
//     if (node instanceof AssignStatementNode) {
//       this.checkAssignment(node);
//     } else if (node instanceof IfStatementNode) {
//       this.checkIfStatement(node);
//     }
//     // Інші типи вузлів
//   }
//   private checkAssignment(node: AssignStatementNode): void {
//     const varType = this.getVariableType(node.varName);
//     const exprType = this.inferExpressionType(node.expression);
//     if (varType !== exprType) {
//       throw new Error(`Type error in assignment to ${node.varName}`);
//     }
//   }
//   private checkIfStatement(node: IfStatementNode): void {
//     const condType = this.inferExpressionType(node.condition);
//     if (condType !== "Bool") {
//       throw new Error("Condition in if statement must be of type Bool");
//     }
//   }
//   // Додаткові методи для перевірки типів
// }
