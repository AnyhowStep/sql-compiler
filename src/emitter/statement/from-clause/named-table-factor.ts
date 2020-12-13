import {NamedTableFactor} from "../../../parser-node";
import {emitIdentifier, emitIdentifierList, emitTableIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitIndexHintDefinitionList} from "./index-hint-definition-list";

export function emitNamedTableFactor (table : NamedTableFactor) {
    if (table.usedPartitions == undefined) {
        return new StringBuilder()
            .appendBuilder(emitTableIdentifier(table.tableIdentifier))
            .scope(builder => {
                if (table.alias == undefined) {
                    return;
                }
                builder
                    .append(" AS ")
                    .appendBuilder(emitIdentifier(table.alias))
            })
            .scope(builder => {
                if (table.indexHintDefinitions == undefined) {
                    return;
                }
                const indexHintDefinitions = table.indexHintDefinitions;
                builder.indent(builder => {
                    builder.appendBuilder(emitIndexHintDefinitionList(indexHintDefinitions));
                })
            })
    } else {
        const usedPartitions = table.usedPartitions;
        return new StringBuilder()
            .appendBuilder(emitTableIdentifier(table.tableIdentifier))
            .indent(builder => {
                builder
                    .append("PARTITION ")
                    .appendBuilder(emitIdentifierList(usedPartitions))
            })
            .scope(builder => {
                if (table.alias == undefined) {
                    return;
                }
                const alias = table.alias;
                builder.indent(builder => {
                    builder
                        .append("AS ")
                        .appendBuilder(emitIdentifier(alias))
                })
            })
            .scope(builder => {
                if (table.indexHintDefinitions == undefined) {
                    return;
                }
                const indexHintDefinitions = table.indexHintDefinitions;
                builder.indent(builder => {
                    builder.appendBuilder(emitIndexHintDefinitionList(indexHintDefinitions));
                })
            })
    }
}
