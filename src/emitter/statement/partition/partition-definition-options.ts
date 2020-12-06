import {PartitionDefinitionOptions} from "../../../parser-node";
import {emitExpression} from "../../expression";
import {emitIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5828
 */
export function emitPartitionDefinitionOptions (options : PartitionDefinitionOptions) {
    return new StringBuilder()
        .scope(builder => {
            if (options.engine == undefined) {
                return;
            }
            builder
                .append("ENGINE = ")
                .appendBuilder(emitExpression(options.engine))
        })
        .scope(builder => {
            if (options.maxRows == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine();
            }
            builder
                .append("MAX_ROWS = ")
                .appendBuilder(emitExpression(options.maxRows))
        })
        .scope(builder => {
            if (options.minRows == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine();
            }
            builder
                .append("MIN_ROWS = ")
                .appendBuilder(emitExpression(options.minRows))
        })
        .scope(builder => {
            if (options.comment == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine();
            }
            builder
                .append("COMMENT = ")
                .appendBuilder(emitExpression(options.comment))
        })
        .scope(builder => {
            if (options.dataDirectory == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine();
            }
            builder
                .append("DATA DIRECTORY = ")
                .appendBuilder(emitExpression(options.dataDirectory))
        })
        .scope(builder => {
            if (options.indexDirectory == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine();
            }
            builder
                .append("INDEX DIRECTORY = ")
                .appendBuilder(emitExpression(options.indexDirectory))
        })
        .scope(builder => {
            if (options.tablespace == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine();
            }
            builder
                .append("TABLESPACE = ")
                .appendBuilder(emitIdentifier(options.tablespace))
        })
        .scope(builder => {
            if (options.nodeGroup == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine();
            }
            builder
                .append("NODEGROUP = ")
                .appendBuilder(emitExpression(options.nodeGroup))
        })
}
