import {StringLiteral} from "../../expression";
import {AccountIdentifier, Identifier} from "../../identifier";
import {Node, ValueNode} from "../../node";
import {NodeArray2} from "../../node-array";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L14484
 */
export interface AlterGrantUser extends Node {
    syntaxKind : SyntaxKind.AlterGrantUser,

    accountIdentifier : AccountIdentifier,

    authenticationPlugin : Identifier|StringLiteral|undefined,

    identifiedByPasswordToken : ValueNode<"IDENTIFIED BY PASSWORD">|undefined,

    password : StringLiteral|undefined,
}

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L14471
 */
export interface AlterGrantUserList extends NodeArray2<SyntaxKind.AlterGrantUserList, AlterGrantUser> {

}
