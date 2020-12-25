import {isSyntaxKind, StoredProcedureStatementList, SyntaxKind} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitStoredProcedureStatement} from "./stored-procedure-statement";

export function emitStoredProcedureStatementList (statements : StoredProcedureStatementList) : StringBuilder {
    const result = new StringBuilder();

    result.loop(
        statements
            .map(statement => {
                return {
                    statement,
                    statementStr : emitStoredProcedureStatement(statement),
                }
            })
            .filter(item => !item.statementStr.isEmpty()),
        builder => builder.appendNewLine().appendNewLine(),
        (builder, {statement, statementStr}) => builder
            .appendBuilder(statementStr)
            .append(
                isSyntaxKind(statement, SyntaxKind.DelimiterStatement) ?
                undefined :
                ";"
            )
    );

    return result;
}
