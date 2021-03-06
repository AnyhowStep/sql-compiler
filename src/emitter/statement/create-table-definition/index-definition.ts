import {IndexClass, IndexDefinition} from "../../../parser-node";
import {emitIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitIndexDefinitionOptions} from "./index-definition-options";
import {emitIndexParts} from "./index-parts";

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
        .append(" ")
        .appendBuilder(emitIndexParts(def.indexParts))
        .appendBuilder(emitIndexDefinitionOptions(def));
}
