"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printSymbolTables = exports.printTokens = exports.Lexer = exports.State = exports.CharClass = void 0;
const keywords = [
    "fun",
    "var",
    "if",
    "else",
    "while",
    "Int",
    "Float",
    "true",
    "false",
    "package",
];
const operators = [
    "+",
    "-",
    "*",
    "/",
    "=",
    "==",
    "!=",
    "^",
    "<",
    "<=",
    ">",
    ">=",
    "===",
];
const punctuation = [";", ":", ",", "(", ")", "{", "}"];
var CharClass;
(function (CharClass) {
    CharClass["LETTER"] = "Letter";
    CharClass["DIGIT"] = "Digit";
    CharClass["DOT"] = "Dot";
    CharClass["WHITESPACE"] = "Whitespace";
    CharClass["EOL"] = "EOL";
    CharClass["OPERATOR"] = "Operator";
    CharClass["PUNCTUATION"] = "Punctuation";
    CharClass["SLASH"] = "Slash";
    CharClass["OTHER"] = "Other";
})(CharClass || (exports.CharClass = CharClass = {}));
var State;
(function (State) {
    State["START"] = "S0";
    State["IDENTIFIER"] = "S1";
    State["INTEGER"] = "S2";
    State["FLOAT"] = "S3";
    State["OPERATOR"] = "S4";
    State["DIVIDE_OP"] = "S5";
    State["COMMENT"] = "S6";
    State["ERROR"] = "S_Err";
})(State || (exports.State = State = {}));
const transitionTable = {
    [State.START]: {
        [CharClass.LETTER]: State.IDENTIFIER,
        [CharClass.DIGIT]: State.INTEGER,
        [CharClass.DOT]: State.FLOAT,
        [CharClass.WHITESPACE]: State.START,
        [CharClass.EOL]: State.START,
        [CharClass.OPERATOR]: State.OPERATOR,
        [CharClass.PUNCTUATION]: State.OPERATOR,
        [CharClass.SLASH]: State.DIVIDE_OP,
    },
    [State.IDENTIFIER]: {
        [CharClass.LETTER]: State.IDENTIFIER,
        [CharClass.DIGIT]: State.IDENTIFIER,
        default: State.START,
    },
    [State.INTEGER]: {
        [CharClass.DIGIT]: State.INTEGER,
        [CharClass.DOT]: State.FLOAT,
        default: State.START,
    },
    [State.FLOAT]: {
        [CharClass.DIGIT]: State.FLOAT,
        default: State.START,
    },
    [State.OPERATOR]: {
        [CharClass.OPERATOR]: State.OPERATOR,
        default: State.START,
    },
    [State.DIVIDE_OP]: {
        [CharClass.SLASH]: State.COMMENT,
        default: State.START,
    },
    [State.COMMENT]: {
        default: State.COMMENT,
        [CharClass.EOL]: State.START,
    },
    [State.ERROR]: {},
};
const getCharClass = (char) => {
    if (/[a-zA-Z]/.test(char))
        return CharClass.LETTER;
    if (/\d/.test(char))
        return CharClass.DIGIT;
    if (char === ".")
        return CharClass.DOT;
    if (char === "/")
        return CharClass.SLASH;
    if (/\s/.test(char)) {
        if (char === "\n")
            return CharClass.EOL;
        return CharClass.WHITESPACE;
    }
    if (operators.some((op) => op.startsWith(char)))
        return CharClass.OPERATOR;
    if (punctuation.includes(char))
        return CharClass.PUNCTUATION;
    return CharClass.OTHER;
};
const getNextState = (currentState, charClass) => {
    const stateTransitions = transitionTable[currentState];
    if (stateTransitions[charClass]) {
        return stateTransitions[charClass];
    }
    else if (stateTransitions["default"]) {
        return stateTransitions["default"];
    }
    else {
        return State.ERROR;
    }
};
const isFinalState = (state) => {
    return (state === State.IDENTIFIER ||
        state === State.INTEGER ||
        state === State.FLOAT ||
        state === State.OPERATOR ||
        state === State.DIVIDE_OP);
};
const processLexeme = (state, lexeme, lineNumber, tokenTable, idConstTable) => {
    if (state === State.IDENTIFIER) {
        if (keywords.includes(lexeme)) {
            tokenTable.push({
                line: lineNumber,
                lexeme,
                type: "keyword",
                index: null,
            });
        }
        else {
            let index = idConstTable.identifiers.hasOwnProperty(lexeme)
                ? idConstTable.identifiers[lexeme]
                : Object.keys(idConstTable.identifiers).length + 1;
            if (!idConstTable.identifiers.hasOwnProperty(lexeme)) {
                idConstTable.identifiers[lexeme] = index;
            }
            tokenTable.push({ line: lineNumber, lexeme, type: "identifier", index });
        }
    }
    else if (state === State.INTEGER) {
        let index = idConstTable.constants.hasOwnProperty(lexeme)
            ? idConstTable.constants[lexeme]
            : Object.keys(idConstTable.constants).length + 1;
        if (!idConstTable.constants.hasOwnProperty(lexeme)) {
            idConstTable.constants[lexeme] = index;
        }
        tokenTable.push({ line: lineNumber, lexeme, type: "int_literal", index });
    }
    else if (state === State.FLOAT) {
        let index = idConstTable.constants.hasOwnProperty(lexeme)
            ? idConstTable.constants[lexeme]
            : Object.keys(idConstTable.constants).length + 1;
        if (!idConstTable.constants.hasOwnProperty(lexeme)) {
            idConstTable.constants[lexeme] = index;
        }
        tokenTable.push({
            line: lineNumber,
            lexeme,
            type: "float_literal",
            index,
        });
    }
    else if (state === State.OPERATOR) {
        let tokenType = operators.includes(lexeme) ? "operator" : "punctuation";
        if (tokenType === "punctuation") {
            if (lexeme === "(") {
                tokenType = "bracket_open";
            }
            if (lexeme === ")") {
                tokenType = "bracket_close";
            }
        }
        tokenTable.push({
            line: lineNumber,
            lexeme,
            type: tokenType,
            index: null,
        });
    }
    else if (state === State.DIVIDE_OP) {
        tokenTable.push({
            line: lineNumber,
            lexeme,
            type: "divideOp",
            index: null,
        });
    }
};
class Lexer {
    tokenize(code) {
        let state = State.START;
        let lexeme = "";
        let tokens = [];
        let idConstTable = { identifiers: {}, constants: {} };
        let lines = code.split("\n");
        lines.forEach((line, lineNumber) => {
            let i = 0;
            while (i < line.length) {
                let char = line[i];
                let charClass = getCharClass(char);
                let nextStateVal = getNextState(state, charClass);
                if (charClass === CharClass.SLASH &&
                    getCharClass(line[i + 1]) === CharClass.SLASH) {
                    break;
                }
                if (nextStateVal === State.ERROR) {
                    throw new Error(`Помилка: невідомий символ '${char}' у рядку ${lineNumber + 1}`);
                }
                if (nextStateVal !== state) {
                    if (isFinalState(state) &&
                        !(state === State.INTEGER && nextStateVal === State.FLOAT)) {
                        processLexeme(state, lexeme, lineNumber + 1, tokens, idConstTable);
                        lexeme = "";
                    }
                    state = nextStateVal;
                }
                if (charClass === CharClass.PUNCTUATION) {
                    if (lexeme.length > 0) {
                        processLexeme(state, lexeme, lineNumber + 1, tokens, idConstTable);
                        lexeme = "";
                    }
                    processLexeme(State.OPERATOR, char, lineNumber + 1, tokens, idConstTable);
                    state = State.START;
                    i++;
                    continue;
                }
                if (state !== State.START) {
                    lexeme += char;
                }
                i++;
            }
            if (isFinalState(state)) {
                processLexeme(state, lexeme, lineNumber + 1, tokens, idConstTable);
                lexeme = "";
                state = State.START;
            }
            else {
                state = State.START;
                lexeme = "";
            }
        });
        return { tokens, idConstTable };
    }
}
exports.Lexer = Lexer;
const printTokens = (tokens) => {
    console.log("№\tРядок\tЛексема\t\tТокен\t\t Індекс");
    tokens.forEach((token, index) => {
        console.log(`${index + 1}\t${token.line}\t${token.lexeme}\t\t${token.type}\t\t${token.index !== null ? token.index : "-"}`);
    });
};
exports.printTokens = printTokens;
const printSymbolTables = (idConstTable) => {
    console.log("\nТаблиця ідентифікаторів:");
    console.log("Індекс\t Ідентифікатор");
    for (const [id, idx] of Object.entries(idConstTable.identifiers)) {
        console.log(`${idx}\t${id}`);
    }
    console.log("\nТаблиця констант:");
    console.log("Індекс\tКонстанта");
    for (const [constVal, idx] of Object.entries(idConstTable.constants)) {
        console.log(`${idx}\t${constVal}`);
    }
};
exports.printSymbolTables = printSymbolTables;
