import {AccountIdentifier, AccountIdentifierOrCurrentUser, SyntaxKind} from "../../parser-node";
import {emitExpression, emitUserVariableIdentifier} from "../expression";
import {StringBuilder} from "../string-builder";

export function emitAccountIdentifier (identifier : AccountIdentifier) {
    return new StringBuilder()
        .appendBuilder(emitExpression(identifier.userName))
        .appendBuilder(emitUserVariableIdentifier(identifier.hostName))
}

export function emitAccountIdentifierOrCurrentUser (identifier : AccountIdentifierOrCurrentUser) {
    if (identifier.syntaxKind == SyntaxKind.AccountIdentifier) {
        return emitAccountIdentifier(identifier);
    } else {
        return new StringBuilder().append("CURRENT_USER()");
    }
}
