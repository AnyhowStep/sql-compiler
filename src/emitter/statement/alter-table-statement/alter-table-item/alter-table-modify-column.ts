import {AlterTableModifyColumn, SyntaxKind} from "../../../../parser-node";
import {emitIdentifier} from "../../../identifier";
import {StringBuilder} from "../../../string-builder";
import {emitColumnDefinition} from "../../create-table-definition/column-definition";

export function emitAlterTableModifyColumn (item : AlterTableModifyColumn) : StringBuilder {
    return new StringBuilder()
        .append("MODIFY COLUMN ")
        .appendBuilder(emitColumnDefinition(item.columnDefinition))
        .scope(builder => {
            if (item.placeAfter == undefined) {
                return;
            }

            if (item.placeAfter.syntaxKind == SyntaxKind.Value) {
                builder.indent(builder => {
                    builder.append("FIRST")
                })
                return;
            }

            const placeAfter = emitIdentifier(item.placeAfter);
            builder.indent(builder => {
                builder
                    .append("AFTER ")
                    .appendBuilder(placeAfter)
            })
        })
}
