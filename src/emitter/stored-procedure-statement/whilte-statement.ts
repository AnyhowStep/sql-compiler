import {WhileStatement} from "../../parser-node";
import {emitExpression} from "../expression";
import {StringBuilder} from "../string-builder";
import {emitStoredProcedureStatementList} from "./stored-procedure-statement-list";

export function emitWhileStatement (statement : WhileStatement) {
    return new StringBuilder()
        .append("WHILE ")
        .appendBuilder(emitExpression(statement.expr))
        .append(" DO")
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
        .append("END WHILE")
}
