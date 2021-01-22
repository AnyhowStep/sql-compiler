import {AlterTableConvertToCharacterSet} from "../../../../parser-node";
import {emitCharacterSetNameOrDefault, emitCollationNameOrDefault} from "../../../identifier";
import {StringBuilder} from "../../../string-builder";

export function emitAlterTableConvertToCharacterSet (item : AlterTableConvertToCharacterSet) {
    return new StringBuilder()
        .append("CONVERT TO CHARACTER SET ")
        .appendBuilder(emitCharacterSetNameOrDefault(item.characterSetName))
        .scope(builder => {
            if (item.collationName == undefined) {
                return;
            }
            builder
                .append(" COLLATE ")
                .appendBuilder(emitCollationNameOrDefault(item.collationName))
        })
}
