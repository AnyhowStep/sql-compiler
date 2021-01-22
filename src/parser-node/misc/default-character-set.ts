import {StringLiteral} from "../expression";
import {Identifier} from "../identifier";
import {Node, ValueNode} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7028
 */
export interface DefaultCharacterSet extends Node {
    syntaxKind : SyntaxKind.DefaultCharacterSet;
    /**
     * keyword `BINARY` is allowed here.
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7016
     */
    characterSetName : Identifier|StringLiteral|ValueNode<"DEFAULT">,
}
