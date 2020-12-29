import {CreateUserStatement} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {emitAccountLockAndPasswordExpiryOptions} from "./account-lock-and-password-expiry-options";
import {emitGrantUserList} from "./grant-user";
import {emitRateLimitOptions} from "./rate-limit-options";
import {emitRequiredEncryptedConnectionOptions} from "./required-encrypted-connection-options";

export function emitCreateUserStatement (statement : CreateUserStatement) {
    return new StringBuilder()
        .append("CREATE USER")
        .append(
            statement.ifNotExists ?
            " IF NOT EXISTS" :
            undefined
        )
        .indent(builder => {
            builder
                .appendBuilder(emitGrantUserList(statement.grantUserList))
        })
        .indent(builder => {
            builder
                .appendBuilder(emitRequiredEncryptedConnectionOptions(statement.requiredEncryptedConnectionOptions))
        })
        .scope(builder => {
            const rateLimitOptions = emitRateLimitOptions(statement.rateLimitOptions)
            if (rateLimitOptions.isEmpty()) {
                return;
            }
            builder.indent(builder => {
                builder.appendBuilder(rateLimitOptions)
            })
        })
        .indent(builder => {
            builder
                .appendBuilder(emitAccountLockAndPasswordExpiryOptions(statement.accountLockAndPasswordExpiryOptions))
        })
}
