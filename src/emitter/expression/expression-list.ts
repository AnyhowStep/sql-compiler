import {ExpressionList} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitExpression} from "./expression";

export function emitExpressionList (arr : ExpressionList) {
    return new StringBuilder()
        .append("(")
        .loop(
            arr,
            builder => builder.append(", "),
            (builder, expression) => builder
                .appendBuilder(emitExpression(expression))
        )
        .append(")")
}
