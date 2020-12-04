import {CheckDefinition} from "../../../parser-node";
import {emitExpression} from "../../expression";
import {emitIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";

export function emitCheckDefinition (def : CheckDefinition) : StringBuilder {
    return new StringBuilder()
        .scope(builder => {
            if (def.constraintName == undefined) {
                return;
            }
            builder
                .append("CONSTRAINT ")
                .appendBuilder(emitIdentifier(def.constraintName))
                .append(" ");
        })
        .append("CHECK (")
        .appendBuilder(emitExpression(def.expr))
        .append(")");
}
