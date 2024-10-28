"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
const ast_nodes_1 = require("./ast.nodes");
class Parser {
    tokens;
    currentTokenIndex = 0;
    constructor(tokens) {
        this.tokens = tokens;
    }
    currentToken() {
        return this.tokens[this.currentTokenIndex];
    }
    nextToken() {
        this.currentTokenIndex++;
        return this.currentToken();
    }
    parse() {
        return this.parseGrammar();
    }
    parseGrammar() {
        return new ast_nodes_1.GrammarNode(this.parsePackageDeclaration(), this.parseEntryPoint());
    }
    parsePackageDeclaration() {
        this.expect("package");
        const id = this.parsePackageId();
        this.expect(";");
        return new ast_nodes_1.PackageDeclarationNode(id);
    }
    parseEntryPoint() {
        this.expect("fun");
        this.expect("main");
        this.expect("(");
        const params = this.parseOptionalVarDeclarationsList();
        this.expect(")");
        const body = this.parseBlock();
        return new ast_nodes_1.EntryPointNode(params, body);
    }
    parsePackageId() {
        const ids = [];
        ids.push(this.parseId());
        while (this.currentToken().lexeme === ".") {
            this.nextToken();
            ids.push(this.parseId());
        }
        return new ast_nodes_1.IdListNode(ids);
    }
    expect(token) {
        if (this.currentToken().lexeme === token) {
            this.nextToken();
        }
        else {
            throw new Error(`Unexpected token: expected ${token}`);
        }
    }
    parseBlock() {
        this.expect("{");
        const statements = this.parseStatementsList();
        this.expect("}");
        return new ast_nodes_1.BlockNode(statements);
    }
    parseStatementsList() {
        const statements = [];
        while (this.currentToken().lexeme !== "}") {
            statements.push(this.parseStatement());
            if (this.currentToken().lexeme === ";") {
                this.nextToken();
            }
        }
        return statements;
    }
    parseStatement() {
        const token = this.currentToken();
        if (token.lexeme === "if") {
            return this.parseIfStatement();
        }
        else if (token.lexeme === "while") {
            return this.parseWhileStatement();
        }
        else if (token.lexeme === "print") {
            return this.parseOutStatement();
        }
        else if (token.lexeme === "var" || token.lexeme === "id") {
            return this.parseAssignStatement();
        }
        else {
            throw new Error(`Unexpected statement type: ${token.lexeme}`);
        }
    }
    parseAssignStatement() {
        let varDecl = null;
        if (this.currentToken().lexeme === "var") {
            this.nextToken();
            varDecl = this.parseVarDeclaration();
        }
        else {
            varDecl = new ast_nodes_1.IdNode(this.parseId());
        }
        this.expect("=");
        const expression = this.parseExpression();
        return new ast_nodes_1.AssignStatementNode(varDecl, expression);
    }
    parseIfStatement() {
        this.expect("if");
        this.expect("(");
        const condition = this.parseExpression();
        this.expect(")");
        const ifBlock = this.parseBlock();
        let elseBlock = null;
        if (this.currentToken().lexeme === "else") {
            this.nextToken();
            if (this.currentToken().lexeme === "if") {
                elseBlock = this.parseIfStatement();
            }
            else {
                elseBlock = this.parseBlock();
            }
        }
        return new ast_nodes_1.IfStatementNode(condition, ifBlock, elseBlock);
    }
    parseWhileStatement() {
        this.expect("while");
        this.expect("(");
        const condition = this.parseExpression();
        this.expect(")");
        const body = this.parseBlock();
        return new ast_nodes_1.WhileStatementNode(condition, body);
    }
    parseExpression() {
        let node = this.parseTerm();
        while (this.currentToken().lexeme === "+" ||
            this.currentToken().lexeme === "-") {
            const operator = this.currentToken();
            this.nextToken();
            const right = this.parseTerm();
            node = new ast_nodes_1.BinaryOperationNode(node, operator.lexeme, right);
        }
        return node;
    }
    parseTerm() {
        let node = this.parseFactor();
        while (this.currentToken().lexeme === "*" ||
            this.currentToken().lexeme === "/" ||
            this.currentToken().lexeme === "^") {
            const operator = this.currentToken();
            this.nextToken();
            const right = this.parseFactor();
            node = new ast_nodes_1.BinaryOperationNode(node, operator.lexeme, right);
        }
        return node;
    }
    parseFactor() {
        const token = this.currentToken();
        if (token.lexeme === "id") {
            return new ast_nodes_1.IdNode(this.parseId());
        }
        else if (token.lexeme === "int" ||
            token.lexeme === "float" ||
            token.lexeme === "bool") {
            this.nextToken();
            return new ast_nodes_1.LiteralNode(token.lexeme, token.type);
        }
        else if (token.type === "(") {
            this.nextToken();
            const expr = this.parseExpression();
            this.expect(")");
            return expr;
        }
        else {
            throw new Error(`Unexpected factor: ${token.type}`);
        }
    }
    parseId() {
        const token = this.currentToken();
        if (token.type === "id") {
            this.nextToken();
            return token.lexeme;
        }
        else {
            throw new Error(`Expected identifier, found ${token.lexeme}`);
        }
    }
    parseOptionalVarDeclarationsList() {
        if (this.currentToken().lexeme === "id") {
            return this.parseVarDeclarationsList();
        }
        return null;
    }
    parseVarDeclarationsList() {
        const declarations = [];
        declarations.push(this.parseVarDeclaration());
        while (this.currentToken().lexeme === ",") {
            this.nextToken();
            declarations.push(this.parseVarDeclaration());
        }
        return new ast_nodes_1.VarDeclarationsListNode(declarations);
    }
    parseOutStatement() {
        this.expect("print");
        this.expect("(");
        const expression = this.parseExpression();
        this.expect(")");
        return new ast_nodes_1.OutStatementNode(expression);
    }
    parseVarDeclaration() {
        const id = this.parseId();
        let type = null;
        if (this.currentToken().type === ":") {
            this.nextToken();
            type = this.currentToken().type;
            this.nextToken();
        }
        return new ast_nodes_1.VarDeclarationNode(id, type);
    }
}
exports.Parser = Parser;
