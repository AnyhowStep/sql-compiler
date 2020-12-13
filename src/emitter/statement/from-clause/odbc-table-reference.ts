import {OdbcTableReference, SyntaxKind} from "../../../parser-node";
import {emitIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitTableReference} from "./table-reference";

export function emitOdbcTableReference (odbcTableReference : OdbcTableReference) {
    return new StringBuilder()
        .append("{")
        .appendBuilder(emitIdentifier(odbcTableReference.identifier))
        .indent(builder => {
            if (odbcTableReference.tableReference.syntaxKind == SyntaxKind.OdbcTableReference) {
                builder
                    .append("(")
                    .appendBuilder(emitOdbcTableReference(odbcTableReference.tableReference))
                    .append(")")
            } else {
                builder
                    .appendBuilder(emitTableReference(odbcTableReference.tableReference))
            }
        })
        .appendNewLine()
        .append("}")
}
