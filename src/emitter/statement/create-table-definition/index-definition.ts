import {IndexClass, IndexDefinition, IndexType, SortDirection} from "../../../parser-node";
import {emitExpression} from "../../expression";
import {emitIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";

export function emitIndexDefinition (def : IndexDefinition) : StringBuilder {
    return new StringBuilder()
        .scope(builder => {
            if (def.constraintName == undefined) {
                return;
            }
            builder
                .append("CONSTRAINT ")
                .appendBuilder(emitIdentifier(def.constraintName))
                .append(" ")
        })
        .append(
            def.indexClass == IndexClass.INDEX ?
            "INDEX" :
            def.indexClass == IndexClass.FULLTEXT ?
            "FULLTEXT INDEX" :
            def.indexClass == IndexClass.SPATIAL ?
            "SPATIAL INDEX" :
            "UNIQUE KEY"
        )
        .scope(builder => {
            if (def.indexName == undefined) {
                return;
            }
            builder
                .append(" ")
                .appendBuilder(emitIdentifier(def.indexName))
        })
        .append(" (")
        .loop(
            def.indexParts,
            builder => builder.append(", "),
            (builder, indexPart) => {
                builder
                    .appendBuilder(emitIdentifier(indexPart.columnName))
                    .scope(builder => {
                        if (indexPart.indexLength == undefined) {
                            return;
                        }
                        builder
                            .append("(")
                            .append(indexPart.indexLength.value.toString())
                            .append(")")
                    })
                    .append(
                        indexPart.sortDirection == SortDirection.ASC ?
                        " ASC" :
                        " DESC"
                    )
            }
        )
        .append(")")
        .scope(builder => {
            if (def.indexType == undefined) {
                return;
            }
            builder
                .append(" USING ")
                .append(
                    def.indexType == IndexType.BTREE ?
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
