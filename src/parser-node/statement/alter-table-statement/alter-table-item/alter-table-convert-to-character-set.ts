import {Node, ValueNode} from "../../../node";
import {SyntaxKind} from "../../../syntax-kind.generated";
import {StringLiteral} from "../../../expression";
import {Identifier} from "../../../identifier";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8314
 */
export interface AlterTableConvertToCharacterSet extends Node {
    syntaxKind : SyntaxKind.AlterTableConvertToCharacterSet,

    characterSetName : StringLiteral|Identifier|ValueNode<"DEFAULT">;
    collationName : StringLiteral|Identifier|ValueNode<"DEFAULT">|undefined;
}
