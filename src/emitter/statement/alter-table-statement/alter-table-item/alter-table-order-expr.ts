import {AlterTableOrderExpr, AlterTableOrderExprList, OrderingDirection} from "../../../../parser-node";
import {emitColumnIdentifier} from "../../../identifier";
import {StringBuilder} from "../../../string-builder";

export function emitAlterTableOrderExpr (orderExpr : AlterTableOrderExpr) : StringBuilder {
    return new StringBuilder()
        .appendBuilder(emitColumnIdentifier(orderExpr.expr))
        .append(
            orderExpr.orderingDirection == OrderingDirection.ASC ?
            " ASC" :
            " DESC"
        )
}

export function emitAlterTableOrderExprList(arr : AlterTableOrderExprList) {
    return new StringBuilder()
        .loop(
            arr,
            builder => builder.append(",").appendNewLine(),
            (builder, orderExpr) => builder.appendBuilder(emitAlterTableOrderExpr(orderExpr))
        )
}
