import {AlterTableDropIndex} from "../../../../parser-node";
import {emitColumnIdentifier} from "../../../identifier";
import {StringBuilder} from "../../../string-builder";

export function emitAlterTableDropIndex (item : AlterTableDropIndex) : StringBuilder {
    return new StringBuilder()
        .append("DROP INDEX ")
        .appendBuilder(emitColumnIdentifier(item.indexIdentifier))
}
