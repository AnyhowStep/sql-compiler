import {AlterTableEnableKeys} from "../../../../parser-node";
import {StringBuilder} from "../../../string-builder";

export function emitAlterTableEnableKeys (_item : AlterTableEnableKeys) : StringBuilder {
    return new StringBuilder()
        .append("ENABLE KEYS")
}
