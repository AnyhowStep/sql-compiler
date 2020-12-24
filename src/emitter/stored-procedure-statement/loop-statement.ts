import {LoopStatement} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitStoredProcedureStatementList} from "./stored-procedure-statement-list";

export function emitLoopStatement (statement : LoopStatement) {
    return new StringBuilder()
        .append("LOOP")
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
        .append("END LOOP")
}
