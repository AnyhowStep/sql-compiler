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
        .append(
            def.autoIncrement ?
            " AUTO_INCREMENT" :
            undefined
        )
        .append(
            def.columnFormat == undefined ?
            undefined :
            def.columnFormat == ColumnFormat.FIXED ?
            " COLUMN_FORMAT FIXED" :
            def.columnFormat == ColumnFormat.DYNAMIC ?
            " COLUMN_FORMAT DYNAMIC" :
            " COLUMN_FORMAT DEFAULT"
        )
        .append(
            def.storage == undefined ?
            undefined :
            def.storage == Storage.DISK ?
            " STORAGE DISK" :
            def.storage == Storage.MEMORY ?
            " STORAGE MEMORY" :
            " STORAGE DEFAULT"
        )
        .scope(builder => {
            if (def.defaultValue == undefined) {
                return;
            }
            builder
                .append(" DEFAULT ")
                .appendBuilder(emitExpression(def.defaultValue));
        })
        .scope(builder => {
            if (def.onUpdate == undefined) {
                return;
            }
            builder
                .append(" ON UPDATE ")
                .appendBuilder(emitCurrentTimestamp(def.onUpdate));
        })
        .append(
            def.uniqueKey ?
            " UNIQUE KEY" :
            undefined
        )
        .append(
            def.primaryKey ?
            " PRIMARY KEY" :
            undefined
        )
        .scope(builder => {
            if (def.comment == undefined) {
                return;
            }
            builder
                .append(" COMMENT ")
                .appendBuilder(emitExpression(def.comment));
        })
        //This should be at the end
        .scope(builder => {
            if (def.checkDefinition == undefined) {
                return;
            }
            builder
                .append(" ")
                .appendBuilder(emitCheckDefinition(def.checkDefinition));
        })
        //This should be at the end
        .scope(builder => {
            if (def.foreignKeyReferenceDefinition == undefined) {
                return;
            }
            builder
                .append(" ")
                .appendBuilder(emitForeignKeyReferenceDefinition(def.foreignKeyReferenceDefinition));
        })
}
