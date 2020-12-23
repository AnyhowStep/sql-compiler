import {NodeArray, StoredProcedureStatement} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitStoredProcedureStatement} from "./stored-procedure-statement";

export function emitStoredProcedureStatementList (statements : NodeArray<StoredProcedureStatement>) : StringBuilder {
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
        (builder, {statementStr}) => builder
            .appendBuilder(statementStr)
            .append(";")
    );

    return result;
}
