import {AlterInstanceStatement} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {emitAlterInstanceRotateMasterKey} from "./alter-instance-statement";

export function emitAlterInstanceStatement (statement : AlterInstanceStatement) {
    return new StringBuilder()
        .append("ALTER INSTANCE ")
        .appendBuilder(emitAlterInstanceRotateMasterKey(statement.alterInstanceAction))
}
