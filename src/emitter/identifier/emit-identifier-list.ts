import {Identifier, NodeArray} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitIdentifier} from "./emit-identifier";

export function emitIdentifierList (identifiers : NodeArray<Identifier>) {
    return new StringBuilder()
        .append("(")
        .loop(
            identifiers,
            builder => builder.append(", "),
            (builder, identifier) => builder.appendBuilder(emitIdentifier(identifier))
        )
        .append(")")
}
