import {AlterTableRenameIndex} from "../../../../parser-node";
import {emitColumnIdentifier} from "../../../identifier";
import {StringBuilder} from "../../../string-builder";

export function emitAlterTableRenameIndex (item : AlterTableRenameIndex) : StringBuilder {
    return new StringBuilder()
        .append("RENAME INDEX ")
        .appendBuilder(emitColumnIdentifier(item.oldIndexIdentifier))
        .indent(builder => {
            builder
                .append("TO ")
                .appendBuilder(emitColumnIdentifier(item.newIndexIdentifier))
        })
}
