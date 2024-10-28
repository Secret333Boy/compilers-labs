"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
const lexer_1 = require("../../lab2/src/lexer");
const parser_1 = require("./parser");
const main = () => {
    const lexer = new lexer_1.Lexer();
    const code = node_fs_1.default.readFileSync(process.argv[2], "utf-8");
    const { tokens, idConstTable } = lexer.tokenize(code);
    (0, lexer_1.printTokens)(tokens);
    (0, lexer_1.printSymbolTables)(idConstTable);
    console.log("\nLexer: Лексичний аналіз завершено успішно");
    const parser = new parser_1.Parser(tokens);
    const ast = parser.parse();
    console.dir(ast, { depth: null });
};
main();
