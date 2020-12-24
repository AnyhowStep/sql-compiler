import {LabelStatement} from "../../parser-node";
import {emitIdentifier} from "../identifier";
import {StringBuilder} from "../string-builder";
import {emitStoredProcedureStatement} from "./stored-procedure-statement";

export function emitLabelStatement (statement : LabelStatement) : StringBuilder {
    return new StringBuilder()
        .scope(builder => {
            if (statement.beginLabel == undefined) {
                return;
            }
            builder
                .appendBuilder(emitIdentifier(statement.beginLabel))
                .append(": ")
        })
        .appendBuilder(
            emitStoredProcedureStatement(statement.statement)
        )
        .scope(builder => {
            if (statement.endLabel == undefined) {
                return;
            }
            builder
                .append(" ")
                .appendBuilder(emitIdentifier(statement.endLabel))
        })
}
