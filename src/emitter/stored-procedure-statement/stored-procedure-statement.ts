import {StoredProcedureStatement, switchSyntaxKind, SyntaxKind} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {addStatementCases} from "../statement";
import {emitReturnStatement} from "./return-statement";
import {emitBlockStatement} from "./block-statement";
import {emitLabelStatement} from "./label-statement";

export function emitStoredProcedureStatement (statement : StoredProcedureStatement) {
    return addStatementCases(switchSyntaxKind(statement))
        .case(SyntaxKind.ReturnStatement, emitReturnStatement)
        .case(SyntaxKind.BlockStatement, emitBlockStatement)
        .case(SyntaxKind.LabelStatement, emitLabelStatement)
        .default(() => new StringBuilder().append("UNKNOWN_STORED_PROCEDURE_STATEMENT"));
}
