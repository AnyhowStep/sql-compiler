import {AccountLockAndPasswordExpiryOptions, PartialAccountLockAndPasswordExpiryOptions, SyntaxKind} from "../../../parser-node";
import {emitIntegerLiteral} from "../../expression";
import {StringBuilder} from "../../string-builder";

export function emitAccountLockAndPasswordExpiryOptions (options : AccountLockAndPasswordExpiryOptions) {
    return new StringBuilder()
        .append(
            options.accountLocked ?
            "ACCOUNT LOCK" :
            "ACCOUNT UNLOCK"
        )
        .appendNewLine()
        .scope(builder => {
            if (options.passwordExpiry.syntaxKind == SyntaxKind.Value) {
                builder
                    .append(
                        options.passwordExpiry.value == "ON_FIRST_CONNECT" ?
                        "PASSWORD EXPIRE" :
                        options.passwordExpiry.value == "NEVER" ?
                        "PASSWORD EXPIRE NEVER" :
                        "PASSWORD EXPIRE DEFAULT"
                    );
                return;
            }

            builder
                .append("PASSWORD EXPIRE INTERVAL ")
                .appendBuilder(emitIntegerLiteral(options.passwordExpiry))
                .append(" DAY")
        })
}

export function emitPartialAccountLockAndPasswordExpiryOptions (options : PartialAccountLockAndPasswordExpiryOptions) {
    return new StringBuilder()
        .append(
            options.accountLocked == undefined ?
            undefined :
            options.accountLocked ?
            "ACCOUNT LOCK" :
            "ACCOUNT UNLOCK"
        )
        .scope(builder => {
            if (options.passwordExpiry == undefined) {
                return;
            }

            if (!builder.isEmpty()) {
                builder.appendNewLine()
            }

            if (options.passwordExpiry.syntaxKind == SyntaxKind.Value) {
                builder
                    .append(
                        options.passwordExpiry.value == "ON_FIRST_CONNECT" ?
                        "PASSWORD EXPIRE" :
                        options.passwordExpiry.value == "NEVER" ?
                        "PASSWORD EXPIRE NEVER" :
                        "PASSWORD EXPIRE DEFAULT"
                    );
                return;
            }

            builder
                .append("PASSWORD EXPIRE INTERVAL ")
                .appendBuilder(emitIntegerLiteral(options.passwordExpiry))
                .append(" DAY")
        })
}
