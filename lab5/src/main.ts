import fs from "node:fs";
import { Lexer, printSymbolTables, printTokens } from "../../lab2/src/lexer";
import { Parser } from "../../lab3/src/parser";
import { SemanticAnalyzer } from "../../lab3/src/analyzer";
import { CILTranslator } from "./cil.translator";

const main = async () => {
  const lexer = new Lexer();

  const code = fs.readFileSync(process.argv[2], "utf-8");
  const { tokens, idConstTable } = lexer.tokenize(code);
  printTokens(tokens);
  printSymbolTables(idConstTable);
  console.log("\nLexer: Лексичний аналіз завершено успішно");

  const ast = new Parser(tokens).parse();

  fs.writeFileSync("./ast.json", JSON.stringify(ast, null, 2));
  console.log("Parser: Синтаксичний аналіз завершено успішно");

  const analyzer = new SemanticAnalyzer();
  analyzer.analyze(ast);
  console.log("Analyzer: Семантичний аналіз завершено успішно");

  const translator = new CILTranslator();

  const cil = translator.translate(ast);
  console.log("Translator: Трансляцію у CIL завершено успішно");

  fs.writeFileSync("./out.il", cil);
};

main();