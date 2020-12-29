import {StringLiteral} from "../../expression";
import {AccountIdentifier, Identifier} from "../../identifier";
import {Node, ValueNode} from "../../node";
import {NodeArray2} from "../../node-array";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L14484
 */
export interface GrantUser extends Node {
    syntaxKind : SyntaxKind.GrantUser,

    accountIdentifier : AccountIdentifier,

    /**
     * Defaults to `undefined`
     *
     * > the default plugin is indicated by the value of the `default_authentication_plugin` system variable.
     */
    authenticationPlugin : Identifier|StringLiteral|undefined,

    identifiedByPasswordToken : ValueNode<"IDENTIFIED BY PASSWORD">|undefined,
    /**
     * Defaults to empty string
     */
    password : StringLiteral,
}

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L14471
 */
export interface GrantUserList extends NodeArray2<SyntaxKind.GrantUserList, GrantUser> {

}
