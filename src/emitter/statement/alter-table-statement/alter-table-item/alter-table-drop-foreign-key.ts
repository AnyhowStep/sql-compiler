import {AlterTableDropForeignKey} from "../../../../parser-node";
import {emitIdentifier} from "../../../identifier";
import {StringBuilder} from "../../../string-builder";

export function emitAlterTableDropForeignKey (item : AlterTableDropForeignKey) : StringBuilder {
    return new StringBuilder()
        .append("DROP FOREIGN KEY ")
        .appendBuilder(emitIdentifier(item.foreignKeyIdentifier.columnName))
}
