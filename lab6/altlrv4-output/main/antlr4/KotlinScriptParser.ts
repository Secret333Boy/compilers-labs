// Generated from E:/Магістр/semestr1/compilers-labs/lab6/src/main/antlr4/KotlinScript.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import KotlinScriptListener from "./KotlinScriptListener.js";
import KotlinScriptVisitor from "./KotlinScriptVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class KotlinScriptParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly WS = 2;
	public static readonly Dot = 3;
	public static readonly Comma = 4;
	public static readonly Colon = 5;
	public static readonly Semicolon = 6;
	public static readonly LeftParen = 7;
	public static readonly RightParen = 8;
	public static readonly LeftBrace = 9;
	public static readonly RightBrace = 10;
	public static readonly AddOps = 11;
	public static readonly MultOps = 12;
	public static readonly RelOps = 13;
	public static readonly AssignOp = 14;
	public static readonly InlineCommentOp = 15;
	public static readonly PACKAGE = 16;
	public static readonly FUN = 17;
	public static readonly VAR = 18;
	public static readonly WHILE = 19;
	public static readonly IF = 20;
	public static readonly ELSE = 21;
	public static readonly TYPE = 22;
	public static readonly READ_LN = 23;
	public static readonly PRINT = 24;
	public static readonly ID = 25;
	public static readonly BoolLiteral = 26;
	public static readonly IntLiteral = 27;
	public static readonly RealLiteral = 28;
	public static readonly PackageId = 29;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_varTypeSpecifier = 1;
	public static readonly RULE_varDeclaration = 2;
	public static readonly RULE_varDeclarationsList = 3;
	public static readonly RULE_expression = 4;
	public static readonly RULE_term = 5;
	public static readonly RULE_factor = 6;
	public static readonly RULE_literal = 7;
	public static readonly RULE_block = 8;
	public static readonly RULE_statementsList = 9;
	public static readonly RULE_closableStatement = 10;
	public static readonly RULE_nonclosableStatement = 11;
	public static readonly RULE_declarationStatement = 12;
	public static readonly RULE_assignStatement = 13;
	public static readonly RULE_inStatement = 14;
	public static readonly RULE_outStatement = 15;
	public static readonly RULE_whileStatement = 16;
	public static readonly RULE_ifStatement = 17;
	public static readonly RULE_packageDeclaration = 18;
	public static readonly RULE_entryPointFunName = 19;
	public static readonly RULE_entryPoint = 20;
	public static readonly literalNames: (string | null)[] = [ null, "'main'", 
                                                            null, "'.'", 
                                                            "','", "':'", 
                                                            "';'", "'('", 
                                                            "')'", "'{'", 
                                                            "'}'", null, 
                                                            null, null, 
                                                            "'='", null, 
                                                            "'package'", 
                                                            "'fun'", "'var'", 
                                                            "'while'", "'if'", 
                                                            "'else'", null, 
                                                            "'readln'", 
                                                            "'print'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             "WS", "Dot", 
                                                             "Comma", "Colon", 
                                                             "Semicolon", 
                                                             "LeftParen", 
                                                             "RightParen", 
                                                             "LeftBrace", 
                                                             "RightBrace", 
                                                             "AddOps", "MultOps", 
                                                             "RelOps", "AssignOp", 
                                                             "InlineCommentOp", 
                                                             "PACKAGE", 
                                                             "FUN", "VAR", 
                                                             "WHILE", "IF", 
                                                             "ELSE", "TYPE", 
                                                             "READ_LN", 
                                                             "PRINT", "ID", 
                                                             "BoolLiteral", 
                                                             "IntLiteral", 
                                                             "RealLiteral", 
                                                             "PackageId" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "varTypeSpecifier", "varDeclaration", "varDeclarationsList", 
		"expression", "term", "factor", "literal", "block", "statementsList", 
		"closableStatement", "nonclosableStatement", "declarationStatement", "assignStatement", 
		"inStatement", "outStatement", "whileStatement", "ifStatement", "packageDeclaration", 
		"entryPointFunName", "entryPoint",
	];
	public get grammarFileName(): string { return "KotlinScript.g4"; }
	public get literalNames(): (string | null)[] { return KotlinScriptParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return KotlinScriptParser.symbolicNames; }
	public get ruleNames(): string[] { return KotlinScriptParser.ruleNames; }
	public get serializedATN(): number[] { return KotlinScriptParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, KotlinScriptParser._ATN, KotlinScriptParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, KotlinScriptParser.RULE_program);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 42;
			this.packageDeclaration();
			this.state = 43;
			this.entryPoint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varTypeSpecifier(): VarTypeSpecifierContext {
		let localctx: VarTypeSpecifierContext = new VarTypeSpecifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, KotlinScriptParser.RULE_varTypeSpecifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 45;
			this.match(KotlinScriptParser.Colon);
			this.state = 46;
			this.match(KotlinScriptParser.TYPE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varDeclaration(): VarDeclarationContext {
		let localctx: VarDeclarationContext = new VarDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, KotlinScriptParser.RULE_varDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 48;
			this.match(KotlinScriptParser.ID);
			this.state = 50;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5) {
				{
				this.state = 49;
				this.varTypeSpecifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varDeclarationsList(): VarDeclarationsListContext {
		let localctx: VarDeclarationsListContext = new VarDeclarationsListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, KotlinScriptParser.RULE_varDeclarationsList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 52;
			this.varDeclaration();
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 53;
				this.match(KotlinScriptParser.Comma);
				this.state = 54;
				this.varDeclaration();
				}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, KotlinScriptParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 60;
			this.term();
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===11 || _la===13) {
				{
				{
				this.state = 61;
				_la = this._input.LA(1);
				if(!(_la===11 || _la===13)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 62;
				this.term();
				}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let localctx: TermContext = new TermContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, KotlinScriptParser.RULE_term);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 68;
			this.factor();
			this.state = 73;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===12 || _la===14) {
				{
				{
				this.state = 69;
				_la = this._input.LA(1);
				if(!(_la===12 || _la===14)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 70;
				this.factor();
				}
				}
				this.state = 75;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public factor(): FactorContext {
		let localctx: FactorContext = new FactorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, KotlinScriptParser.RULE_factor);
		try {
			this.state = 82;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 25:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 76;
				this.match(KotlinScriptParser.ID);
				}
				break;
			case 26:
			case 27:
			case 28:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 77;
				this.literal();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 78;
				this.match(KotlinScriptParser.LeftParen);
				this.state = 79;
				this.expression();
				this.state = 80;
				this.match(KotlinScriptParser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, KotlinScriptParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 84;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 469762048) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, KotlinScriptParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 86;
			this.match(KotlinScriptParser.LeftBrace);
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 52166656) !== 0)) {
				{
				this.state = 87;
				this.statementsList();
				}
			}

			this.state = 90;
			this.match(KotlinScriptParser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statementsList(): StatementsListContext {
		let localctx: StatementsListContext = new StatementsListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, KotlinScriptParser.RULE_statementsList);
		let _la: number;
		try {
			this.state = 104;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 18:
			case 24:
			case 25:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 92;
				this.closableStatement();
				this.state = 98;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 94;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===6) {
						{
						this.state = 93;
						this.match(KotlinScriptParser.Semicolon);
						}
					}

					}
					break;
				case 2:
					{
					{
					this.state = 96;
					this.match(KotlinScriptParser.Semicolon);
					this.state = 97;
					this.statementsList();
					}
					}
					break;
				}
				}
				}
				break;
			case 19:
			case 20:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 100;
				this.nonclosableStatement();
				this.state = 102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 52166656) !== 0)) {
					{
					this.state = 101;
					this.statementsList();
					}
				}

				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public closableStatement(): ClosableStatementContext {
		let localctx: ClosableStatementContext = new ClosableStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, KotlinScriptParser.RULE_closableStatement);
		try {
			this.state = 110;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 106;
				this.assignStatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 107;
				this.declarationStatement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 108;
				this.inStatement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 109;
				this.outStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nonclosableStatement(): NonclosableStatementContext {
		let localctx: NonclosableStatementContext = new NonclosableStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, KotlinScriptParser.RULE_nonclosableStatement);
		try {
			this.state = 114;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 19:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 112;
				this.whileStatement();
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 113;
				this.ifStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declarationStatement(): DeclarationStatementContext {
		let localctx: DeclarationStatementContext = new DeclarationStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, KotlinScriptParser.RULE_declarationStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 116;
			this.match(KotlinScriptParser.VAR);
			this.state = 117;
			this.varDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignStatement(): AssignStatementContext {
		let localctx: AssignStatementContext = new AssignStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, KotlinScriptParser.RULE_assignStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 119;
				this.match(KotlinScriptParser.VAR);
				}
			}

			this.state = 122;
			this.varDeclaration();
			this.state = 123;
			this.match(KotlinScriptParser.AssignOp);
			this.state = 124;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inStatement(): InStatementContext {
		let localctx: InStatementContext = new InStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, KotlinScriptParser.RULE_inStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 126;
			this.match(KotlinScriptParser.VAR);
			this.state = 127;
			this.varDeclaration();
			this.state = 128;
			this.match(KotlinScriptParser.AssignOp);
			this.state = 129;
			this.match(KotlinScriptParser.READ_LN);
			this.state = 130;
			this.match(KotlinScriptParser.LeftParen);
			this.state = 131;
			this.match(KotlinScriptParser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public outStatement(): OutStatementContext {
		let localctx: OutStatementContext = new OutStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, KotlinScriptParser.RULE_outStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 133;
			this.match(KotlinScriptParser.PRINT);
			this.state = 134;
			this.match(KotlinScriptParser.LeftParen);
			this.state = 135;
			this.expression();
			this.state = 136;
			this.match(KotlinScriptParser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let localctx: WhileStatementContext = new WhileStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, KotlinScriptParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 138;
			this.match(KotlinScriptParser.WHILE);
			this.state = 139;
			this.match(KotlinScriptParser.LeftParen);
			this.state = 140;
			this.expression();
			this.state = 141;
			this.match(KotlinScriptParser.RightParen);
			this.state = 142;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let localctx: IfStatementContext = new IfStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, KotlinScriptParser.RULE_ifStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 144;
			this.match(KotlinScriptParser.IF);
			this.state = 145;
			this.match(KotlinScriptParser.LeftParen);
			this.state = 146;
			this.expression();
			this.state = 147;
			this.match(KotlinScriptParser.RightParen);
			this.state = 148;
			this.block();
			this.state = 154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===21) {
				{
				this.state = 149;
				this.match(KotlinScriptParser.ELSE);
				this.state = 152;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 20:
					{
					this.state = 150;
					this.ifStatement();
					}
					break;
				case 9:
					{
					this.state = 151;
					this.block();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public packageDeclaration(): PackageDeclarationContext {
		let localctx: PackageDeclarationContext = new PackageDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, KotlinScriptParser.RULE_packageDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 156;
			this.match(KotlinScriptParser.PACKAGE);
			this.state = 157;
			this.match(KotlinScriptParser.PackageId);
			this.state = 158;
			this.match(KotlinScriptParser.Semicolon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public entryPointFunName(): EntryPointFunNameContext {
		let localctx: EntryPointFunNameContext = new EntryPointFunNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, KotlinScriptParser.RULE_entryPointFunName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 160;
			this.match(KotlinScriptParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public entryPoint(): EntryPointContext {
		let localctx: EntryPointContext = new EntryPointContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, KotlinScriptParser.RULE_entryPoint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 162;
			this.match(KotlinScriptParser.FUN);
			this.state = 163;
			this.entryPointFunName();
			this.state = 164;
			this.match(KotlinScriptParser.LeftParen);
			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 165;
				this.varDeclarationsList();
				}
			}

			this.state = 168;
			this.match(KotlinScriptParser.RightParen);
			this.state = 169;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,29,172,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,1,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,3,2,
	51,8,2,1,3,1,3,1,3,5,3,56,8,3,10,3,12,3,59,9,3,1,4,1,4,1,4,5,4,64,8,4,10,
	4,12,4,67,9,4,1,5,1,5,1,5,5,5,72,8,5,10,5,12,5,75,9,5,1,6,1,6,1,6,1,6,1,
	6,1,6,3,6,83,8,6,1,7,1,7,1,8,1,8,3,8,89,8,8,1,8,1,8,1,9,1,9,3,9,95,8,9,
	1,9,1,9,3,9,99,8,9,1,9,1,9,3,9,103,8,9,3,9,105,8,9,1,10,1,10,1,10,1,10,
	3,10,111,8,10,1,11,1,11,3,11,115,8,11,1,12,1,12,1,12,1,13,3,13,121,8,13,
	1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,
	15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
	1,17,3,17,153,8,17,3,17,155,8,17,1,18,1,18,1,18,1,18,1,19,1,19,1,20,1,20,
	1,20,1,20,3,20,167,8,20,1,20,1,20,1,20,1,20,0,0,21,0,2,4,6,8,10,12,14,16,
	18,20,22,24,26,28,30,32,34,36,38,40,0,3,2,0,11,11,13,13,2,0,12,12,14,14,
	1,0,26,28,169,0,42,1,0,0,0,2,45,1,0,0,0,4,48,1,0,0,0,6,52,1,0,0,0,8,60,
	1,0,0,0,10,68,1,0,0,0,12,82,1,0,0,0,14,84,1,0,0,0,16,86,1,0,0,0,18,104,
	1,0,0,0,20,110,1,0,0,0,22,114,1,0,0,0,24,116,1,0,0,0,26,120,1,0,0,0,28,
	126,1,0,0,0,30,133,1,0,0,0,32,138,1,0,0,0,34,144,1,0,0,0,36,156,1,0,0,0,
	38,160,1,0,0,0,40,162,1,0,0,0,42,43,3,36,18,0,43,44,3,40,20,0,44,1,1,0,
	0,0,45,46,5,5,0,0,46,47,5,22,0,0,47,3,1,0,0,0,48,50,5,25,0,0,49,51,3,2,
	1,0,50,49,1,0,0,0,50,51,1,0,0,0,51,5,1,0,0,0,52,57,3,4,2,0,53,54,5,4,0,
	0,54,56,3,4,2,0,55,53,1,0,0,0,56,59,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,
	58,7,1,0,0,0,59,57,1,0,0,0,60,65,3,10,5,0,61,62,7,0,0,0,62,64,3,10,5,0,
	63,61,1,0,0,0,64,67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,9,1,0,0,0,67,
	65,1,0,0,0,68,73,3,12,6,0,69,70,7,1,0,0,70,72,3,12,6,0,71,69,1,0,0,0,72,
	75,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,11,1,0,0,0,75,73,1,0,0,0,76,83,
	5,25,0,0,77,83,3,14,7,0,78,79,5,7,0,0,79,80,3,8,4,0,80,81,5,8,0,0,81,83,
	1,0,0,0,82,76,1,0,0,0,82,77,1,0,0,0,82,78,1,0,0,0,83,13,1,0,0,0,84,85,7,
	2,0,0,85,15,1,0,0,0,86,88,5,9,0,0,87,89,3,18,9,0,88,87,1,0,0,0,88,89,1,
	0,0,0,89,90,1,0,0,0,90,91,5,10,0,0,91,17,1,0,0,0,92,98,3,20,10,0,93,95,
	5,6,0,0,94,93,1,0,0,0,94,95,1,0,0,0,95,99,1,0,0,0,96,97,5,6,0,0,97,99,3,
	18,9,0,98,94,1,0,0,0,98,96,1,0,0,0,99,105,1,0,0,0,100,102,3,22,11,0,101,
	103,3,18,9,0,102,101,1,0,0,0,102,103,1,0,0,0,103,105,1,0,0,0,104,92,1,0,
	0,0,104,100,1,0,0,0,105,19,1,0,0,0,106,111,3,26,13,0,107,111,3,24,12,0,
	108,111,3,28,14,0,109,111,3,30,15,0,110,106,1,0,0,0,110,107,1,0,0,0,110,
	108,1,0,0,0,110,109,1,0,0,0,111,21,1,0,0,0,112,115,3,32,16,0,113,115,3,
	34,17,0,114,112,1,0,0,0,114,113,1,0,0,0,115,23,1,0,0,0,116,117,5,18,0,0,
	117,118,3,4,2,0,118,25,1,0,0,0,119,121,5,18,0,0,120,119,1,0,0,0,120,121,
	1,0,0,0,121,122,1,0,0,0,122,123,3,4,2,0,123,124,5,14,0,0,124,125,3,8,4,
	0,125,27,1,0,0,0,126,127,5,18,0,0,127,128,3,4,2,0,128,129,5,14,0,0,129,
	130,5,23,0,0,130,131,5,7,0,0,131,132,5,8,0,0,132,29,1,0,0,0,133,134,5,24,
	0,0,134,135,5,7,0,0,135,136,3,8,4,0,136,137,5,8,0,0,137,31,1,0,0,0,138,
	139,5,19,0,0,139,140,5,7,0,0,140,141,3,8,4,0,141,142,5,8,0,0,142,143,3,
	16,8,0,143,33,1,0,0,0,144,145,5,20,0,0,145,146,5,7,0,0,146,147,3,8,4,0,
	147,148,5,8,0,0,148,154,3,16,8,0,149,152,5,21,0,0,150,153,3,34,17,0,151,
	153,3,16,8,0,152,150,1,0,0,0,152,151,1,0,0,0,153,155,1,0,0,0,154,149,1,
	0,0,0,154,155,1,0,0,0,155,35,1,0,0,0,156,157,5,16,0,0,157,158,5,29,0,0,
	158,159,5,6,0,0,159,37,1,0,0,0,160,161,5,1,0,0,161,39,1,0,0,0,162,163,5,
	17,0,0,163,164,3,38,19,0,164,166,5,7,0,0,165,167,3,6,3,0,166,165,1,0,0,
	0,166,167,1,0,0,0,167,168,1,0,0,0,168,169,5,8,0,0,169,170,3,16,8,0,170,
	41,1,0,0,0,16,50,57,65,73,82,88,94,98,102,104,110,114,120,152,154,166];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!KotlinScriptParser.__ATN) {
			KotlinScriptParser.__ATN = new ATNDeserializer().deserialize(KotlinScriptParser._serializedATN);
		}

		return KotlinScriptParser.__ATN;
	}


	static DecisionsToDFA = KotlinScriptParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: KotlinScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public packageDeclaration(): PackageDeclarationContext {
		return this.getTypedRuleContext(PackageDeclarationContext, 0) as PackageDeclarationContext;
	}
	public entryPoint(): EntryPointContext {
		return this.getTypedRuleContext(EntryPointContext, 0) as EntryPointContext;
	}
    public get ruleIndex(): number {
    	return KotlinScriptParser.RULE_program;
	}
	public enterRule(listener: KotlinScriptListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: KotlinScriptListener): void {
	    if(listener.exitProgram) {
	 		listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KotlinScriptVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarTypeSpecifierContext extends ParserRuleContext {
	constructor(parser?: KotlinScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Colon(): TerminalNode {
		return this.getToken(KotlinScriptParser.Colon, 0);
	}
	public TYPE(): TerminalNode {
		return this.getToken(KotlinScriptParser.TYPE, 0);
	}
    public get ruleIndex(): number {
    	return KotlinScriptParser.RULE_varTypeSpecifier;
	}
	public enterRule(listener: KotlinScriptListener): void {
	    if(listener.enterVarTypeSpecifier) {
	 		listener.enterVarTypeSpecifier(this);
		}
	}
	public exitRule(listener: KotlinScriptListener): void {
	    if(listener.exitVarTypeSpecifier) {
	 		listener.exitVarTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KotlinScriptVisitor<Result>): Result {
		if (visitor.visitVarTypeSpecifier) {
			return visitor.visitVarTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarDeclarationContext extends ParserRuleContext {
	constructor(parser?: KotlinScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(KotlinScriptParser.ID, 0);
	}
	public varTypeSpecifier(): VarTypeSpecifierContext {
		return this.getTypedRuleContext(VarTypeSpecifierContext, 0) as VarTypeSpecifierContext;
	}
    public get ruleIndex(): number {
    	return KotlinScriptParser.RULE_varDeclaration;
	}
	public enterRule(listener: KotlinScriptListener): void {
	    if(listener.enterVarDeclaration) {
	 		listener.enterVarDeclaration(this);
		}
	}
	public exitRule(listener: KotlinScriptListener): void {
	    if(listener.exitVarDeclaration) {
	 		listener.exitVarDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KotlinScriptVisitor<Result>): Result {
		if (visitor.visitVarDeclaration) {
			return visitor.visitVarDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarDeclarationsListContext extends ParserRuleContext {
	constructor(parser?: KotlinScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public varDeclaration_list(): VarDeclarationContext[] {
		return this.getTypedRuleContexts(VarDeclarationContext) as VarDeclarationContext[];
	}
	public varDeclaration(i: number): VarDeclarationContext {
		return this.getTypedRuleContext(VarDeclarationContext, i) as VarDeclarationContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(KotlinScriptParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(KotlinScriptParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return KotlinScriptParser.RULE_varDeclarationsList;
	}
	public enterRule(listener: KotlinScriptListener): void {
	    if(listener.enterVarDeclarationsList) {
	 		listener.enterVarDeclarationsList(this);
		}
	}
	public exitRule(listener: KotlinScriptListener): void {
	    if(listener.exitVarDeclarationsList) {
	 		listener.exitVarDeclarationsList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KotlinScriptVisitor<Result>): Result {
		if (visitor.visitVarDeclarationsList) {
			return visitor.visitVarDeclarationsList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: KotlinScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public term_list(): TermContext[] {
		return this.getTypedRuleContexts(TermContext) as TermContext[];
	}
	public term(i: number): TermContext {
		return this.getTypedRuleContext(TermContext, i) as TermContext;
	}
	public AddOps_list(): TerminalNode[] {
	    	return this.getTokens(KotlinScriptParser.AddOps);
	}
	public AddOps(i: number): TerminalNode {
		return this.getToken(KotlinScriptParser.AddOps, i);
	}
	public RelOps_list(): TerminalNode[] {
	    	return this.getTokens(KotlinScriptParser.RelOps);
	}
	public RelOps(i: number): TerminalNode {
		return this.getToken(KotlinScriptParser.RelOps, i);
	}
    public get ruleIndex(): number {
    	return KotlinScriptParser.RULE_expression;
	}
	public enterRule(listener: KotlinScriptListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: KotlinScriptListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KotlinScriptVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	constructor(parser?: KotlinScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public factor_list(): FactorContext[] {
		return this.getTypedRuleContexts(FactorContext) as FactorContext[];
	}
	public factor(i: number): FactorContext {
		return this.getTypedRuleContext(FactorContext, i) as FactorContext;
	}
	public MultOps_list(): TerminalNode[] {
	    	return this.getTokens(KotlinScriptParser.MultOps);
	}
	public MultOps(i: number): TerminalNode {
		return this.getToken(KotlinScriptParser.MultOps, i);
	}
	public AssignOp_list(): TerminalNode[] {
	    	return this.getTokens(KotlinScriptParser.AssignOp);
	}
	public AssignOp(i: number): TerminalNode {
		return this.getToken(KotlinScriptParser.AssignOp, i);
	}
    public get ruleIndex(): number {
    	return KotlinScriptParser.RULE_term;
	}
	public enterRule(listener: KotlinScriptListener): void {
	    if(listener.enterTerm) {
	 		listener.enterTerm(this);
		}
	}
	public exitRule(listener: KotlinScriptListener): void {
	    if(listener.exitTerm) {
	 		listener.exitTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KotlinScriptVisitor<Result>): Result {
		if (visitor.visitTerm) {
			return visitor.visitTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FactorContext extends ParserRuleContext {
	constructor(parser?: KotlinScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(KotlinScriptParser.ID, 0);
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public LeftParen(): TerminalNode {
		return this.getToken(KotlinScriptParser.LeftParen, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RightParen(): TerminalNode {
		return this.getToken(KotlinScriptParser.RightParen, 0);
	}
    public get ruleIndex(): number {
    	return KotlinScriptParser.RULE_factor;
	}
	public enterRule(listener: KotlinScriptListener): void {
	    if(listener.enterFactor) {
	 		listener.enterFactor(this);
		}
	}
	public exitRule(listener: KotlinScriptListener): void {
	    if(listener.exitFactor) {
	 		listener.exitFactor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KotlinScriptVisitor<Result>): Result {
		if (visitor.visitFactor) {
			return visitor.visitFactor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parser?: KotlinScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IntLiteral(): TerminalNode {
		return this.getToken(KotlinScriptParser.IntLiteral, 0);
	}
	public RealLiteral(): TerminalNode {
		return this.getToken(KotlinScriptParser.RealLiteral, 0);
	}
	public BoolLiteral(): TerminalNode {
		return this.getToken(KotlinScriptParser.BoolLiteral, 0);
	}
    public get ruleIndex(): number {
    	return KotlinScriptParser.RULE_literal;
	}
	public enterRule(listener: KotlinScriptListener): void {
	    if(listener.enterLiteral) {
	 		listener.enterLiteral(this);
		}
	}
	public exitRule(listener: KotlinScriptListener): void {
	    if(listener.exitLiteral) {
	 		listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KotlinScriptVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: KotlinScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LeftBrace(): TerminalNode {
		return this.getToken(KotlinScriptParser.LeftBrace, 0);
	}
	public RightBrace(): TerminalNode {
		return this.getToken(KotlinScriptParser.RightBrace, 0);
	}
	public statementsList(): StatementsListContext {
		return this.getTypedRuleContext(StatementsListContext, 0) as StatementsListContext;
	}
    public get ruleIndex(): number {
    	return KotlinScriptParser.RULE_block;
	}
	public enterRule(listener: KotlinScriptListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: KotlinScriptListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KotlinScriptVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementsListContext extends ParserRuleContext {
	constructor(parser?: KotlinScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public closableStatement(): ClosableStatementContext {
		return this.getTypedRuleContext(ClosableStatementContext, 0) as ClosableStatementContext;
	}
	public Semicolon(): TerminalNode {
		return this.getToken(KotlinScriptParser.Semicolon, 0);
	}
	public statementsList(): StatementsListContext {
		return this.getTypedRuleContext(StatementsListContext, 0) as StatementsListContext;
	}
	public nonclosableStatement(): NonclosableStatementContext {
		return this.getTypedRuleContext(NonclosableStatementContext, 0) as NonclosableStatementContext;
	}
    public get ruleIndex(): number {
    	return KotlinScriptParser.RULE_statementsList;
	}
	public enterRule(listener: KotlinScriptListener): void {
	    if(listener.enterStatementsList) {
	 		listener.enterStatementsList(this);
		}
	}
	public exitRule(listener: KotlinScriptListener): void {
	    if(listener.exitStatementsList) {
	 		listener.exitStatementsList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KotlinScriptVisitor<Result>): Result {
		if (visitor.visitStatementsList) {
			return visitor.visitStatementsList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClosableStatementContext extends ParserRuleContext {
	constructor(parser?: KotlinScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignStatement(): AssignStatementContext {
		return this.getTypedRuleContext(AssignStatementContext, 0) as AssignStatementContext;
	}
	public declarationStatement(): DeclarationStatementContext {
		return this.getTypedRuleContext(DeclarationStatementContext, 0) as DeclarationStatementContext;
	}
	public inStatement(): InStatementContext {
		return this.getTypedRuleContext(InStatementContext, 0) as InStatementContext;
	}
	public outStatement(): OutStatementContext {
		return this.getTypedRuleContext(OutStatementContext, 0) as OutStatementContext;
	}
    public get ruleIndex(): number {
    	return KotlinScriptParser.RULE_closableStatement;
	}
	public enterRule(listener: KotlinScriptListener): void {
	    if(listener.enterClosableStatement) {
	 		listener.enterClosableStatement(this);
		}
	}
	public exitRule(listener: KotlinScriptListener): void {
	    if(listener.exitClosableStatement) {
	 		listener.exitClosableStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KotlinScriptVisitor<Result>): Result {
		if (visitor.visitClosableStatement) {
			return visitor.visitClosableStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonclosableStatementContext extends ParserRuleContext {
	constructor(parser?: KotlinScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public whileStatement(): WhileStatementContext {
		return this.getTypedRuleContext(WhileStatementContext, 0) as WhileStatementContext;
	}
	public ifStatement(): IfStatementContext {
		return this.getTypedRuleContext(IfStatementContext, 0) as IfStatementContext;
	}
    public get ruleIndex(): number {
    	return KotlinScriptParser.RULE_nonclosableStatement;
	}
	public enterRule(listener: KotlinScriptListener): void {
	    if(listener.enterNonclosableStatement) {
	 		listener.enterNonclosableStatement(this);
		}
	}
	public exitRule(listener: KotlinScriptListener): void {
	    if(listener.exitNonclosableStatement) {
	 		listener.exitNonclosableStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KotlinScriptVisitor<Result>): Result {
		if (visitor.visitNonclosableStatement) {
			return visitor.visitNonclosableStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationStatementContext extends ParserRuleContext {
	constructor(parser?: KotlinScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VAR(): TerminalNode {
		return this.getToken(KotlinScriptParser.VAR, 0);
	}
	public varDeclaration(): VarDeclarationContext {
		return this.getTypedRuleContext(VarDeclarationContext, 0) as VarDeclarationContext;
	}
    public get ruleIndex(): number {
    	return KotlinScriptParser.RULE_declarationStatement;
	}
	public enterRule(listener: KotlinScriptListener): void {
	    if(listener.enterDeclarationStatement) {
	 		listener.enterDeclarationStatement(this);
		}
	}
	public exitRule(listener: KotlinScriptListener): void {
	    if(listener.exitDeclarationStatement) {
	 		listener.exitDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KotlinScriptVisitor<Result>): Result {
		if (visitor.visitDeclarationStatement) {
			return visitor.visitDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignStatementContext extends ParserRuleContext {
	constructor(parser?: KotlinScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public varDeclaration(): VarDeclarationContext {
		return this.getTypedRuleContext(VarDeclarationContext, 0) as VarDeclarationContext;
	}
	public AssignOp(): TerminalNode {
		return this.getToken(KotlinScriptParser.AssignOp, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public VAR(): TerminalNode {
		return this.getToken(KotlinScriptParser.VAR, 0);
	}
    public get ruleIndex(): number {
    	return KotlinScriptParser.RULE_assignStatement;
	}
	public enterRule(listener: KotlinScriptListener): void {
	    if(listener.enterAssignStatement) {
	 		listener.enterAssignStatement(this);
		}
	}
	public exitRule(listener: KotlinScriptListener): void {
	    if(listener.exitAssignStatement) {
	 		listener.exitAssignStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KotlinScriptVisitor<Result>): Result {
		if (visitor.visitAssignStatement) {
			return visitor.visitAssignStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InStatementContext extends ParserRuleContext {
	constructor(parser?: KotlinScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VAR(): TerminalNode {
		return this.getToken(KotlinScriptParser.VAR, 0);
	}
	public varDeclaration(): VarDeclarationContext {
		return this.getTypedRuleContext(VarDeclarationContext, 0) as VarDeclarationContext;
	}
	public AssignOp(): TerminalNode {
		return this.getToken(KotlinScriptParser.AssignOp, 0);
	}
	public READ_LN(): TerminalNode {
		return this.getToken(KotlinScriptParser.READ_LN, 0);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(KotlinScriptParser.LeftParen, 0);
	}
	public RightParen(): TerminalNode {
		return this.getToken(KotlinScriptParser.RightParen, 0);
	}
    public get ruleIndex(): number {
    	return KotlinScriptParser.RULE_inStatement;
	}
	public enterRule(listener: KotlinScriptListener): void {
	    if(listener.enterInStatement) {
	 		listener.enterInStatement(this);
		}
	}
	public exitRule(listener: KotlinScriptListener): void {
	    if(listener.exitInStatement) {
	 		listener.exitInStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KotlinScriptVisitor<Result>): Result {
		if (visitor.visitInStatement) {
			return visitor.visitInStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutStatementContext extends ParserRuleContext {
	constructor(parser?: KotlinScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PRINT(): TerminalNode {
		return this.getToken(KotlinScriptParser.PRINT, 0);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(KotlinScriptParser.LeftParen, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RightParen(): TerminalNode {
		return this.getToken(KotlinScriptParser.RightParen, 0);
	}
    public get ruleIndex(): number {
    	return KotlinScriptParser.RULE_outStatement;
	}
	public enterRule(listener: KotlinScriptListener): void {
	    if(listener.enterOutStatement) {
	 		listener.enterOutStatement(this);
		}
	}
	public exitRule(listener: KotlinScriptListener): void {
	    if(listener.exitOutStatement) {
	 		listener.exitOutStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KotlinScriptVisitor<Result>): Result {
		if (visitor.visitOutStatement) {
			return visitor.visitOutStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	constructor(parser?: KotlinScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHILE(): TerminalNode {
		return this.getToken(KotlinScriptParser.WHILE, 0);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(KotlinScriptParser.LeftParen, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RightParen(): TerminalNode {
		return this.getToken(KotlinScriptParser.RightParen, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return KotlinScriptParser.RULE_whileStatement;
	}
	public enterRule(listener: KotlinScriptListener): void {
	    if(listener.enterWhileStatement) {
	 		listener.enterWhileStatement(this);
		}
	}
	public exitRule(listener: KotlinScriptListener): void {
	    if(listener.exitWhileStatement) {
	 		listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KotlinScriptVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	constructor(parser?: KotlinScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(KotlinScriptParser.IF, 0);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(KotlinScriptParser.LeftParen, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RightParen(): TerminalNode {
		return this.getToken(KotlinScriptParser.RightParen, 0);
	}
	public block_list(): BlockContext[] {
		return this.getTypedRuleContexts(BlockContext) as BlockContext[];
	}
	public block(i: number): BlockContext {
		return this.getTypedRuleContext(BlockContext, i) as BlockContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(KotlinScriptParser.ELSE, 0);
	}
	public ifStatement(): IfStatementContext {
		return this.getTypedRuleContext(IfStatementContext, 0) as IfStatementContext;
	}
    public get ruleIndex(): number {
    	return KotlinScriptParser.RULE_ifStatement;
	}
	public enterRule(listener: KotlinScriptListener): void {
	    if(listener.enterIfStatement) {
	 		listener.enterIfStatement(this);
		}
	}
	public exitRule(listener: KotlinScriptListener): void {
	    if(listener.exitIfStatement) {
	 		listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KotlinScriptVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageDeclarationContext extends ParserRuleContext {
	constructor(parser?: KotlinScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PACKAGE(): TerminalNode {
		return this.getToken(KotlinScriptParser.PACKAGE, 0);
	}
	public PackageId(): TerminalNode {
		return this.getToken(KotlinScriptParser.PackageId, 0);
	}
	public Semicolon(): TerminalNode {
		return this.getToken(KotlinScriptParser.Semicolon, 0);
	}
    public get ruleIndex(): number {
    	return KotlinScriptParser.RULE_packageDeclaration;
	}
	public enterRule(listener: KotlinScriptListener): void {
	    if(listener.enterPackageDeclaration) {
	 		listener.enterPackageDeclaration(this);
		}
	}
	public exitRule(listener: KotlinScriptListener): void {
	    if(listener.exitPackageDeclaration) {
	 		listener.exitPackageDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KotlinScriptVisitor<Result>): Result {
		if (visitor.visitPackageDeclaration) {
			return visitor.visitPackageDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntryPointFunNameContext extends ParserRuleContext {
	constructor(parser?: KotlinScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return KotlinScriptParser.RULE_entryPointFunName;
	}
	public enterRule(listener: KotlinScriptListener): void {
	    if(listener.enterEntryPointFunName) {
	 		listener.enterEntryPointFunName(this);
		}
	}
	public exitRule(listener: KotlinScriptListener): void {
	    if(listener.exitEntryPointFunName) {
	 		listener.exitEntryPointFunName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KotlinScriptVisitor<Result>): Result {
		if (visitor.visitEntryPointFunName) {
			return visitor.visitEntryPointFunName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntryPointContext extends ParserRuleContext {
	constructor(parser?: KotlinScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FUN(): TerminalNode {
		return this.getToken(KotlinScriptParser.FUN, 0);
	}
	public entryPointFunName(): EntryPointFunNameContext {
		return this.getTypedRuleContext(EntryPointFunNameContext, 0) as EntryPointFunNameContext;
	}
	public LeftParen(): TerminalNode {
		return this.getToken(KotlinScriptParser.LeftParen, 0);
	}
	public RightParen(): TerminalNode {
		return this.getToken(KotlinScriptParser.RightParen, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public varDeclarationsList(): VarDeclarationsListContext {
		return this.getTypedRuleContext(VarDeclarationsListContext, 0) as VarDeclarationsListContext;
	}
    public get ruleIndex(): number {
    	return KotlinScriptParser.RULE_entryPoint;
	}
	public enterRule(listener: KotlinScriptListener): void {
	    if(listener.enterEntryPoint) {
	 		listener.enterEntryPoint(this);
		}
	}
	public exitRule(listener: KotlinScriptListener): void {
	    if(listener.exitEntryPoint) {
	 		listener.exitEntryPoint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KotlinScriptVisitor<Result>): Result {
		if (visitor.visitEntryPoint) {
			return visitor.visitEntryPoint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
