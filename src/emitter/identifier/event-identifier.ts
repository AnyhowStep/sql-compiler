import {EventIdentifier} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitQuotedIdentifier} from "./emit-quoted-identifier";

export function emitEventIdentifier (identifier : EventIdentifier) {
    if (identifier.schemaName == undefined) {
        return new StringBuilder()
            .append(emitQuotedIdentifier(identifier.eventName.identifier));
    } else {
        return new StringBuilder()
            .append((
                emitQuotedIdentifier(identifier.schemaName.identifier) + "." +
                emitQuotedIdentifier(identifier.eventName.identifier)
            ));
    }
}
