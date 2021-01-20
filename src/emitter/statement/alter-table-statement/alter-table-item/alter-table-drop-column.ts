import {AlterTableDropColumn} from "../../../../parser-node";
import {emitColumnIdentifier} from "../../../identifier";
import {StringBuilder} from "../../../string-builder";

export function emitAlterTableDropColumn (item : AlterTableDropColumn) : StringBuilder {
    return new StringBuilder()
        .append("DROP COLUMN ")
        .appendBuilder(emitColumnIdentifier(item.columnIdentifier))
        .scope(builder => {
            if (item.dropMode == undefined) {
                return;
            }
            const dropMode = item.dropMode.value;

            builder.indent(builder => {
                builder.append(dropMode)
            })
        })
}
