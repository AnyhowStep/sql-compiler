import {AlterTableChangeColumn, SyntaxKind} from "../../../../parser-node";
import {emitColumnIdentifier, emitIdentifier} from "../../../identifier";
import {StringBuilder} from "../../../string-builder";
import {emitColumnDefinition} from "../../create-table-definition/column-definition";

export function emitAlterTableChangeColumn (item : AlterTableChangeColumn) : StringBuilder {
    return new StringBuilder()
        .append("CHANGE COLUMN ")
        .appendBuilder(emitColumnIdentifier(item.oldColumnIdentifier))
        .indent(builder => {
            builder
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
        })
}
