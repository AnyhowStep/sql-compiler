import {Select, SyntaxKind} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {emitAsteriskSelectItem} from "./asterisk-select-item";
import {emitLimit} from "./limit";
import {emitOrderExprList} from "./order-expr";
import {emitSelectItem} from "./select-item";
import {emitSelectOptions} from "./select-options";
import {emitTableAsteriskSelectItem} from "./table-asterisk-select-item";

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
}
