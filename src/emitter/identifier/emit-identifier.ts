import {Identifier} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitQuotedIdentifier} from "./emit-quoted-identifier";

export function emitIdentifier (identifier : Identifier) : StringBuilder {
    return new StringBuilder()
        .append(emitQuotedIdentifier(identifier.identifier));
}
