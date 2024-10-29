export class ASTNode {
  constructor(
    public readonly name: string,
    public readonly line: number,
    public readonly indexInLine: number
  ) {}
}

export abstract class ExpressionNode extends ASTNode {}

export abstract class StatementNode extends ASTNode {}

export class GrammarNode extends ASTNode {
  constructor(
    public packageDecl: PackageDeclarationNode,
    public entryPoint: EntryPointNode,
    public readonly line: number,
    public readonly indexInLine: number
  ) {
    super(GrammarNode.name, line, indexInLine);
  }
}

export class PackageDeclarationNode extends ASTNode {
  constructor(
    public id: IdListNode,
    public readonly line: number,
    public readonly indexInLine: number
  ) {
    super(PackageDeclarationNode.name, line, indexInLine);
  }
}

export class EntryPointNode extends ASTNode {
  constructor(
    public params: VarDeclarationsListNode | null,
    public body: BlockNode,
    public readonly line: number,
    public readonly indexInLine: number
  ) {
    super(EntryPointNode.name, line, indexInLine);
  }
}

export class BlockNode extends ASTNode {
  constructor(
    public statements: StatementNode[],
    public readonly line: number,
    public readonly indexInLine: number
  ) {
    super(BlockNode.name, line, indexInLine);
  }
}

export class AssignStatementNode extends StatementNode {
  constructor(
    public varDecl: VarDeclarationNode | IdNode,
    public expression: ExpressionNode | null,
    public readonly line: number,
    public readonly indexInLine: number
  ) {
    super(AssignStatementNode.name, line, indexInLine);
  }
}

export class IfStatementNode extends StatementNode {
  constructor(
    public condition: ExpressionNode,
    public ifBlock: BlockNode,
    public elseBlock: BlockNode | IfStatementNode | null,
    public readonly line: number,
    public readonly indexInLine: number
  ) {
    super(IfStatementNode.name, line, indexInLine);
  }
}

export class WhileStatementNode extends StatementNode {
  constructor(
    public condition: ExpressionNode,
    public body: BlockNode,
    public readonly line: number,
    public readonly indexInLine: number
  ) {
    super(WhileStatementNode.name, line, indexInLine);
  }
}

export class UnaryOperationNode extends ExpressionNode {
  constructor(
    public operator: "+" | "-",
    public expression: ExpressionNode,
    public readonly line: number,
    public readonly indexInLine: number
  ) {
    super(UnaryOperationNode.name, line, indexInLine);
  }
}

export class BinaryOperationNode extends ExpressionNode {
  constructor(
    public left: ExpressionNode,
    public operator: string,
    public right: ExpressionNode,
    public readonly line: number,
    public readonly indexInLine: number
  ) {
    super(BinaryOperationNode.name, line, indexInLine);
  }
}

export class IdListNode extends ASTNode {
  constructor(
    public ids: string[],
    public readonly line: number,
    public readonly indexInLine: number
  ) {
    super(IdListNode.name, line, indexInLine);
  }
}

export class IdNode extends ExpressionNode {
  constructor(
    public id: string,
    public readonly line: number,
    public readonly indexInLine: number
  ) {
    super(IdNode.name, line, indexInLine);
  }
}

export class VarDeclarationsListNode extends ASTNode {
  constructor(
    public declarations: VarDeclarationNode[],
    public readonly line: number,
    public readonly indexInLine: number
  ) {
    super(VarDeclarationsListNode.name, line, indexInLine);
  }
}

export class VarDeclarationNode extends ASTNode {
  constructor(
    public id: string,
    public type: string | null,
    public readonly line: number,
    public readonly indexInLine: number
  ) {
    super(VarDeclarationNode.name, line, indexInLine);
  }
}

export class OutStatementNode extends StatementNode {
  constructor(
    public expression: ExpressionNode,
    public readonly line: number,
    public readonly indexInLine: number
  ) {
    super(OutStatementNode.name, line, indexInLine);
  }
}

export class LiteralNode extends ExpressionNode {
  constructor(
    public value: string,
    public type: string,
    public readonly line: number,
    public readonly indexInLine: number
  ) {
    super(LiteralNode.name, line, indexInLine);
  }
}
