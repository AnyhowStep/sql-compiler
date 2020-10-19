import {CreateSchemaStatement} from "../../parser-node";
import {emitIdentifier} from "../identifier";
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

    if (statement.characterSet != undefined) {
        result.append(" CHARACTER SET ");
        result.appendBuilder(emitIdentifier(statement.characterSet));
    }

    if (statement.collate != undefined) {
        result.append(" COLLATE ");
        result.appendBuilder(emitIdentifier(statement.collate));
    }

    return result.append(";");
}
