import {AlterUserStatement} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {
    emitPartialAccountLockAndPasswordExpiryOptions,
    emitGrantUserList,
    emitRateLimitOptions,
    emitRequiredEncryptedConnectionOptions,
} from "../create-user-statement";

export function emitAlterUserStatement (statement : AlterUserStatement) {
    return new StringBuilder()
        .append("ALTER USER")
        .append(
            statement.ifExists ?
            " IF EXISTS" :
            undefined
        )
        .indent(builder => {
            builder
                .appendBuilder(emitGrantUserList(statement.grantUserList))
        })
        .scope(builder => {
            if (statement.requiredEncryptedConnectionOptions == undefined) {
                return;
            }
            const requiredEncryptedConnectionOptions = emitRequiredEncryptedConnectionOptions(statement.requiredEncryptedConnectionOptions)
            builder.indent(builder => {
                builder
                    .appendBuilder(requiredEncryptedConnectionOptions)
            })
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
        .scope(builder => {
            const accountLockAndPasswordExpiryOptions = emitPartialAccountLockAndPasswordExpiryOptions(statement.accountLockAndPasswordExpiryOptions)
            if (accountLockAndPasswordExpiryOptions.isEmpty()) {
                return;
            }
            builder.indent(builder => {
                builder
                    .appendBuilder(accountLockAndPasswordExpiryOptions)
            })
        })
}
