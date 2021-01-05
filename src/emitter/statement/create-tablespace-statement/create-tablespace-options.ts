import {CreateTablespaceOptions} from "../../../parser-node";
import {emitExpression, emitIntegerLiteral, emitStringLiteral} from "../../expression";
import {emitSizeNumber} from "../../misc";
import {StringBuilder} from "../../string-builder";

export function emitCreateTablespaceOptions (options : CreateTablespaceOptions) {
    return new StringBuilder()
        .scope(builder => {
            if (options.initialSize == undefined) {
                return;
            }
            builder
                .append("INITIAL_SIZE = ")
                .appendBuilder(emitSizeNumber(options.initialSize))
        })
        .scope(builder => {
            if (options.autoExtendSize == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine()
            }
            builder
                .append("AUTOEXTEND_SIZE = ")
                .appendBuilder(emitSizeNumber(options.autoExtendSize))
        })
        .scope(builder => {
            if (options.maxSize == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine()
            }
            builder
                .append("MAX_SIZE = ")
                .appendBuilder(emitSizeNumber(options.maxSize))
        })
        .scope(builder => {
            if (options.extentSize == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine()
            }
            builder
                .append("EXTENT_SIZE = ")
                .appendBuilder(emitSizeNumber(options.extentSize))
        })
        .scope(builder => {
            if (options.nodeGroup == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine()
            }
            builder
                .append("NODEGROUP = ")
                .appendBuilder(emitIntegerLiteral(options.nodeGroup))
        })
        .scope(builder => {
            if (options.engine == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine()
            }
            builder
                .append("ENGINE = ")
                .appendBuilder(emitExpression(options.engine))
        })
        .scope(builder => {
            if (options.wait == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine()
            }
            builder
                .append(
                    options.wait.value ?
                    "WAIT" :
                    "NO_WAIT"
                )
        })
        .scope(builder => {
            if (options.comment == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine()
            }
            builder
                .append("COMMENT = ")
                .appendBuilder(emitStringLiteral(options.comment))
        })
        .scope(builder => {
            if (options.fileBlockSize == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine()
            }
            builder
                .append("FILE_BLOCK_SIZE = ")
                .appendBuilder(emitSizeNumber(options.fileBlockSize))
        })
}
