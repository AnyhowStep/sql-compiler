import {AlterTableForce} from "../../../../parser-node";
import {StringBuilder} from "../../../string-builder";

export function emitAlterTableForce (_item : AlterTableForce) : StringBuilder {
    return new StringBuilder()
        .append("FORCE")
}
