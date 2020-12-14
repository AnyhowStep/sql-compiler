import {Select, SyntaxKind} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {emitFromClause} from "../from-clause";
import {emitGroupByClause} from "../group-by-clause";
import {emitAsteriskSelectItem} from "./asterisk-select-item";
import {emitHavingClause} from "./having-clause";
import {emitLimit} from "./limit";
import {emitOrderExprList} from "./order-expr";
import {emitProcedureAnalyseClause} from "./procedure-analyse-clause";
import {emitSelectItem} from "./select-item";
import {emitSelectOptions} from "./select-options";
import {emitTableAsteriskSelectItem} from "./table-asterisk-select-item";
import {emitWhereClause} from "./where-clause";

export function emitSelect (select : Select) {
    return new StringBuilder()
        .append("SELECT")
        .scope(builder => {
            const selectOptions = emitSelectOptions(select.selectOptions);
            if (selectOptions.isEmpty()) {
                return;
            }
            builder
                .append(" ")
                .appendBuilder(selectOptions)
        })
        .indent(builder => {
            builder.loop(
                select.selectItems,
                builder => builder.append(",").appendNewLine(),
                (builder, selectItem) => builder
                    .appendBuilder(
                        selectItem.syntaxKind == SyntaxKind.AsteriskSelectItem ?
                        emitAsteriskSelectItem(selectItem) :
                        selectItem.syntaxKind == SyntaxKind.TableAsteriskSelectItem ?
                        emitTableAsteriskSelectItem(selectItem) :
                        emitSelectItem(selectItem)
                    )
            )
        })
        .scope(builder => {
            if (select.fromClause == undefined) {
                return;
            }
            builder
                .appendNewLine()
                .appendBuilder(emitFromClause(select.fromClause))
        })
        .scope(builder => {
            if (select.whereClause == undefined) {
                return;
            }
            builder
                .appendNewLine()
                .appendBuilder(emitWhereClause(select.whereClause))
        })
        .scope(builder => {
            if (select.groupByClause == undefined) {
                return;
            }
            builder
                .appendNewLine()
                .appendBuilder(emitGroupByClause(select.groupByClause))
        })
        .scope(builder => {
            if (select.havingClause == undefined) {
                return;
            }
            builder
                .appendNewLine()
                .appendBuilder(emitHavingClause(select.havingClause))
        })
        .scope(builder => {
            if (select.order == undefined) {
                return;
            }
            builder
                .appendNewLine()
                .appendBuilder(emitOrderExprList(select.order))
        })
        .scope(builder => {
            if (select.limit == undefined) {
                return;
            }
            builder
                .appendNewLine()
                .appendBuilder(emitLimit(select.limit))
        })
        .scope(builder => {
            if (select.procedureAnalyseClause == undefined) {
                return;
            }
            builder
                .appendNewLine()
                .appendBuilder(emitProcedureAnalyseClause(select.procedureAnalyseClause))
        })
}
