import {AccountLockAndPasswordExpiryOptions, SyntaxKind} from "../../../parser-node";
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
