import {BlockStatement} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitStoredProcedureStatementList} from "./stored-procedure-statement-list";

export function emitBlockStatement (statement : BlockStatement) {
    return new StringBuilder()
        .append("BEGIN")
        .scope(builder => {
            const statements = emitStoredProcedureStatementList(statement.statements);
            if (statements.isEmpty()) {
                return;
            }
            builder.indent(builder => {
                builder
                    .appendBuilder(statements)
            })
        })
        .appendNewLine()
        .append("END")
}
