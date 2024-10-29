import { Token } from "../../lab2/src/lexer";
import {
  AssignStatementNode,
  ASTNode,
  BinaryOperationNode,
  BlockNode,
  EntryPointNode,
  ExpressionNode,
  GrammarNode,
  IdListNode,
  IdNode,
  IfStatementNode,
  LiteralNode,
  OutStatementNode,
  PackageDeclarationNode,
  StatementNode,
  UnaryOperationNode,
  VarDeclarationNode,
  VarDeclarationsListNode,
  WhileStatementNode,
} from "./ast.nodes";

export const relOps = ["==", "!=", "<", "<=", ">", ">=", "==="];

export class Parser {
  private tokens: Token[];
  private currentTokenIndex: number = 0;

  constructor(tokens: Token[]) {
    this.tokens = tokens;
  }

  private currentToken(): Token {
    return this.tokens[this.currentTokenIndex];
  }

  private nextToken(): Token {
    this.currentTokenIndex++;
    return this.currentToken();
  }

  public parse(): ASTNode {
    try {
      return this.parseGrammar();
    } catch (e) {
      if (e instanceof Error)
        e.message += ` [${this.currentToken().line}:${
          this.currentToken().indexInLine
        }]`;

      throw e;
    }
  }

  private parseGrammar(): ASTNode {
    return new GrammarNode(
      this.parsePackageDeclaration(),
      this.parseEntryPoint(),
      0,
      0
    );
  }

  private parsePackageDeclaration() {
    this.expectLexeme("package");
    const id = this.parsePackageId();
    this.expectLexeme(";");

    const currentToken = this.currentToken();
    const line = currentToken?.line;
    const indexInLine = currentToken?.indexInLine;
    return new PackageDeclarationNode(id, line, indexInLine);
  }

  private parseEntryPoint() {
    this.expectLexeme("fun");
    this.expectLexeme("main");
    this.expectLexeme("(");
    const params = this.parseOptionalVarDeclarationsList();
    this.expectLexeme(")");
    const body = this.parseBlock();
    const currentToken = this.currentToken();
    const line = currentToken?.line;
    const indexInLine = currentToken?.indexInLine;
    return new EntryPointNode(params, body, line, indexInLine);
  }

  private parsePackageId(): IdListNode {
    const ids = [];
    ids.push(this.parseId());
    while (this.currentToken().lexeme === ".") {
      this.nextToken();
      ids.push(this.parseId());
    }

    const currentToken = this.currentToken();
    const line = currentToken?.line;
    const indexInLine = currentToken?.indexInLine;
    return new IdListNode(ids, line, indexInLine);
  }

  private expectLexeme(token: string) {
    const currentLexeme = this.currentToken().lexeme;

    if (currentLexeme === token) {
      this.nextToken();
    } else {
      throw new Error(
        `Unexpected token: expected ${token}, got ${currentLexeme}`
      );
    }
  }

  private parseBlock(): BlockNode {
    this.expectLexeme("{");
    const statements = this.parseStatementsList();
    this.expectLexeme("}");
    const currentToken = this.currentToken();
    const line = currentToken?.line;
    const indexInLine = currentToken?.indexInLine;
    return new BlockNode(statements, line, indexInLine);
  }

  private parseStatementsList(): StatementNode[] {
    const statements: StatementNode[] = [];
    while (this.currentToken().lexeme !== "}") {
      statements.push(this.parseStatement());
      if (this.currentToken().lexeme === ";") {
        this.nextToken();
      }
    }
    return statements;
  }

  private parseStatement(): StatementNode {
    const token = this.currentToken();
    if (token.lexeme === "if") {
      return this.parseIfStatement();
    } else if (token.lexeme === "while") {
      return this.parseWhileStatement();
    } else if (token.lexeme === "print") {
      return this.parseOutStatement();
    } else if (token.lexeme === "var" || token.type === "identifier") {
      return this.parseAssignStatement();
    } else {
      throw new Error(`Unexpected statement type: ${token.lexeme}`);
    }
  }

  private parseAssignStatement(): AssignStatementNode {
    let varDecl = null;
    if (this.currentToken().lexeme === "var") {
      this.nextToken();
      varDecl = this.parseVarDeclaration();
    } else {
      const currentToken = this.currentToken();
      const line = currentToken?.line;
      const indexInLine = currentToken?.indexInLine;
      varDecl = new IdNode(this.parseId(), line, indexInLine);
    }

    let expression = null;
    if (this.currentToken().lexeme === "=") {
      this.nextToken();
      expression = this.parseExpression();
    }

    const currentToken = this.currentToken();
    const line = currentToken?.line;
    const indexInLine = currentToken?.indexInLine;

    return new AssignStatementNode(varDecl, expression, line, indexInLine);
  }

  private parseIfStatement(): IfStatementNode {
    this.expectLexeme("if");
    this.expectLexeme("(");
    const condition = this.parseExpression();
    this.expectLexeme(")");
    const ifBlock = this.parseBlock();

    let elseBlock = null;
    if (this.currentToken().lexeme === "else") {
      this.nextToken();
      if (this.currentToken().lexeme === "if") {
        elseBlock = this.parseIfStatement();
      } else {
        elseBlock = this.parseBlock();
      }
    }

    const currentToken = this.currentToken();
    const line = currentToken?.line;
    const indexInLine = currentToken?.indexInLine;
    return new IfStatementNode(
      condition,
      ifBlock,
      elseBlock,
      line,
      indexInLine
    );
  }

  private parseWhileStatement(): WhileStatementNode {
    this.expectLexeme("while");
    this.expectLexeme("(");
    const condition = this.parseExpression();
    this.expectLexeme(")");
    const body = this.parseBlock();

    const currentToken = this.currentToken();
    const line = currentToken?.line;
    const indexInLine = currentToken?.indexInLine;
    return new WhileStatementNode(condition, body, line, indexInLine);
  }

  private parseExpression(): ExpressionNode {
    let node = this.parseTerm();

    while (
      this.currentToken().lexeme === "+" ||
      this.currentToken().lexeme === "-"
    ) {
      const operator = this.currentToken();
      this.nextToken();
      const right = this.parseTerm();
      const currentToken = this.currentToken();
      const line = currentToken?.line;
      const indexInLine = currentToken?.indexInLine;
      node = new BinaryOperationNode(
        node,
        operator.lexeme,
        right,
        line,
        indexInLine
      );
    }

    return node;
  }

  private parseTerm(): ExpressionNode {
    let node = this.parseFactor();
    while (
      this.currentToken().lexeme === "*" ||
      this.currentToken().lexeme === "/" ||
      this.currentToken().lexeme === "^" ||
      relOps.includes(this.currentToken().lexeme)
    ) {
      const operator = this.currentToken();
      this.nextToken();
      const right = this.parseFactor();
      const currentToken = this.currentToken();
      const line = currentToken?.line;
      const indexInLine = currentToken?.indexInLine;
      node = new BinaryOperationNode(
        node,
        operator.lexeme,
        right,
        line,
        indexInLine
      );
    }
    return node;
  }

  private parseFactor(): ExpressionNode {
    const token = this.currentToken();

    if (token.type === "identifier") {
      const currentToken = this.currentToken();
      const line = currentToken?.line;
      const indexInLine = currentToken?.indexInLine;
      return new IdNode(this.parseId(), line, indexInLine);
    } else if (
      token.lexeme === "true" ||
      token.lexeme === "false" ||
      token.type === "bool_literal"
    ) {
      this.nextToken();
      const currentToken = this.currentToken();
      const line = currentToken?.line;
      const indexInLine = currentToken?.indexInLine;
      return new LiteralNode(token.lexeme, "bool_literal", line, indexInLine);
    } else if (token.type === "int_literal" || token.type === "float_literal") {
      this.nextToken();
      const currentToken = this.currentToken();
      const line = currentToken?.line;
      const indexInLine = currentToken?.indexInLine;
      return new LiteralNode(token.lexeme, token.type, line, indexInLine);
    } else if (token.lexeme === "(") {
      this.nextToken();
      const expr = this.parseExpression();
      this.expectLexeme(")");
      return expr;
    } else if (token.lexeme === "+" || token.lexeme === "-") {
      const sign = token.lexeme;
      this.nextToken();
      const nextFactor = this.parseFactor();
      const currentToken = this.currentToken();
      const line = currentToken?.line;
      const indexInLine = currentToken?.indexInLine;
      return new UnaryOperationNode(sign, nextFactor, line, indexInLine);
    } else {
      throw new Error(`Unexpected factor: ${token.lexeme}`);
    }
  }

  private parseId(): string {
    const token = this.currentToken();
    if (token.type === "identifier") {
      this.nextToken();

      if (token.lexeme === "readln") {
        this.expectLexeme("(");
        this.expectLexeme(")");
      }

      return token.lexeme;
    } else {
      throw new Error(`Expected identifier, found ${token.type}`);
    }
  }

  private parseOptionalVarDeclarationsList(): VarDeclarationsListNode | null {
    if (this.currentToken().lexeme === "id") {
      return this.parseVarDeclarationsList();
    }

    return null;
  }

  private parseVarDeclarationsList(): VarDeclarationsListNode {
    const declarations: VarDeclarationNode[] = [];
    declarations.push(this.parseVarDeclaration());
    while (this.currentToken().lexeme === ",") {
      this.nextToken();
      declarations.push(this.parseVarDeclaration());
    }

    const currentToken = this.currentToken();
    const line = currentToken?.line;
    const indexInLine = currentToken?.indexInLine;
    return new VarDeclarationsListNode(declarations, line, indexInLine);
  }

  private parseOutStatement(): OutStatementNode {
    this.expectLexeme("print");
    this.expectLexeme("(");
    const expression = this.parseExpression();
    this.expectLexeme(")");
    const currentToken = this.currentToken();
    const line = currentToken?.line;
    const indexInLine = currentToken?.indexInLine;
    return new OutStatementNode(expression, line, indexInLine);
  }

  private parseVarDeclaration(): VarDeclarationNode {
    const id = this.parseId();
    let type: string | null = null;

    if (this.currentToken().lexeme === ":") {
      this.nextToken();
      type = this.currentToken().lexeme;
      this.nextToken();
    }

    const currentToken = this.currentToken();
    const line = currentToken?.line;
    const indexInLine = currentToken?.indexInLine;
    return new VarDeclarationNode(id, type, line, indexInLine);
  }
}
