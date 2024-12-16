import fs from "node:fs";
import KotlinScriptLexer from "../altlrv4-output/main/antlr4/KotlinScriptLexer";
import { CharStream, CommonTokenStream } from "antlr4";
import KotlinScriptParser from "../altlrv4-output/main/antlr4/KotlinScriptParser";

const main = async () => {
  const code = fs.readFileSync(process.argv[2], "utf-8");

  const lexer = new KotlinScriptLexer(new CharStream(code));

  const tokenStream = new CommonTokenStream(lexer);

  const parser = new KotlinScriptParser(tokenStream);

  const tree = parser.program();
};

main();
