import fs from "node:fs";
import { Lexer, printSymbolTables, printTokens } from "../../lab2/src/lexer";
import { Parser } from "./parser";

const main = () => {
  const lexer = new Lexer();

  const code = fs.readFileSync(process.argv[2], "utf-8");
  const { tokens, idConstTable } = lexer.tokenize(code);
  printTokens(tokens);
  printSymbolTables(idConstTable);
  console.log("\nLexer: Лексичний аналіз завершено успішно");

  const ast = new Parser(tokens).parse();

  fs.writeFileSync("./ast.json", JSON.stringify(ast, null, 2));
  console.log("\Parser: Синтаксичний аналіз завершено успішно");
};

main();
