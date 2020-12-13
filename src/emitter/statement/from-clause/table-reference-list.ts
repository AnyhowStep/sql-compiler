import {TableReferenceList} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {emitTableReference} from "./table-reference";

export function emitTableReferenceList (arr : TableReferenceList) {
    return new StringBuilder()
        .loop(
            arr,
            builder => builder.append(",").appendNewLine(),
            (builder, tableReference) => builder
                .appendBuilder(emitTableReference(tableReference))
        )
}
