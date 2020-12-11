import {Limit} from "../../../parser-node";
import {emitExpression} from "../../expression";
import {StringBuilder} from "../../string-builder";

export function emitLimit (limit : Limit) {
    return new StringBuilder()
        .append("LIMIT")
        .indent(builder => builder.appendBuilder(emitExpression(limit.rowCount)))
        .scope(builder => {
            const offset = limit.offset;
            if (offset == undefined) {
                return;
            }
            builder
                .appendNewLine()
                .append("OFFSET")
                .indent(builder => builder.appendBuilder(emitExpression(offset)))
        })
}
