import {PrimaryKeyDefinition} from "../../../parser-node";
import {emitIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitIndexDefinitionOptions} from "./index-definition-options";
import {emitIndexParts} from "./index-parts";

export function emitPrimaryKeyDefinition (def : PrimaryKeyDefinition) : StringBuilder {
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
        .append("PRIMARY KEY")
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
