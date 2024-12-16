// Generated from E:/Магістр/semestr1/compilers-labs/lab6/src/main/antlr4/KotlinScript.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `KotlinScriptParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class KotlinScriptVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `KotlinScriptParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;
	/**
	 * Visit a parse tree produced by `KotlinScriptParser.varTypeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarTypeSpecifier?: (ctx: VarTypeSpecifierContext) => Result;
	/**
	 * Visit a parse tree produced by `KotlinScriptParser.varDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDeclaration?: (ctx: VarDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `KotlinScriptParser.varDeclarationsList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDeclarationsList?: (ctx: VarDeclarationsListContext) => Result;
	/**
	 * Visit a parse tree produced by `KotlinScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `KotlinScriptParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;
	/**
	 * Visit a parse tree produced by `KotlinScriptParser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactor?: (ctx: FactorContext) => Result;
	/**
	 * Visit a parse tree produced by `KotlinScriptParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `KotlinScriptParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;
	/**
	 * Visit a parse tree produced by `KotlinScriptParser.statementsList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementsList?: (ctx: StatementsListContext) => Result;
	/**
	 * Visit a parse tree produced by `KotlinScriptParser.closableStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosableStatement?: (ctx: ClosableStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `KotlinScriptParser.nonclosableStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonclosableStatement?: (ctx: NonclosableStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `KotlinScriptParser.declarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationStatement?: (ctx: DeclarationStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `KotlinScriptParser.assignStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignStatement?: (ctx: AssignStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `KotlinScriptParser.inStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInStatement?: (ctx: InStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `KotlinScriptParser.outStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutStatement?: (ctx: OutStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `KotlinScriptParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `KotlinScriptParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `KotlinScriptParser.packageDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageDeclaration?: (ctx: PackageDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `KotlinScriptParser.entryPointFunName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntryPointFunName?: (ctx: EntryPointFunNameContext) => Result;
	/**
	 * Visit a parse tree produced by `KotlinScriptParser.entryPoint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntryPoint?: (ctx: EntryPointContext) => Result;
}

