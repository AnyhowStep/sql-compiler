import {AlterTableRenameTable} from "../../../../parser-node";
import {emitTableIdentifier} from "../../../identifier";
import {StringBuilder} from "../../../string-builder";

export function emitAlterTableRenameTable (item : AlterTableRenameTable) : StringBuilder {
    return new StringBuilder()
        .append("RENAME TO ")
        .appendBuilder(emitTableIdentifier(item.newTableIdentifier))
}
