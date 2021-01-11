import {IndexDefinition, IndexType} from "../../../parser-node";
import {emitExpression} from "../../expression";
import {emitIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";

export function emitIndexDefinitionOptions (
    def : Pick<
        IndexDefinition,
        | "indexType"
        | "keyBlockSize"
        | "comment"
        | "withParser"
    >
) : StringBuilder {
    return new StringBuilder()
        .scope(builder => {
            if (def.indexType == undefined) {
                return;
            }
            builder
                .append(" USING ")
                .append(
                    def.indexType.value == IndexType.BTREE ?
                    "BTREE" :
                    "HASH"
                )
        })
        .scope(builder => {
            if (def.keyBlockSize == undefined) {
                return;
            }
            builder
                .append(" KEY_BLOCK_SIZE = ")
                .append(def.keyBlockSize.value.toString())
        })
        .scope(builder => {
            if (def.comment == undefined) {
                return;
            }
            builder
                .append(" COMMENT ")
                .appendBuilder(emitExpression(def.comment));
        })
        .scope(builder => {
            if (def.withParser == undefined) {
                return;
            }
            builder
                .append(" WITH PARSER ")
                .appendBuilder(emitIdentifier(def.withParser))
        });
}

export function emitIndexDefinitionOptionsMultiLine (
    def : Pick<
        IndexDefinition,
        | "indexType"
        | "keyBlockSize"
        | "comment"
        | "withParser"
    >
) : StringBuilder {
    return new StringBuilder()
        .scope(builder => {
            if (def.indexType == undefined) {
                return;
            }
            builder
                .appendNewLine()
                .append("USING ")
                .append(
                    def.indexType.value == IndexType.BTREE ?
                    "BTREE" :
                    "HASH"
                )
        })
        .scope(builder => {
            if (def.keyBlockSize == undefined) {
                return;
            }
            builder
                .appendNewLine()
                .append("KEY_BLOCK_SIZE = ")
                .append(def.keyBlockSize.value.toString())
        })
        .scope(builder => {
            if (def.comment == undefined) {
                return;
            }
            builder
                .appendNewLine()
                .append("COMMENT ")
                .appendBuilder(emitExpression(def.comment));
        })
        .scope(builder => {
            if (def.withParser == undefined) {
                return;
            }
            builder
                .appendNewLine()
                .append("WITH PARSER ")
                .appendBuilder(emitIdentifier(def.withParser))
        });
}
