import {DefaultCharacterSet} from "../../parser-node";
import {emitIdentifier} from "../identifier";
import {StringBuilder} from "../string-builder";

export function emitDefaultCharacterSet (node : DefaultCharacterSet) : StringBuilder {
    return new StringBuilder()
        .append("DEFAULT CHARACTER SET")
        .scope(builder => {
            if (node.characterSetName == undefined) {
                builder.append(" DEFAULT");
            } else {
                builder
                    .append(" ")
                    .appendBuilder(emitIdentifier(node.characterSetName));
            }
        });
}
