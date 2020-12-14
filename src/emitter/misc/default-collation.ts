import {DefaultCollation} from "../../parser-node";
import {emitExpression} from "../expression";
import {StringBuilder} from "../string-builder";

export function emitDefaultCollation (node : DefaultCollation) : StringBuilder {
    return new StringBuilder()
        .append("DEFAULT COLLATE")
        .scope(builder => {
            if (node.collationName == undefined) {
                builder.append(" DEFAULT");
            } else {
                builder
                    .append(" ")
                    .appendBuilder(emitExpression(node.collationName));
            }
        });
}
