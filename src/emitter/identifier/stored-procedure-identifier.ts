import {StoredProcedureIdentifier} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitQuotedIdentifier} from "./emit-quoted-identifier";

export function emitStoredProcedureIdentifier (identifier : StoredProcedureIdentifier) {
    if (identifier.schemaName == undefined) {
        return new StringBuilder()
            .append(emitQuotedIdentifier(identifier.storedProcedureName.identifier));
    } else {
        return new StringBuilder()
            .append((
                emitQuotedIdentifier(identifier.schemaName.identifier) + "." +
                emitQuotedIdentifier(identifier.storedProcedureName.identifier)
            ));
    }
}
