import {AlterTableDropPrimaryKey} from "../../../../parser-node";
import {StringBuilder} from "../../../string-builder";

export function emitAlterTableDropPrimaryKey (_item : AlterTableDropPrimaryKey) : StringBuilder {
    return new StringBuilder()
        .append("DROP PRIMARY KEY")
}
