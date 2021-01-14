import {AlterTableItem, SyntaxKind} from "../../../../parser-node";
import {StringBuilder} from "../../../string-builder";
import {emitCreateTableOptions} from "../../create-table-options";
import {emitAlterTableAddColumn} from "./alter-table-add-column";

export function emitAlterTableItem (item : AlterTableItem) : StringBuilder {
    switch (item.syntaxKind) {
        case SyntaxKind.CreateTableOptions:
            return emitCreateTableOptions(item, true)
        case SyntaxKind.AlterTableAddColumn:
            return emitAlterTableAddColumn(item)
        case SyntaxKind.Value:
            return new StringBuilder().append(item.value)
    }
}
