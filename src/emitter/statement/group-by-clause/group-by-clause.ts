import {GroupByClause, OlapOption} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {emitGroupingExprList} from "./grouping-expr";

export function emitGroupByClause (groupByClause : GroupByClause) {
    return new StringBuilder()
        .append("GROUP BY")
        .indent(builder => {
            builder
                .appendBuilder(emitGroupingExprList(groupByClause.groupingExprs))

            if (groupByClause.olapOption == undefined) {
                return;
            }
            builder
                .appendNewLine()
                .append(
                    groupByClause.olapOption.value == OlapOption.WITH_CUBE ?
                    "WITH CUBE" :
                    "WITH ROLLUP"
                )
        })
}
