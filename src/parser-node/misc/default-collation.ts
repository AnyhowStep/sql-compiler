import {StringLiteral} from "../expression";
import {Identifier} from "../identifier";
import {Node, ValueNode} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6151
 */
export interface DefaultCollation extends Node {
    syntaxKind : SyntaxKind.DefaultCollation;
    collationName : Identifier|StringLiteral|ValueNode<"DEFAULT">;
}
