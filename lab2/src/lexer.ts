import fs from "node:fs";

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

export enum CharClass {
  LETTER = "Letter",
  DIGIT = "Digit",
  DOT = "Dot",
  WHITESPACE = "Whitespace",
  EOL = "EOL",
  OPERATOR = "Operator",
  PUNCTUATION = "Punctuation",
  SLASH = "Slash",
  OTHER = "Other",
}

export enum State {
  START = "S0",
  IDENTIFIER = "S1",
  INTEGER = "S2",
  FLOAT = "S3",
  OPERATOR = "S4",
  DIVIDE_OP = "S5",
  COMMENT = "S6",
  ERROR = "S_Err",
}

const transitionTable: Record<State, Record<string, State | undefined>> = {
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

export interface Token {
  line: number;
  indexInLine: number;
  lexeme: string;
  type: string;
  index: number | null | undefined;
}

interface IdConstTable {
  identifiers: Record<string, number | undefined>;
  constants: Record<string, number | undefined>;
}

const getCharClass = (char: string) => {
  if (/[a-zA-Z]/.test(char)) return CharClass.LETTER;
  if (/\d/.test(char)) return CharClass.DIGIT;
  if (char === ".") return CharClass.DOT;
  if (char === "/") return CharClass.SLASH;
  if (/\s/.test(char)) {
    if (char === "\n") return CharClass.EOL;
    return CharClass.WHITESPACE;
  }
  if (operators.some((op) => op.startsWith(char))) return CharClass.OPERATOR;
  if (punctuation.includes(char)) return CharClass.PUNCTUATION;
  return CharClass.OTHER;
};

const getNextState = (currentState: State, charClass: CharClass): State => {
  const stateTransitions = transitionTable[currentState];
  if (stateTransitions[charClass]) {
    return stateTransitions[charClass];
  } else if (stateTransitions["default"]) {
    return stateTransitions["default"];
  } else {
    return State.ERROR;
  }
};

const isFinalState = (state: State) => {
  return (
    state === State.IDENTIFIER ||
    state === State.INTEGER ||
    state === State.FLOAT ||
    state === State.OPERATOR ||
    state === State.DIVIDE_OP
  );
};

const processLexeme = (
  state: State,
  lexeme: string,
  lineNumber: number,
  indexInLine: number,
  tokenTable: Token[],
  idConstTable: IdConstTable
) => {
  if (state === State.IDENTIFIER) {
    if (keywords.includes(lexeme)) {
      tokenTable.push({
        line: lineNumber,
        indexInLine,
        lexeme,
        type: "keyword",
        index: null,
      });
    } else {
      let index = idConstTable.identifiers.hasOwnProperty(lexeme)
        ? idConstTable.identifiers[lexeme]
        : Object.keys(idConstTable.identifiers).length + 1;
      if (!idConstTable.identifiers.hasOwnProperty(lexeme)) {
        idConstTable.identifiers[lexeme] = index;
      }
      tokenTable.push({ line: lineNumber,indexInLine, lexeme, type: "identifier", index });
    }
  } else if (state === State.INTEGER) {
    let index = idConstTable.constants.hasOwnProperty(lexeme)
      ? idConstTable.constants[lexeme]
      : Object.keys(idConstTable.constants).length + 1;
    if (!idConstTable.constants.hasOwnProperty(lexeme)) {
      idConstTable.constants[lexeme] = index;
    }
    tokenTable.push({ line: lineNumber,indexInLine, lexeme, type: "int_literal", index });
  } else if (state === State.FLOAT) {
    let index = idConstTable.constants.hasOwnProperty(lexeme)
      ? idConstTable.constants[lexeme]
      : Object.keys(idConstTable.constants).length + 1;
    if (!idConstTable.constants.hasOwnProperty(lexeme)) {
      idConstTable.constants[lexeme] = index;
    }
    tokenTable.push({
      line: lineNumber,
      indexInLine,
      lexeme,
      type: "float_literal",
      index,
    });
  } else if (state === State.OPERATOR) {
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
      indexInLine,
      lexeme,
      type: tokenType,
      index: null,
    });
  } else if (state === State.DIVIDE_OP) {
    tokenTable.push({
      line: lineNumber,
      indexInLine,
      lexeme,
      type: "divideOp",
      index: null,
    });
  }
};

export class Lexer {
  public tokenize(code: string) {
    let state = State.START;
    let lexeme = "";
    let tokens: Token[] = [];
    let idConstTable = { identifiers: {}, constants: {} };
    let lines = code.split("\n");

    lines.forEach((line, lineNumber) => {
      let i = 0;
      while (i < line.length) {
        let char = line[i];
        let charClass = getCharClass(char);

        let nextStateVal = getNextState(state, charClass);

        if (
          charClass === CharClass.SLASH &&
          getCharClass(line[i + 1]) === CharClass.SLASH
        ) {
          break;
        }

        if (nextStateVal === State.ERROR) {
          throw new Error(
            `Помилка: невідомий символ '${char}' у рядку ${lineNumber + 1}`
          );
        }

        if (
          (lexeme === "-" || lexeme === "+") &&
          charClass === CharClass.DIGIT
        ) {
          lexeme += char;
          i++;
          state = State.INTEGER;
          continue;
        }

        if (nextStateVal !== state) {
          if (
            isFinalState(state) &&
            !(state === State.INTEGER && nextStateVal === State.FLOAT)
          ) {
            processLexeme(state, lexeme, lineNumber + 1, i - lexeme.length, tokens, idConstTable);
            lexeme = "";
          }
          state = nextStateVal;
        }

        if (
          charClass === CharClass.PUNCTUATION ||
          (charClass === CharClass.DOT &&
            getCharClass(line[i + 1]) !== CharClass.DIGIT)
        ) {
          if (lexeme.length > 0) {
            processLexeme(
              state,
              lexeme,
              lineNumber + 1,
              i - lexeme.length,
              tokens,
              idConstTable
            );
            lexeme = "";
          }
          processLexeme(
            State.OPERATOR,
            char,
            lineNumber + 1,
            i - lexeme.length,
            tokens,
            idConstTable
          );
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
        processLexeme(state, lexeme, lineNumber + 1, i - lexeme.length, tokens, idConstTable);
        lexeme = "";
        state = State.START;
      } else {
        state = State.START;
        lexeme = "";
      }
    });

    return { tokens, idConstTable };
  }
}

export const printTokens = (tokens: Token[]) => {
  console.log("№\tРядок\tЛексема\t\tТокен\t\t Індекс");
  tokens.forEach((token, index) => {
    console.log(
      `${index + 1}\t${token.line}\t${token.lexeme}\t\t${token.type}\t\t${
        token.index !== null ? token.index : "-"
      }`
    );
  });
};

export const printSymbolTables = (idConstTable: IdConstTable) => {
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
