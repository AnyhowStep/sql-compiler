import {Node, ValueNode} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {PartialAccountLockAndPasswordExpiryOptions, PartialRateLimitOptions, RequiredEncryptedConnectionOptions} from "../create-user-statement";
import {AlterGrantUserList} from "./alter-grant-user";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/alter-user.html
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7692
 */
export interface AlterUserStatement extends Node {
    syntaxKind : SyntaxKind.AlterUserStatement,

    ifExists : boolean,

    grantUserList : AlterGrantUserList,

    requiredEncryptedConnectionOptions : ValueNode<"SSL"|"X509"|"NONE">|RequiredEncryptedConnectionOptions|undefined,

    rateLimitOptions : PartialRateLimitOptions,

    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7723
     */
    accountLockAndPasswordExpiryOptions : PartialAccountLockAndPasswordExpiryOptions,
}
