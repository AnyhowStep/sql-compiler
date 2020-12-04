import {ForeignKeyDefinition} from "../../../parser-node";
import {emitIdentifier, emitIdentifierList} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitForeignKeyReferenceDefinition} from "./foreign-key-reference-definition";

export function emitForeignKeyDefinition (def : ForeignKeyDefinition) : StringBuilder {
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
        .append("FOREIGN KEY")
        .scope(builder => {
            if (def.indexName == undefined) {
                return;
            }
            builder
                .append(" ")
                .appendBuilder(emitIdentifier(def.indexName))
        })
        .append(" ")
        .appendBuilder(emitIdentifierList(def.columns))
        .append(" ")
        .appendBuilder(emitForeignKeyReferenceDefinition(def.foreignKeyReferenceDefinition));
}
