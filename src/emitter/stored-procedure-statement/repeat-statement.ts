import {RepeatStatement} from "../../parser-node";
import {emitExpression} from "../expression";
import {StringBuilder} from "../string-builder";
import {emitStoredProcedureStatementList} from "./stored-procedure-statement-list";

export function emitRepeatStatement (statement : RepeatStatement) {
    return new StringBuilder()
        .append("REPEAT")
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
        .append("UNTIL ")
        .appendBuilder(emitExpression(statement.expr))
        .appendNewLine()
        .append("END REPEAT")
}
