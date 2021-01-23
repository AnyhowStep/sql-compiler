import {CreateSchemaOptionList, CreateSchemaStatement, SyntaxKind} from "../../parser-node";
import {emitIdentifier} from "../identifier";
import {emitDefaultCharacterSet, emitDefaultCollation} from "../misc";
import {StringBuilder} from "../string-builder";

export function emitCreateSchemaOptionList (arr : CreateSchemaOptionList) {
    return new StringBuilder()
        .loop(
            arr,
            builder => builder.appendNewLine(),
            (builder, item) => builder
                .appendBuilder(
                    item.syntaxKind == SyntaxKind.DefaultCharacterSet ?
                    emitDefaultCharacterSet(item) :
                    emitDefaultCollation(item)
                )
        )
}

export function emitCreateSchemaStatement (statement : CreateSchemaStatement) : StringBuilder {
    const result = new StringBuilder()
        .append("CREATE SCHEMA")


    if (statement.ifNotExists) {
        result.append(" IF NOT EXISTS");
    }

    result
        .append(" ")
        .appendBuilder(emitIdentifier(statement.schemaName));

    const createSchemaOptions = emitCreateSchemaOptionList(statement.createSchemaOptions);
    if (!createSchemaOptions.isEmpty()) {
        result.indent(builder => {
            builder.appendBuilder(createSchemaOptions)
        })
    }

    return result;
}
