import {OdbcTableReference, SyntaxKind} from "../../../parser-node";
import {emitIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitTableReference} from "./table-reference";

export function emitOdbcTableReference (odbcTableReference : OdbcTableReference) : StringBuilder {
    const nestedTableReference = (
        odbcTableReference.tableReference.syntaxKind == SyntaxKind.OdbcTableReference ?
        new StringBuilder()
            .append("(")
            .appendBuilder(emitOdbcTableReference(odbcTableReference.tableReference))
            .append(")") :
        new StringBuilder()
            .appendBuilder(emitTableReference(odbcTableReference.tableReference))
    )

    if (nestedTableReference.shouldMultiLine()) {
        return new StringBuilder()
            .append("{")
            .appendBuilder(
                odbcTableReference.identifier.quoted || odbcTableReference.identifier.syntacticErrors != undefined ?
                emitIdentifier(odbcTableReference.identifier) :
                new StringBuilder().append(odbcTableReference.identifier.identifier)
            )
            .indent(builder => {
                builder
                    .appendBuilder(nestedTableReference)
            })
            .appendNewLine()
            .append("}")
    } else {
        return new StringBuilder()
            .append("{")
            .appendBuilder(
                odbcTableReference.identifier.quoted || odbcTableReference.identifier.syntacticErrors != undefined ?
                emitIdentifier(odbcTableReference.identifier) :
                new StringBuilder().append(odbcTableReference.identifier.identifier)
            )
            .append(" ")
            .appendBuilder(nestedTableReference)
            .append("}")
    }
}
