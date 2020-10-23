import {DefaultCollation} from "../../parser-node";
import {emitIdentifier} from "../identifier";
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
                    .appendBuilder(emitIdentifier(node.collationName));
            }
        });
}
