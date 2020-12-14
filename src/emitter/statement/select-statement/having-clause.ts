import {HavingClause} from "../../../parser-node";
import {emitExpression} from "../../expression";
import {StringBuilder} from "../../string-builder";

export function emitHavingClause (havingClause : HavingClause) {
    return new StringBuilder()
        .append("HAVING")
        .indent(builder => {
            builder
                .appendBuilder(emitExpression(havingClause.expr));
        })
}
