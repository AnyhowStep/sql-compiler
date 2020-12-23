import {StoredProcedureStatement, switchSyntaxKind, SyntaxKind} from "../../../parser-node";
import {
    emitBlockStatement,
    emitReturnStatement,
} from "../../stored-procedure-statement";
import {StringBuilder} from "../../string-builder";
import {addStatementCases} from "../emit-statement";

export function emitStoredProcedureStatement (statement : StoredProcedureStatement) {
    return addStatementCases(switchSyntaxKind(statement))
        .case(SyntaxKind.ReturnStatement, emitReturnStatement)
        .case(SyntaxKind.BlockStatement, emitBlockStatement)
        .default(() => new StringBuilder().append("UNKNOWN_STORED_PROCEDURE_STATEMENT"));
}
