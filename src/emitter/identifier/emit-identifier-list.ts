import {IdentifierList} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitIdentifier} from "./emit-identifier";

export function emitIdentifierListMultiLine (identifiers : IdentifierList) {
    if (identifiers.length == 0) {
        return new StringBuilder().append("()");
    }
    return new StringBuilder()
        .append("(")
        .indent(builder => {
            builder
                .loop(
                    identifiers,
                    builder => builder.append(",").appendNewLine(),
                    (builder, identifier) => builder.appendBuilder(emitIdentifier(identifier))
                )
        })
        .appendNewLine()
        .append(")")
}

export function emitIdentifierListSingleLine (identifiers : IdentifierList) {
    if (identifiers.length == 0) {
        return new StringBuilder().append("()");
    }
    return new StringBuilder()
        .append("(")
        .loop(
            identifiers,
            builder => builder.append(", "),
            (builder, identifier) => builder.appendBuilder(emitIdentifier(identifier))
        )
        .append(")")
}

export function emitIdentifierList (identifiers : IdentifierList) {
    if (identifiers.length == 0) {
        return new StringBuilder().append("()");
    }
    const singleLine = emitIdentifierListSingleLine(identifiers);
    if (singleLine.shouldMultiLine()) {
        return emitIdentifierListMultiLine(identifiers);
    }
    return singleLine;
}
