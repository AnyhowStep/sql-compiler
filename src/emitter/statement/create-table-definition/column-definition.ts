import {ColumnDefinition, ColumnFormat, Storage} from "../../../parser-node";
import {emitDataType} from "../../data-type";
import {emitExpression} from "../../expression";
import {emitQuotedIdentifier} from "../../identifier";
import {emitCurrentTimestamp} from "../../misc";
import {StringBuilder} from "../../string-builder";
import {emitCheckDefinition} from "./check-definition";
import {emitForeignKeyReferenceDefinition} from "./foreign-key-reference-definition";
import {emitGeneratedDefinition} from "./generated-definition";

export function emitColumnDefinition (def : ColumnDefinition) : StringBuilder {
    return new StringBuilder()
        .append(emitQuotedIdentifier(def.columnIdentifier.columnName.identifier))
        .append(" ")
        .appendBuilder(emitDataType(def.dataType))
        .scope(builder => {
            if (def.generated == undefined) {
                return;
            }
            builder
                .append(" ")
                .appendBuilder(emitGeneratedDefinition(def.generated));
        })
        .append(
            def.nullable == undefined || def.nullable.nullable ?
            " NULL" :
            " NOT NULL"
        )
        .scope(builder => {
            if (!def.autoIncrement) {
                return;
            }
            builder.append(" AUTO_INCREMENT")
        })
        .scope(builder => {
            if (!def.uniqueKey) {
                return;
            }
            builder.append(" UNIQUE KEY")
        })
        .scope(builder => {
            if (!def.primaryKey) {
                return;
            }
            builder.append(" PRIMARY KEY")
        })
        .scope(builder => {
            if (def.columnFormat == undefined) {
                return;
            }
            builder.indent(builder => {
                builder.append(
                    def.columnFormat == ColumnFormat.FIXED ?
                    "COLUMN_FORMAT FIXED" :
                    def.columnFormat == ColumnFormat.DYNAMIC ?
                    "COLUMN_FORMAT DYNAMIC" :
                    "COLUMN_FORMAT DEFAULT"
                )
            })
        })
        .scope(builder => {
            if (def.storage == undefined) {
                return;
            }
            builder.indent(builder => {
                builder.append(
                    def.storage == Storage.DISK ?
                    "STORAGE DISK" :
                    def.storage == Storage.MEMORY ?
                    "STORAGE MEMORY" :
                    "STORAGE DEFAULT"
                )
            })
        })
        .scope(builder => {
            if (def.defaultValue == undefined) {
                return;
            }
            const defaultValue = emitExpression(def.defaultValue);
            builder.indent(builder => {
                builder
                    .append("DEFAULT ")
                    .appendBuilder(defaultValue);
            })
        })
        .scope(builder => {
            if (def.onUpdate == undefined) {
                return;
            }
            const onUpdate = emitCurrentTimestamp(def.onUpdate);
            builder.indent(builder => {
                builder
                    .append("ON UPDATE ")
                    .appendBuilder(onUpdate);
            })
        })
        .scope(builder => {
            if (def.comment == undefined) {
                return;
            }
            const comment = emitExpression(def.comment);
            builder.indent(builder => {
                builder
                    .append("COMMENT ")
                    .appendBuilder(comment);
            })
        })
        //This should be at the end
        .scope(builder => {
            if (def.checkDefinition == undefined) {
                return;
            }
            const checkDefinition = emitCheckDefinition(def.checkDefinition);
            builder.indent(builder => {
                builder.appendBuilder(checkDefinition);
            })
        })
        //This should be at the end
        .scope(builder => {
            if (def.foreignKeyReferenceDefinition == undefined) {
                return;
            }
            const foreignKeyReferenceDefinition = emitForeignKeyReferenceDefinition(def.foreignKeyReferenceDefinition);
            builder.indent(builder => {
                builder.appendBuilder(foreignKeyReferenceDefinition);
            })
        })
}
