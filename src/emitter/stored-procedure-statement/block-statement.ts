import {BlockStatement} from "../../parser-node";
import {emitIdentifier} from "../identifier";
import {StringBuilder} from "../string-builder";
import {emitStoredProcedureStatementList} from "./stored-procedure-statement-list";

export function emitBlockStatement (statement : BlockStatement) {
    return new StringBuilder()
        .scope(builder => {
            if (statement.beginLabel == undefined) {
                return;
            }
            builder
                .appendBuilder(emitIdentifier(statement.beginLabel))
                .append(": ")
        })
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
        .scope(builder => {
            if (statement.endLabel == undefined) {
                return;
            }
            builder
                .append(" ")
                .appendBuilder(emitIdentifier(statement.endLabel))
        })
}
