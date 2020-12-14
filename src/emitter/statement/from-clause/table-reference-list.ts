import {SyntaxKind, TableReferenceList} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {emitTableReference} from "./table-reference";

export function emitTableReferenceList (arr : TableReferenceList) {
    if (arr.length == 1) {
        return emitTableReference(arr[0], false);
    }

    return new StringBuilder()
        .loop(
            arr,
            builder => builder.append(",").appendNewLine(),
            (builder, tableReference) => {
                if (tableReference.syntaxKind == SyntaxKind.Join) {
                    builder
                        .append("(")
                        .indent(builder => builder
                            .appendBuilder(emitTableReference(tableReference, false))
                        )
                        .appendNewLine()
                        .append(")")
                } else {
                    builder
                        .appendBuilder(emitTableReference(tableReference, false))
                }
            }
        )
}
