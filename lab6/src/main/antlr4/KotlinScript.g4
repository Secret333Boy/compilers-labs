grammar KotlinScript;



// Лексичні правила (lexer rules)
fragment LowerLetter: [a-z];
fragment UpperLetter: [A-Z];
fragment Letter: LowerLetter | UpperLetter;
fragment Digit: [0-9];
fragment NonZeroDigit: [1-9];

WS: [ \t\r\n]+ -> skip;

// Окремі символи замість SpecSign
Dot: '.';
Comma: ',';
Colon: ':';
Semicolon: ';';
LeftParen: '(';
RightParen: ')';
LeftBrace: '{';
RightBrace: '}';

// Операції
AddOps: '+' | '-';
MultOps: '*' | '/' | '^';
RelOps: '===' | '==' | '<=' | '<' | '>' | '>=' | '!=' ;
AssignOp: '=';
InlineCommentOp: '//' ~[\r\n]* -> skip;

// Ключові слова
PACKAGE: 'package';
FUN: 'fun';
VAR: 'var';
WHILE: 'while';
IF: 'if';
ELSE: 'else';
TYPE: 'Int' | 'Float' | 'Bool';
READ_LN: 'readln';
PRINT: 'print';

// Головне правило
program: packageDeclaration entryPoint;

// Ідентифікатори
ID: Letter (Letter | Digit)*;
varTypeSpecifier: Colon TYPE;
varDeclaration: ID varTypeSpecifier?;
varDeclarationsList: varDeclaration (Comma varDeclaration)*;

// Літерали
BoolLiteral: 'true' | 'false';
IntLiteral: Sign? UnsignedInt;
RealLiteral: Sign? ((Dot UnsignedInt) | (UnsignedInt Dot) | (UnsignedInt Dot UnsignedInt));
fragment Sign: '+' | '-';
fragment UnsignedInt: Digit+;

// Вирази
expression: term ((AddOps | RelOps) term)*;
term: factor ((MultOps | AssignOp) factor)*;
factor: ID | literal | LeftParen expression RightParen;
literal: IntLiteral | RealLiteral | BoolLiteral;

// Блоки
block: LeftBrace statementsList? RightBrace;
//statementsList: statement (Semicolon? | (Semicolon statement Semicolon?)*);
statementsList: (closableStatement (Semicolon? | (Semicolon statementsList))) | (nonclosableStatement statementsList?);
closableStatement: assignStatement | declarationStatement | inStatement | outStatement;
nonclosableStatement: whileStatement | ifStatement;
declarationStatement: VAR varDeclaration;
assignStatement: VAR? varDeclaration AssignOp expression;
inStatement: VAR varDeclaration AssignOp READ_LN LeftParen RightParen;
outStatement: PRINT LeftParen expression RightParen;
whileStatement: WHILE LeftParen expression RightParen block;
ifStatement: IF LeftParen expression RightParen block (ELSE (ifStatement | block))?;

// Пакети та функції
PackageId: ID (Dot ID)*;
packageDeclaration: PACKAGE PackageId Semicolon;
entryPointFunName: 'main';
entryPoint: FUN entryPointFunName LeftParen varDeclarationsList? RightParen block;


