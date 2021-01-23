import {AlterSchemaStatement} from "../../../parser-node";
import {emitIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitCreateSchemaOptionList} from "../emit-create-schema-statement";

export function emitAlterSchemaStatement (statement : AlterSchemaStatement) {
    return new StringBuilder()
        .append("ALTER SCHEMA")
        .scope(builder => {
            if (statement.schemaName == undefined) {
                return;
            }
            builder
                .append(" ")
                .appendBuilder(emitIdentifier(statement.schemaName))
        })
        .scope(builder => {
            const createSchemaOptions = emitCreateSchemaOptionList(statement.createSchemaOptions);
            if (!createSchemaOptions.isEmpty()) {
                builder.indent(builder => {
                    builder.appendBuilder(createSchemaOptions)
                })
            }
        })
}
