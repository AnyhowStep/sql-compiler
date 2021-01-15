import {AlterTableAddCreateTableDefinitionList} from "../../../../parser-node";
import {StringBuilder} from "../../../string-builder";
import {emitCreateTableDefinitionList} from "../../create-table-definition";

export function emitAlterTableAddCreateTableDefinitionList (item : AlterTableAddCreateTableDefinitionList) : StringBuilder {
    return new StringBuilder()
        .append("ADD ")
        .appendBuilder(emitCreateTableDefinitionList(item.createTableDefinitionList))
}
