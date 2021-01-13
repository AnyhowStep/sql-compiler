import {AlterTableItemOrModifier, AlterTableItemOrModifierList, SyntaxKind} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {emitAlterTableItem} from "./alter-table-item/alter-table-item";
import {emitAlterTableModifier} from "./alter-table-modifier";

export function emitAlterTableItemOrModifier (itemOrModifier : AlterTableItemOrModifier) : StringBuilder {
    switch (itemOrModifier.syntaxKind) {
        case SyntaxKind.AlterTableLock:
        case SyntaxKind.AlterTableAlgorithm:
        case SyntaxKind.AlterTableValidation:
            return emitAlterTableModifier(itemOrModifier);
        default:
            return emitAlterTableItem(itemOrModifier)
    }
}

export function emitAlterTableItemOrModifierList (arr : AlterTableItemOrModifierList) {
    return new StringBuilder()
        .loop(
            arr,
            builder => builder.append(",").appendNewLine(),
            (builder, itemOrModifier) => builder.appendBuilder(emitAlterTableItemOrModifier(itemOrModifier))
        )
}
