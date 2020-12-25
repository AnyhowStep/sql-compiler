import {GroupingExpr, SortDirection, GroupingExprList} from "../../../parser-node";
import {emitExpression} from "../../expression";
import {shouldMultiLine, StringBuilder} from "../../string-builder";

export function emitGroupingExpr (groupingExpr : GroupingExpr) {
    return new StringBuilder()
        .appendBuilder(emitExpression(groupingExpr.expr))
        .append(
            groupingExpr.sortDirection == undefined ?
            undefined :
            groupingExpr.sortDirection.value == SortDirection.ASC ?
            " ASC" :
            " DESC"
        )
}

export function emitGroupingExprList (arr : GroupingExprList) {
    const groupingExprs = arr.map(groupingExpr => emitGroupingExpr(groupingExpr));

    if (shouldMultiLine(...groupingExprs)) {
        return new StringBuilder()
            .loop(
                groupingExprs,
                builder => builder.append(",").appendNewLine(),
                (builder, item) => builder.appendBuilder(item)
            )
    } else {
        return new StringBuilder()
            .loop(
                groupingExprs,
                builder => builder.append(", "),
                (builder, item) => builder.appendBuilder(item)
            )
    }
}
