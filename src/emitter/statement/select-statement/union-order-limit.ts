import {SyntaxKind, UnionOrderLimit} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {emitLimit} from "./limit";
import {emitOrderExprList} from "./order-expr";
import {emitSelect} from "./select";
import {emitUnion} from "./union";

export function emitUnionOrderLimit (unionOrderLimit : UnionOrderLimit) {
    return new StringBuilder()
        .scope(builder => {
            const select = unionOrderLimit.select;
            if (select.syntaxKind == SyntaxKind.Union) {
                builder
                    .appendBuilder(emitUnion(select))
            } else {
                builder
                    .append("(")
                    .indent(builder => builder.appendBuilder(emitSelect(select)))
                    .appendNewLine()
                    .append(")")
            }
        })
        .scope(builder => {
            if (unionOrderLimit.order == undefined) {
                return;
            }
            builder
                .appendNewLine()
                .appendBuilder(emitOrderExprList(unionOrderLimit.order))
        })
        .scope(builder => {
            if (unionOrderLimit.limit == undefined) {
                return;
            }
            builder
                .appendNewLine()
                .appendBuilder(emitLimit(unionOrderLimit.limit))
        })
}
