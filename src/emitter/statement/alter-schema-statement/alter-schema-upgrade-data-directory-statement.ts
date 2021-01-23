import {AlterSchemaUpgradeDataDirectoryNameStatement} from "../../../parser-node";
import {emitIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";

export function emitAlterSchemaUpgradeDataDirectoryNameStatement (statement : AlterSchemaUpgradeDataDirectoryNameStatement) {
    return new StringBuilder()
        .append("ALTER SCHEMA ")
        .appendBuilder(emitIdentifier(statement.schemaName))
        .indent(builder => {
            builder
                .append("UPGRADE DATA DIRECTORY NAME")
        })
}
