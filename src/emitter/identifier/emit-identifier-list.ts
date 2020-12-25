import {IdentifierList} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitIdentifier} from "./emit-identifier";

export function emitIdentifierList (identifiers : IdentifierList) {
    return new StringBuilder()
        .append("(")
        .loop(
            identifiers,
            builder => builder.append(", "),
            (builder, identifier) => builder.appendBuilder(emitIdentifier(identifier))
        )
        .append(")")
}
