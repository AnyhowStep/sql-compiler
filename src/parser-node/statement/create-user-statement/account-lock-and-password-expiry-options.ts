import {IntegerLiteral} from "../../expression";
import {Node, ValueNode} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7713
 */
export interface AccountLockAndPasswordExpiryOptions extends Node {
    syntaxKind : SyntaxKind.AccountLockAndPasswordExpiryOptions,

    /**
     * Defaults to `false`
     */
    accountLocked : boolean,

    /**
     * Defaults to `PASSWORD EXPIRE DEFAULT`
     *
     * + `PASSWORD EXPIRE`
     *   (user must choose a new password when they first connect)
     *
     * + `PASSWORD EXPIRE DEFAULT`
     *   (the global expiration policy applies, as specified by the `default_password_lifetime` system variable.)
     *
     * + `PASSWORD EXPIRE NEVER`
     *   (password never expires)
     *
     * + `PASSWORD EXPIRE INTERVAL N DAY`
     *   (password expires in `N` days)
     */
    passwordExpiry : ValueNode<"ON_FIRST_CONNECT"|"DEFAULT"|"NEVER">|IntegerLiteral,
}

export interface PartialAccountLockAndPasswordExpiryOptions extends Node {
    syntaxKind : SyntaxKind.PartialAccountLockAndPasswordExpiryOptions,

    accountLocked : boolean|undefined,

    passwordExpiry : ValueNode<"ON_FIRST_CONNECT"|"DEFAULT"|"NEVER">|IntegerLiteral|undefined,
}
