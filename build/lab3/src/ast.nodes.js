"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiteralNode = exports.OutStatementNode = exports.VarDeclarationNode = exports.VarDeclarationsListNode = exports.IdNode = exports.IdListNode = exports.BinaryOperationNode = exports.WhileStatementNode = exports.IfStatementNode = exports.AssignStatementNode = exports.BlockNode = exports.EntryPointNode = exports.PackageDeclarationNode = exports.GrammarNode = exports.StatementNode = exports.ExpressionNode = exports.ASTNode = void 0;
class ASTNode {
}
exports.ASTNode = ASTNode;
class ExpressionNode extends ASTNode {
}
exports.ExpressionNode = ExpressionNode;
class StatementNode extends ASTNode {
}
exports.StatementNode = StatementNode;
class GrammarNode extends ASTNode {
    packageDecl;
    entryPoint;
    constructor(packageDecl, entryPoint) {
        super();
        this.packageDecl = packageDecl;
        this.entryPoint = entryPoint;
    }
}
exports.GrammarNode = GrammarNode;
class PackageDeclarationNode extends ASTNode {
    id;
    constructor(id) {
        super();
        this.id = id;
    }
}
exports.PackageDeclarationNode = PackageDeclarationNode;
class EntryPointNode extends ASTNode {
    params;
    body;
    constructor(params, body) {
        super();
        this.params = params;
        this.body = body;
    }
}
exports.EntryPointNode = EntryPointNode;
class BlockNode extends ASTNode {
    statements;
    constructor(statements) {
        super();
        this.statements = statements;
    }
}
exports.BlockNode = BlockNode;
class AssignStatementNode extends StatementNode {
    varDecl;
    expression;
    constructor(varDecl, expression) {
        super();
        this.varDecl = varDecl;
        this.expression = expression;
    }
}
exports.AssignStatementNode = AssignStatementNode;
class IfStatementNode extends StatementNode {
    condition;
    ifBlock;
    elseBlock;
    constructor(condition, ifBlock, elseBlock) {
        super();
        this.condition = condition;
        this.ifBlock = ifBlock;
        this.elseBlock = elseBlock;
    }
}
exports.IfStatementNode = IfStatementNode;
class WhileStatementNode extends StatementNode {
    condition;
    body;
    constructor(condition, body) {
        super();
        this.condition = condition;
        this.body = body;
    }
}
exports.WhileStatementNode = WhileStatementNode;
class BinaryOperationNode extends ExpressionNode {
    left;
    operator;
    right;
    constructor(left, operator, right) {
        super();
        this.left = left;
        this.operator = operator;
        this.right = right;
    }
}
exports.BinaryOperationNode = BinaryOperationNode;
class IdListNode extends ASTNode {
    ids;
    constructor(ids) {
        super();
        this.ids = ids;
    }
}
exports.IdListNode = IdListNode;
class IdNode extends ExpressionNode {
    name;
    constructor(name) {
        super();
        this.name = name;
    }
}
exports.IdNode = IdNode;
class VarDeclarationsListNode extends ASTNode {
    declarations;
    constructor(declarations) {
        super();
        this.declarations = declarations;
    }
}
exports.VarDeclarationsListNode = VarDeclarationsListNode;
class VarDeclarationNode extends ASTNode {
    id;
    type;
    constructor(id, type) {
        super();
        this.id = id;
        this.type = type;
    }
}
exports.VarDeclarationNode = VarDeclarationNode;
class OutStatementNode extends StatementNode {
    expression;
    constructor(expression) {
        super();
        this.expression = expression;
    }
}
exports.OutStatementNode = OutStatementNode;
class LiteralNode extends ExpressionNode {
    value;
    type;
    constructor(value, type) {
        super();
        this.value = value;
        this.type = type;
    }
}
exports.LiteralNode = LiteralNode;
