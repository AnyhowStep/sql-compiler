import {NodeArray, OrderExpr, OrderingDirection} from "../../../parser-node";
import {emitExpression} from "../../expression";
import {StringBuilder} from "../../string-builder";

export function emitOrderExpr (orderExpr : OrderExpr) {
    return new StringBuilder()
        .appendBuilder(emitExpression(orderExpr.expr))
        .append(
            orderExpr.orderingDirection == OrderingDirection.ASC ?
            " ASC" :
            " DESC"
        )
}

export function emitOrderExprList(arr : NodeArray<OrderExpr>) {
    return new StringBuilder()
        .append("ORDER BY ")
        .indent(builder => {
            builder
                .loop(
                    arr,
                    builder => builder.append(",").appendNewLine(),
                    (builder, orderExpr) => builder.appendBuilder(emitOrderExpr(orderExpr))
                )
        })
}
