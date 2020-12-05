import {
    CreateTableOptions,
    InsertMethod,
    PackKeys,
    RowFormat,
    StatsAutoRecalc,
    StatsPersistent,
    SyntaxKind,
} from "../../../parser-node";
import {emitExpression} from "../../expression";
import {emitTableIdentifierList} from "../../identifier";
import {emitDefaultCharacterSet, emitDefaultCollation} from "../../misc";
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
        .scope(builder => {
            if (options.autoIncrement == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine();
            }
            builder
                .append("AUTO_INCREMENT = ")
                .appendBuilder(emitExpression(options.autoIncrement))
        })
        .scope(builder => {
            if (options.packKeys == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine();
            }
            builder
                .append("PACK_KEYS = ")
                .append(
                    options.packKeys == PackKeys._0 ?
                    "0" :
                    options.packKeys == PackKeys._1 ?
                    "1" :
                    "DEFAULT"
                )
        })
        .scope(builder => {
            if (options.statsAutoRecalc == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine();
            }
            builder
                .append("STATS_AUTO_RECALC = ")
                .append(
                    options.statsAutoRecalc == StatsAutoRecalc._0 ?
                    "0" :
                    options.statsAutoRecalc == StatsAutoRecalc._1 ?
                    "1" :
                    "DEFAULT"
                )
        })
        .scope(builder => {
            if (options.statsPersistent == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine();
            }
            builder
                .append("STATS_PERSISTENT = ")
                .append(
                    options.statsPersistent == StatsPersistent._0 ?
                    "0" :
                    options.statsPersistent == StatsPersistent._1 ?
                    "1" :
                    "DEFAULT"
                )
        })
        .scope(builder => {
            if (options.statsSamplePages == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine();
            }
            builder
                .append("STATS_SAMPLE_PAGES = ")

            if (options.statsSamplePages.syntaxKind == SyntaxKind.IntegerLiteral) {
                builder.appendBuilder(emitExpression(options.statsSamplePages))
            } else {
                builder.append("DEFAULT")
            }
        })
        .scope(builder => {
            if (options.checksum == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine();
            }
            builder
                .append("CHECKSUM = ")
                .append(options.checksum ? "1" : "0")
        })
        .scope(builder => {
            if (options.delayKeyWrite == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine();
            }
            builder
                .append("DELAY_KEY_WRITE = ")
                .append(options.delayKeyWrite ? "1" : "0")
        })
        .scope(builder => {
            if (options.rowFormat == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine();
            }
            builder
                .append("ROW_FORMAT = ")
                .append(
                    options.rowFormat == RowFormat.FIXED ?
                    "FIXED" :
                    options.rowFormat == RowFormat.DYNAMIC ?
                    "DYNAMIC" :
                    options.rowFormat == RowFormat.COMPRESSED ?
                    "COMPRESSED" :
                    options.rowFormat == RowFormat.REDUNDANT ?
                    "REDUNDANT" :
                    options.rowFormat == RowFormat.COMPACT ?
                    "COMPACT" :
                    "DEFAULT"
                )
        })
        .scope(builder => {
            if (options.union == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine();
            }
            builder
                .append("UNION = ")
                .appendBuilder(emitTableIdentifierList(options.union))
        })
        .scope(builder => {
            if (options.defaultCharacterSet == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine();
            }
            builder
                .appendBuilder(emitDefaultCharacterSet(options.defaultCharacterSet))
        })
        .scope(builder => {
            if (options.defaultCollation == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine();
            }
            builder
                .appendBuilder(emitDefaultCollation(options.defaultCollation))
        })
        .scope(builder => {
            if (options.insertMethod == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine();
            }
            builder
                .append("INSERT_METHOD = ")
                .append(
                    options.insertMethod == InsertMethod.FIRST ?
                    "FIRST" :
                    options.insertMethod == InsertMethod.LAST ?
                    "LAST" :
                    "NO"
                )
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
}
