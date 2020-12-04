import {ForeignKeyReferenceDefinition, ReferenceMatch, ReferenceOption} from "../../../parser-node";
import {emitIdentifier, emitTableIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";

function referenceOptionToString (referenceOption : ReferenceOption) : string {
    switch (referenceOption) {
        case ReferenceOption.RESTRICT:
            return "RESTRICT";
        case ReferenceOption.CASCADE:
            return "CASCADE";
        case ReferenceOption.SET_NULL:
            return "SET NULL";
        case ReferenceOption.NO_ACTION:
            return "NO ACTION";
        case ReferenceOption.SET_DEFAULT:
            return "SET DEFAULT";
    }
}

export function emitForeignKeyReferenceDefinition (def : ForeignKeyReferenceDefinition) : StringBuilder {
    return new StringBuilder()
        .append("REFERENCES ")
        .appendBuilder(emitTableIdentifier(def.referencedTableName))
        .append(" (")
        .loop(
            def.referencedColumns,
            builder => builder.append(", "),
            (builder, identifier) => builder.appendBuilder(emitIdentifier(identifier))
        )
        .append(")")
        .scope(builder => {
            if (def.match == undefined) {
                return;
            }
            builder
                .append(" MATCH")
                .append(
                    def.match == ReferenceMatch.FULL ?
                    " FULL" :
                    def.match == ReferenceMatch.PARTIAL ?
                    " PARTIAL" :
                    " SIMPLE"
                );
        })
        .scope(builder => {
            if (def.onUpdate == undefined) {
                return;
            }
            builder
                .append(" ON UPDATE ")
                .append(referenceOptionToString(def.onUpdate));
        })
        .scope(builder => {
            if (def.onDelete == undefined) {
                return;
            }
            builder
                .append(" ON DELETE ")
                .append(referenceOptionToString(def.onDelete));
        });
}
