import {SelectItem} from "../../../parser-node";
import {emitExpression} from "../../expression";
import {StringBuilder} from "../../string-builder";

export function emitSelectItem (item : SelectItem) {
    return new StringBuilder()
        .appendBuilder(emitExpression(item.expr))
        .scope(builder => {
            if (item.alias == undefined) {
                return;
            }
            builder
                .append(" AS ")
                .appendBuilder(emitExpression(item.alias))
        })
}
