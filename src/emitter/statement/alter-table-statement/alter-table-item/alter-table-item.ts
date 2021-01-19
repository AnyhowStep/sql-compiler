import {AlterTableItem, SyntaxKind} from "../../../../parser-node";
import {StringBuilder} from "../../../string-builder";
import {emitCreateTableOptions} from "../../create-table-options";
import {emitAlterTableAddColumn} from "./alter-table-add-column";
import {emitAlterTableAddCreateTableDefinitionList} from "./alter-table-add-create-table-definition-list";
import {emitAlterTableChangeColumn} from "./alter-table-change-column";
import {emitAlterTableDisableKeys} from "./alter-table-disable-keys";
import {emitAlterTableDropColumn} from "./alter-table-drop-column";
import {emitAlterTableDropForeignKey} from "./alter-table-drop-foreign-key";
import {emitAlterTableDropIndex} from "./alter-table-drop-index";
import {emitAlterTableDropPrimaryKey} from "./alter-table-drop-primary-key";
import {emitAlterTableEnableKeys} from "./alter-table-enable-keys";
import {emitAlterTableModifyColumn} from "./alter-table-modify-column";

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
        case SyntaxKind.AlterTableModifyColumn:
            return emitAlterTableModifyColumn(item)
        case SyntaxKind.AlterTableDropColumn:
            return emitAlterTableDropColumn(item)
        case SyntaxKind.AlterTableDropForeignKey:
            return emitAlterTableDropForeignKey(item)
        case SyntaxKind.AlterTableDropPrimaryKey:
            return emitAlterTableDropPrimaryKey(item)
        case SyntaxKind.AlterTableDropIndex:
            return emitAlterTableDropIndex(item)
        case SyntaxKind.AlterTableDisableKeys:
            return emitAlterTableDisableKeys(item)
        case SyntaxKind.AlterTableEnableKeys:
            return emitAlterTableEnableKeys(item)
        case SyntaxKind.Value:
            return new StringBuilder().append(item.value)
    }
}
