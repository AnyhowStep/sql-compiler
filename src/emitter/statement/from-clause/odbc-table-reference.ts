import {OdbcTableReference} from "../../../parser-node";
import {emitIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitTableReference} from "./table-reference";

export function emitOdbcTableReference (odbcTableReference : OdbcTableReference, parenthesizeOdbcTableReference : boolean) : StringBuilder {
    const nestedTableReference = new StringBuilder()
        .appendBuilder(emitTableReference(odbcTableReference.tableReference, true))

    const result = (
        nestedTableReference.shouldMultiLine() ?
        new StringBuilder()
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
            .append("}") :
        new StringBuilder()
            .append("{")
            .appendBuilder(
                odbcTableReference.identifier.quoted || odbcTableReference.identifier.syntacticErrors != undefined ?
                emitIdentifier(odbcTableReference.identifier) :
                new StringBuilder().append(odbcTableReference.identifier.identifier)
            )
            .append(" ")
            .appendBuilder(nestedTableReference)
            .append("}")
    )
    return new StringBuilder()
        .append(parenthesizeOdbcTableReference || odbcTableReference.parenthesized ? "(" : undefined)
        .appendBuilder(result)
        .append(parenthesizeOdbcTableReference || odbcTableReference.parenthesized ? ")" : undefined)
}
