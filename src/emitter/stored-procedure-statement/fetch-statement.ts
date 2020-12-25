import {FetchStatement} from "../../parser-node";
import {emitIdentifier} from "../identifier";
import {StringBuilder} from "../string-builder";

export function emitFetchStatement (statement : FetchStatement) : StringBuilder {
    return new StringBuilder()
        .append("FETCH NEXT FROM ")
        .appendBuilder(emitIdentifier(statement.cursorName))
        .append(" INTO")
        .indent(builder => {
            builder
                .loop(
                    statement.identifiers,
                    builder => builder.append(",").appendNewLine(),
                    (builder, identifier) => builder.appendBuilder(emitIdentifier(identifier))
                )
        })
}
