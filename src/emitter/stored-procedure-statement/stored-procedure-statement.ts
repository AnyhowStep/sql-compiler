import {StoredProcedureStatement, switchSyntaxKind, SyntaxKind} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {addStatementCases} from "../statement";
import {emitReturnStatement} from "./return-statement";
import {emitBlockStatement} from "./block-statement";
import {emitLabelStatement} from "./label-statement";
import {emitLoopStatement} from "./loop-statement";
import {emitWhileStatement} from "./whilte-statement";
import {emitRepeatStatement} from "./repeat-statement";
import {emitIfStatement} from "./if-statement";
import {emitSimpleCaseStatement} from "./simple-case-statement";

export function emitStoredProcedureStatement (statement : StoredProcedureStatement) : StringBuilder {
    return addStatementCases(switchSyntaxKind(statement))
        .case(SyntaxKind.ReturnStatement, emitReturnStatement)
        .case(SyntaxKind.BlockStatement, emitBlockStatement)
        .case(SyntaxKind.LabelStatement, emitLabelStatement)
        .case(SyntaxKind.LoopStatement, emitLoopStatement)
        .case(SyntaxKind.WhileStatement, emitWhileStatement)
        .case(SyntaxKind.RepeatStatement, emitRepeatStatement)
        .case(SyntaxKind.IfStatement, emitIfStatement)
        .case(SyntaxKind.SimpleCaseStatement, emitSimpleCaseStatement)
        .default(() => new StringBuilder().append("UNKNOWN_STORED_PROCEDURE_STATEMENT"));
}
