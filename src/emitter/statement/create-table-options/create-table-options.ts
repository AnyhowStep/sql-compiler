import {CreateTableOptions} from "../../../parser-node";
import {emitExpression} from "../../expression";
import {StringBuilder} from "../../string-builder";

export function emitCreateTableOptions (options : CreateTableOptions) {
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
            if (options.averageRowLength == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine();
            }
            builder
                .append("AVG_ROW_LENGTH = ")
                .appendBuilder(emitExpression(options.averageRowLength))
        })
        .scope(builder => {
            if (options.password == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine();
            }
            builder
                .append("PASSWORD = ")
                .appendBuilder(emitExpression(options.password))
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
            if (options.compression == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine();
            }
            builder
                .append("COMPRESSION = ")
                .appendBuilder(emitExpression(options.compression))
        })
        .scope(builder => {
            if (options.encryption == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine();
            }
            builder
                .append("ENCRYPTION = ")
                .appendBuilder(emitExpression(options.encryption))
        })
}