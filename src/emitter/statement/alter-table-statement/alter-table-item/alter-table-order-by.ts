import {AlterTableOrderBy} from "../../../../parser-node";
import {StringBuilder} from "../../../string-builder";
import {emitAlterTableOrderExprList} from "./alter-table-order-expr";

export function emitAlterTableOrderBy (item : AlterTableOrderBy) : StringBuilder {
    return new StringBuilder()
        .append("ORDER BY")
        .indent(builder => {
            builder
                .appendBuilder(emitAlterTableOrderExprList(item.alterTableOrderExprList))
        })
}
