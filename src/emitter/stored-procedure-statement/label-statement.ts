import {LabelStatement} from "../../parser-node";
import {emitIdentifier} from "../identifier";
import {StringBuilder} from "../string-builder";
import {emitBlockStatement} from "./block-statement";

export function emitLabelStatement (statement : LabelStatement) {
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
            emitBlockStatement(statement.statement)
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
