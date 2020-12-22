import {StringLiteral, UserVariableIdentifier} from "../expression";
import {Node, ValueNode} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";
import {Identifier} from "./identifier";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13248
 */
export interface AccountIdentifier extends Node {
    syntaxKind : SyntaxKind.AccountIdentifier,

    userName : Identifier|StringLiteral,
    /**
     * Defaults to `@'%'`
     */
    hostName : UserVariableIdentifier,
}

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13248
 */
export type AccountIdentifierOrCurrentUser =
    | AccountIdentifier
    | ValueNode<"CURRENT_USER">
;
