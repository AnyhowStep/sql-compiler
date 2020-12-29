import {Node, ValueNode} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {AccountLockAndPasswordExpiryOptions} from "./account-lock-and-password-expiry-options";
import {GrantUserList} from "./grant-user";
import {RateLimitOptions} from "./rate-limit-options";
import {RequiredEncryptedConnectionOptions} from "./required-encrypted-connection-options";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2368
 */
export interface CreateUserStatement extends Node {
    syntaxKind : SyntaxKind.CreateUserStatement,

    ifNotExists : boolean,

    grantUserList : GrantUserList,

    /**
     * Defaults to `NONE`
     *
     * https://dev.mysql.com/doc/refman/5.7/en/create-user.html
     * https://dev.mysql.com/doc/refman/5.7/en/encrypted-connections.html
     *
     * > To specify SSL/TLS-related options for a MySQL account,
     * > use a `REQUIRE` clause that specifies one or more `tls_option` values.
     *
     * > Order of `REQUIRE` options does not matter,
     * > but no option can be specified twice.
     * > The `AND` keyword is optional between `REQUIRE` options.
     */
    requiredEncryptedConnectionOptions : ValueNode<"SSL"|"X509"|"NONE">|RequiredEncryptedConnectionOptions,

    rateLimitOptions : RateLimitOptions,

    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7723
     */
    accountLockAndPasswordExpiryOptions : AccountLockAndPasswordExpiryOptions,
}
