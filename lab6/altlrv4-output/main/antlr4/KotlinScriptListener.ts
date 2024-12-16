// Generated from E:/Магістр/semestr1/compilers-labs/lab6/src/main/antlr4/KotlinScript.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ProgramContext } from "./KotlinScriptParser.js";
import { VarTypeSpecifierContext } from "./KotlinScriptParser.js";
import { VarDeclarationContext } from "./KotlinScriptParser.js";
import { VarDeclarationsListContext } from "./KotlinScriptParser.js";
import { ExpressionContext } from "./KotlinScriptParser.js";
import { TermContext } from "./KotlinScriptParser.js";
import { FactorContext } from "./KotlinScriptParser.js";
import { LiteralContext } from "./KotlinScriptParser.js";
import { BlockContext } from "./KotlinScriptParser.js";
import { StatementsListContext } from "./KotlinScriptParser.js";
import { ClosableStatementContext } from "./KotlinScriptParser.js";
import { NonclosableStatementContext } from "./KotlinScriptParser.js";
import { DeclarationStatementContext } from "./KotlinScriptParser.js";
import { AssignStatementContext } from "./KotlinScriptParser.js";
import { InStatementContext } from "./KotlinScriptParser.js";
import { OutStatementContext } from "./KotlinScriptParser.js";
import { WhileStatementContext } from "./KotlinScriptParser.js";
import { IfStatementContext } from "./KotlinScriptParser.js";
import { PackageDeclarationContext } from "./KotlinScriptParser.js";
import { EntryPointFunNameContext } from "./KotlinScriptParser.js";
import { EntryPointContext } from "./KotlinScriptParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `KotlinScriptParser`.
 */
export default class KotlinScriptListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `KotlinScriptParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinScriptParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
	/**
	 * Enter a parse tree produced by `KotlinScriptParser.varTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterVarTypeSpecifier?: (ctx: VarTypeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinScriptParser.varTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitVarTypeSpecifier?: (ctx: VarTypeSpecifierContext) => void;
	/**
	 * Enter a parse tree produced by `KotlinScriptParser.varDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVarDeclaration?: (ctx: VarDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinScriptParser.varDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVarDeclaration?: (ctx: VarDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `KotlinScriptParser.varDeclarationsList`.
	 * @param ctx the parse tree
	 */
	enterVarDeclarationsList?: (ctx: VarDeclarationsListContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinScriptParser.varDeclarationsList`.
	 * @param ctx the parse tree
	 */
	exitVarDeclarationsList?: (ctx: VarDeclarationsListContext) => void;
	/**
	 * Enter a parse tree produced by `KotlinScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `KotlinScriptParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinScriptParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;
	/**
	 * Enter a parse tree produced by `KotlinScriptParser.factor`.
	 * @param ctx the parse tree
	 */
	enterFactor?: (ctx: FactorContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinScriptParser.factor`.
	 * @param ctx the parse tree
	 */
	exitFactor?: (ctx: FactorContext) => void;
	/**
	 * Enter a parse tree produced by `KotlinScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Enter a parse tree produced by `KotlinScriptParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinScriptParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by `KotlinScriptParser.statementsList`.
	 * @param ctx the parse tree
	 */
	enterStatementsList?: (ctx: StatementsListContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinScriptParser.statementsList`.
	 * @param ctx the parse tree
	 */
	exitStatementsList?: (ctx: StatementsListContext) => void;
	/**
	 * Enter a parse tree produced by `KotlinScriptParser.closableStatement`.
	 * @param ctx the parse tree
	 */
	enterClosableStatement?: (ctx: ClosableStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinScriptParser.closableStatement`.
	 * @param ctx the parse tree
	 */
	exitClosableStatement?: (ctx: ClosableStatementContext) => void;
	/**
	 * Enter a parse tree produced by `KotlinScriptParser.nonclosableStatement`.
	 * @param ctx the parse tree
	 */
	enterNonclosableStatement?: (ctx: NonclosableStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinScriptParser.nonclosableStatement`.
	 * @param ctx the parse tree
	 */
	exitNonclosableStatement?: (ctx: NonclosableStatementContext) => void;
	/**
	 * Enter a parse tree produced by `KotlinScriptParser.declarationStatement`.
	 * @param ctx the parse tree
	 */
	enterDeclarationStatement?: (ctx: DeclarationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinScriptParser.declarationStatement`.
	 * @param ctx the parse tree
	 */
	exitDeclarationStatement?: (ctx: DeclarationStatementContext) => void;
	/**
	 * Enter a parse tree produced by `KotlinScriptParser.assignStatement`.
	 * @param ctx the parse tree
	 */
	enterAssignStatement?: (ctx: AssignStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinScriptParser.assignStatement`.
	 * @param ctx the parse tree
	 */
	exitAssignStatement?: (ctx: AssignStatementContext) => void;
	/**
	 * Enter a parse tree produced by `KotlinScriptParser.inStatement`.
	 * @param ctx the parse tree
	 */
	enterInStatement?: (ctx: InStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinScriptParser.inStatement`.
	 * @param ctx the parse tree
	 */
	exitInStatement?: (ctx: InStatementContext) => void;
	/**
	 * Enter a parse tree produced by `KotlinScriptParser.outStatement`.
	 * @param ctx the parse tree
	 */
	enterOutStatement?: (ctx: OutStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinScriptParser.outStatement`.
	 * @param ctx the parse tree
	 */
	exitOutStatement?: (ctx: OutStatementContext) => void;
	/**
	 * Enter a parse tree produced by `KotlinScriptParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinScriptParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Enter a parse tree produced by `KotlinScriptParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinScriptParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Enter a parse tree produced by `KotlinScriptParser.packageDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPackageDeclaration?: (ctx: PackageDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinScriptParser.packageDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPackageDeclaration?: (ctx: PackageDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `KotlinScriptParser.entryPointFunName`.
	 * @param ctx the parse tree
	 */
	enterEntryPointFunName?: (ctx: EntryPointFunNameContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinScriptParser.entryPointFunName`.
	 * @param ctx the parse tree
	 */
	exitEntryPointFunName?: (ctx: EntryPointFunNameContext) => void;
	/**
	 * Enter a parse tree produced by `KotlinScriptParser.entryPoint`.
	 * @param ctx the parse tree
	 */
	enterEntryPoint?: (ctx: EntryPointContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinScriptParser.entryPoint`.
	 * @param ctx the parse tree
	 */
	exitEntryPoint?: (ctx: EntryPointContext) => void;
}

