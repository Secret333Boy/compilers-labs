export class ASTNode {
  constructor(public readonly name: string) {}
}

export abstract class ExpressionNode extends ASTNode {}

export abstract class StatementNode extends ASTNode {}

export class GrammarNode extends ASTNode {
  constructor(
    public packageDecl: PackageDeclarationNode,
    public entryPoint: EntryPointNode
  ) {
    super(GrammarNode.name);
  }
}

export class PackageDeclarationNode extends ASTNode {
  constructor(public id: IdListNode) {
    super(PackageDeclarationNode.name);
  }
}

export class EntryPointNode extends ASTNode {
  constructor(
    public params: VarDeclarationsListNode | null,
    public body: BlockNode
  ) {
    super(EntryPointNode.name);
  }
}

export class BlockNode extends ASTNode {
  constructor(public statements: StatementNode[]) {
    super(BlockNode.name);
  }
}

export class AssignStatementNode extends StatementNode {
  constructor(
    public varDecl: VarDeclarationNode | IdNode,
    public expression: ExpressionNode | null
  ) {
    super(AssignStatementNode.name);
  }
}

export class IfStatementNode extends StatementNode {
  constructor(
    public condition: ExpressionNode,
    public ifBlock: BlockNode,
    public elseBlock: BlockNode | IfStatementNode | null
  ) {
    super(IfStatementNode.name);
  }
}

export class WhileStatementNode extends StatementNode {
  constructor(public condition: ExpressionNode, public body: BlockNode) {
    super(WhileStatementNode.name);
  }
}

export class UnaryOperationNode extends ExpressionNode {
  constructor(public operator: "+" | "-", public expression: ExpressionNode) {
    super(UnaryOperationNode.name);
  }
}

export class BinaryOperationNode extends ExpressionNode {
  constructor(
    public left: ExpressionNode,
    public operator: string,
    public right: ExpressionNode
  ) {
    super(BinaryOperationNode.name);
  }
}

export class IdListNode extends ASTNode {
  constructor(public ids: string[]) {
    super(IdListNode.name);
  }
}

export class IdNode extends ExpressionNode {
  constructor(public name: string) {
    super(IdNode.name);
  }
}

export class VarDeclarationsListNode extends ASTNode {
  constructor(public declarations: VarDeclarationNode[]) {
    super(VarDeclarationsListNode.name);
  }
}

export class VarDeclarationNode extends ASTNode {
  constructor(public id: string, public type: string | null) {
    super(VarDeclarationNode.name);
  }
}

export class OutStatementNode extends StatementNode {
  constructor(public expression: ExpressionNode) {
    super(OutStatementNode.name);
  }
}

export class LiteralNode extends ExpressionNode {
  constructor(public value: string, public type: string) {
    super(LiteralNode.name);
  }
}
