import {CreateSchemaStatement, SyntaxKind} from "../../parser-node";
import {emitIdentifier} from "../identifier";
import {emitDefaultCharacterSet, emitDefaultCollation} from "../misc";
import {StringBuilder} from "../string-builder";

export function emitCreateSchemaStatement (statement : CreateSchemaStatement) : StringBuilder {
    const result = new StringBuilder()
        .append("CREATE SCHEMA")


    if (statement.ifNotExists) {
        result.append(" IF NOT EXISTS");
    }

    result
        .append(" ")
        .appendBuilder(emitIdentifier(statement.schemaName));

    for (const createSchemaOption of statement.createSchemaOptions) {
        if (createSchemaOption.syntaxKind == SyntaxKind.DefaultCharacterSet) {
            result
                .append(" ")
                .appendBuilder(emitDefaultCharacterSet(createSchemaOption));
        } else {
            result
                .append(" ")
                .appendBuilder(emitDefaultCollation(createSchemaOption));
        }
    }

    return result.append(";");
}
