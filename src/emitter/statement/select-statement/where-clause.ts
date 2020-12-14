import {WhereClause} from "../../../parser-node";
import {emitExpression} from "../../expression";
import {StringBuilder} from "../../string-builder";

export function emitWhereClause (whereClause : WhereClause) {
    return new StringBuilder()
        .append("WHERE")
        .indent(builder => {
            builder
                .appendBuilder(emitExpression(whereClause.expr));
        })
}
