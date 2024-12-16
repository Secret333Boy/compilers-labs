// Generated from E:/Магістр/semestr1/compilers-labs/lab6/src/main/antlr4/KotlinScript.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class KotlinScriptLexer extends Lexer {
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
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "LowerLetter", "UpperLetter", "Letter", "Digit", "NonZeroDigit", 
		"WS", "Dot", "Comma", "Colon", "Semicolon", "LeftParen", "RightParen", 
		"LeftBrace", "RightBrace", "AddOps", "MultOps", "RelOps", "AssignOp", 
		"InlineCommentOp", "PACKAGE", "FUN", "VAR", "WHILE", "IF", "ELSE", "TYPE", 
		"READ_LN", "PRINT", "ID", "BoolLiteral", "IntLiteral", "RealLiteral", 
		"Sign", "UnsignedInt", "PackageId",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, KotlinScriptLexer._ATN, KotlinScriptLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "KotlinScript.g4"; }

	public get literalNames(): (string | null)[] { return KotlinScriptLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return KotlinScriptLexer.symbolicNames; }
	public get ruleNames(): string[] { return KotlinScriptLexer.ruleNames; }

	public get serializedATN(): number[] { return KotlinScriptLexer._serializedATN; }

	public get channelNames(): string[] { return KotlinScriptLexer.channelNames; }

	public get modeNames(): string[] { return KotlinScriptLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,29,256,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,
	31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,1,0,1,0,1,0,1,0,1,0,1,1,
	1,1,1,2,1,2,1,3,1,3,3,3,85,8,3,1,4,1,4,1,5,1,5,1,6,4,6,92,8,6,11,6,12,6,
	93,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,
	13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
	1,17,1,17,1,17,1,17,3,17,130,8,17,1,18,1,18,1,19,1,19,1,19,1,19,5,19,138,
	8,19,10,19,12,19,141,9,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,
	1,20,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,
	23,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,
	1,26,1,26,1,26,1,26,1,26,1,26,3,26,187,8,26,1,27,1,27,1,27,1,27,1,27,1,
	27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,5,29,205,8,29,10,29,
	12,29,208,9,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,219,8,
	30,1,31,3,31,222,8,31,1,31,1,31,1,32,3,32,227,8,32,1,32,1,32,1,32,1,32,
	1,32,1,32,1,32,1,32,1,32,1,32,3,32,239,8,32,1,33,1,33,1,34,4,34,244,8,34,
	11,34,12,34,245,1,35,1,35,1,35,1,35,5,35,252,8,35,10,35,12,35,255,9,35,
	0,0,36,1,1,3,0,5,0,7,0,9,0,11,0,13,2,15,3,17,4,19,5,21,6,23,7,25,8,27,9,
	29,10,31,11,33,12,35,13,37,14,39,15,41,16,43,17,45,18,47,19,49,20,51,21,
	53,22,55,23,57,24,59,25,61,26,63,27,65,28,67,0,69,0,71,29,1,0,9,1,0,97,
	122,1,0,65,90,1,0,48,57,1,0,49,57,3,0,9,10,13,13,32,32,2,0,43,43,45,45,
	3,0,42,42,47,47,94,94,2,0,60,60,62,62,2,0,10,10,13,13,267,0,1,1,0,0,0,0,
	13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,
	0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,
	35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,
	0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,
	57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,71,1,0,
	0,0,1,73,1,0,0,0,3,78,1,0,0,0,5,80,1,0,0,0,7,84,1,0,0,0,9,86,1,0,0,0,11,
	88,1,0,0,0,13,91,1,0,0,0,15,97,1,0,0,0,17,99,1,0,0,0,19,101,1,0,0,0,21,
	103,1,0,0,0,23,105,1,0,0,0,25,107,1,0,0,0,27,109,1,0,0,0,29,111,1,0,0,0,
	31,113,1,0,0,0,33,115,1,0,0,0,35,129,1,0,0,0,37,131,1,0,0,0,39,133,1,0,
	0,0,41,144,1,0,0,0,43,152,1,0,0,0,45,156,1,0,0,0,47,160,1,0,0,0,49,166,
	1,0,0,0,51,169,1,0,0,0,53,186,1,0,0,0,55,188,1,0,0,0,57,195,1,0,0,0,59,
	201,1,0,0,0,61,218,1,0,0,0,63,221,1,0,0,0,65,226,1,0,0,0,67,240,1,0,0,0,
	69,243,1,0,0,0,71,247,1,0,0,0,73,74,5,109,0,0,74,75,5,97,0,0,75,76,5,105,
	0,0,76,77,5,110,0,0,77,2,1,0,0,0,78,79,7,0,0,0,79,4,1,0,0,0,80,81,7,1,0,
	0,81,6,1,0,0,0,82,85,3,3,1,0,83,85,3,5,2,0,84,82,1,0,0,0,84,83,1,0,0,0,
	85,8,1,0,0,0,86,87,7,2,0,0,87,10,1,0,0,0,88,89,7,3,0,0,89,12,1,0,0,0,90,
	92,7,4,0,0,91,90,1,0,0,0,92,93,1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,0,94,95,
	1,0,0,0,95,96,6,6,0,0,96,14,1,0,0,0,97,98,5,46,0,0,98,16,1,0,0,0,99,100,
	5,44,0,0,100,18,1,0,0,0,101,102,5,58,0,0,102,20,1,0,0,0,103,104,5,59,0,
	0,104,22,1,0,0,0,105,106,5,40,0,0,106,24,1,0,0,0,107,108,5,41,0,0,108,26,
	1,0,0,0,109,110,5,123,0,0,110,28,1,0,0,0,111,112,5,125,0,0,112,30,1,0,0,
	0,113,114,7,5,0,0,114,32,1,0,0,0,115,116,7,6,0,0,116,34,1,0,0,0,117,118,
	5,61,0,0,118,119,5,61,0,0,119,130,5,61,0,0,120,121,5,61,0,0,121,130,5,61,
	0,0,122,123,5,60,0,0,123,130,5,61,0,0,124,130,7,7,0,0,125,126,5,62,0,0,
	126,130,5,61,0,0,127,128,5,33,0,0,128,130,5,61,0,0,129,117,1,0,0,0,129,
	120,1,0,0,0,129,122,1,0,0,0,129,124,1,0,0,0,129,125,1,0,0,0,129,127,1,0,
	0,0,130,36,1,0,0,0,131,132,5,61,0,0,132,38,1,0,0,0,133,134,5,47,0,0,134,
	135,5,47,0,0,135,139,1,0,0,0,136,138,8,8,0,0,137,136,1,0,0,0,138,141,1,
	0,0,0,139,137,1,0,0,0,139,140,1,0,0,0,140,142,1,0,0,0,141,139,1,0,0,0,142,
	143,6,19,0,0,143,40,1,0,0,0,144,145,5,112,0,0,145,146,5,97,0,0,146,147,
	5,99,0,0,147,148,5,107,0,0,148,149,5,97,0,0,149,150,5,103,0,0,150,151,5,
	101,0,0,151,42,1,0,0,0,152,153,5,102,0,0,153,154,5,117,0,0,154,155,5,110,
	0,0,155,44,1,0,0,0,156,157,5,118,0,0,157,158,5,97,0,0,158,159,5,114,0,0,
	159,46,1,0,0,0,160,161,5,119,0,0,161,162,5,104,0,0,162,163,5,105,0,0,163,
	164,5,108,0,0,164,165,5,101,0,0,165,48,1,0,0,0,166,167,5,105,0,0,167,168,
	5,102,0,0,168,50,1,0,0,0,169,170,5,101,0,0,170,171,5,108,0,0,171,172,5,
	115,0,0,172,173,5,101,0,0,173,52,1,0,0,0,174,175,5,73,0,0,175,176,5,110,
	0,0,176,187,5,116,0,0,177,178,5,70,0,0,178,179,5,108,0,0,179,180,5,111,
	0,0,180,181,5,97,0,0,181,187,5,116,0,0,182,183,5,66,0,0,183,184,5,111,0,
	0,184,185,5,111,0,0,185,187,5,108,0,0,186,174,1,0,0,0,186,177,1,0,0,0,186,
	182,1,0,0,0,187,54,1,0,0,0,188,189,5,114,0,0,189,190,5,101,0,0,190,191,
	5,97,0,0,191,192,5,100,0,0,192,193,5,108,0,0,193,194,5,110,0,0,194,56,1,
	0,0,0,195,196,5,112,0,0,196,197,5,114,0,0,197,198,5,105,0,0,198,199,5,110,
	0,0,199,200,5,116,0,0,200,58,1,0,0,0,201,206,3,7,3,0,202,205,3,7,3,0,203,
	205,3,9,4,0,204,202,1,0,0,0,204,203,1,0,0,0,205,208,1,0,0,0,206,204,1,0,
	0,0,206,207,1,0,0,0,207,60,1,0,0,0,208,206,1,0,0,0,209,210,5,116,0,0,210,
	211,5,114,0,0,211,212,5,117,0,0,212,219,5,101,0,0,213,214,5,102,0,0,214,
	215,5,97,0,0,215,216,5,108,0,0,216,217,5,115,0,0,217,219,5,101,0,0,218,
	209,1,0,0,0,218,213,1,0,0,0,219,62,1,0,0,0,220,222,3,67,33,0,221,220,1,
	0,0,0,221,222,1,0,0,0,222,223,1,0,0,0,223,224,3,69,34,0,224,64,1,0,0,0,
	225,227,3,67,33,0,226,225,1,0,0,0,226,227,1,0,0,0,227,238,1,0,0,0,228,229,
	3,15,7,0,229,230,3,69,34,0,230,239,1,0,0,0,231,232,3,69,34,0,232,233,3,
	15,7,0,233,239,1,0,0,0,234,235,3,69,34,0,235,236,3,15,7,0,236,237,3,69,
	34,0,237,239,1,0,0,0,238,228,1,0,0,0,238,231,1,0,0,0,238,234,1,0,0,0,239,
	66,1,0,0,0,240,241,7,5,0,0,241,68,1,0,0,0,242,244,3,9,4,0,243,242,1,0,0,
	0,244,245,1,0,0,0,245,243,1,0,0,0,245,246,1,0,0,0,246,70,1,0,0,0,247,253,
	3,59,29,0,248,249,3,15,7,0,249,250,3,59,29,0,250,252,1,0,0,0,251,248,1,
	0,0,0,252,255,1,0,0,0,253,251,1,0,0,0,253,254,1,0,0,0,254,72,1,0,0,0,255,
	253,1,0,0,0,14,0,84,93,129,139,186,204,206,218,221,226,238,245,253,1,6,
	0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!KotlinScriptLexer.__ATN) {
			KotlinScriptLexer.__ATN = new ATNDeserializer().deserialize(KotlinScriptLexer._serializedATN);
		}

		return KotlinScriptLexer.__ATN;
	}


	static DecisionsToDFA = KotlinScriptLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}