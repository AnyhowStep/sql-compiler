import {TriggerIdentifier} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitQuotedIdentifier} from "./emit-quoted-identifier";

export function emitTriggerIdentifier (identifier : TriggerIdentifier) {
    if (identifier.schemaName == undefined) {
        return new StringBuilder()
            .append(emitQuotedIdentifier(identifier.triggerName.identifier));
    } else {
        return new StringBuilder()
            .append((
                emitQuotedIdentifier(identifier.schemaName.identifier) + "." +
                emitQuotedIdentifier(identifier.triggerName.identifier)
            ));
    }
}
