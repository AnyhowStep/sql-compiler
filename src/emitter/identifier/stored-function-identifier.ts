import {StoredFunctionIdentifier} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitQuotedIdentifier} from "./emit-quoted-identifier";

export function emitStoredFunctionIdentifier (identifier : StoredFunctionIdentifier) {
    if (identifier.schemaName == undefined) {
        return new StringBuilder()
            .append(emitQuotedIdentifier(identifier.storedFunctionName.identifier));
    } else {
        return new StringBuilder()
            .append((
                emitQuotedIdentifier(identifier.schemaName.identifier) + "." +
                emitQuotedIdentifier(identifier.storedFunctionName.identifier)
            ));
    }
}
