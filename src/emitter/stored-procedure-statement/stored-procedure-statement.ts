import {StoredProcedureStatement, switchSyntaxKind, SyntaxKind} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {addStatementCases} from "../statement";
import {emitReturnStatement} from "./return-statement";
import {emitBlockStatement} from "./block-statement";
import {emitLabelStatement} from "./label-statement";
import {emitLoopStatement} from "./loop-statement";

export function emitStoredProcedureStatement (statement : StoredProcedureStatement) : StringBuilder {
    return addStatementCases(switchSyntaxKind(statement))
        .case(SyntaxKind.ReturnStatement, emitReturnStatement)
        .case(SyntaxKind.BlockStatement, emitBlockStatement)
        .case(SyntaxKind.LabelStatement, emitLabelStatement)
        .case(SyntaxKind.LoopStatement, emitLoopStatement)
        .default(() => new StringBuilder().append("UNKNOWN_STORED_PROCEDURE_STATEMENT"));
}
