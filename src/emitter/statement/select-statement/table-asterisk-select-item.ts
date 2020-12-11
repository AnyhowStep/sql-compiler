import {TableAsteriskSelectItem} from "../../../parser-node";
import {emitTableIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";

export function emitTableAsteriskSelectItem (item : TableAsteriskSelectItem) {
    return new StringBuilder()
        .appendBuilder(emitTableIdentifier(item.tableIdentifier))
        .append(".*")
}
