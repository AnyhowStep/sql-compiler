import {Node, SyntaxKind} from "../../../../parser-node";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8244
 */
export interface AlterTableDisableKeys extends Node {
    syntaxKind : SyntaxKind.AlterTableDisableKeys,
}
