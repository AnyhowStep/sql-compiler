import {AlterTableItem, SyntaxKind} from "../../../../parser-node";
import {StringBuilder} from "../../../string-builder";
import {emitCreateTableOptions} from "../../create-table-options";
import {emitAlterTableAddColumn} from "./alter-table-add-column";
import {emitAlterTableAddCreateTableDefinitionList} from "./alter-table-add-create-table-definition-list";
import {emitAlterTableChangeColumn} from "./alter-table-change-column";

export function emitAlterTableItem (item : AlterTableItem) : StringBuilder {
    switch (item.syntaxKind) {
        case SyntaxKind.CreateTableOptions:
            return emitCreateTableOptions(item, true)
        case SyntaxKind.AlterTableAddColumn:
            return emitAlterTableAddColumn(item)
        case SyntaxKind.AlterTableAddCreateTableDefinitionList:
            return emitAlterTableAddCreateTableDefinitionList(item)
        case SyntaxKind.AlterTableChangeColumn:
            return emitAlterTableChangeColumn(item)
        case SyntaxKind.Value:
            return new StringBuilder().append(item.value)
    }
}
