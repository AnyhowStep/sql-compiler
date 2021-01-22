import {DefaultCharacterSet} from "../../parser-node";
import {emitCharacterSetNameOrDefault} from "../identifier";
import {StringBuilder} from "../string-builder";

export function emitDefaultCharacterSet (node : DefaultCharacterSet) : StringBuilder {
    return new StringBuilder()
        .append("DEFAULT CHARACTER SET ")
        .appendBuilder(emitCharacterSetNameOrDefault(node.characterSetName))
}
