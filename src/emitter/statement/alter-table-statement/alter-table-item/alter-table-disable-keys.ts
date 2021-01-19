import {AlterTableDisableKeys} from "../../../../parser-node";
import {StringBuilder} from "../../../string-builder";

export function emitAlterTableDisableKeys (_item : AlterTableDisableKeys) : StringBuilder {
    return new StringBuilder()
        .append("DISABLE KEYS")
}
