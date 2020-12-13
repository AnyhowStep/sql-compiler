import {Node, ValueNode} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TableReferenceList} from "./table-reference-list";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9122
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9131
 */
export interface FromClause extends Node {
    syntaxKind : SyntaxKind.FromClause,

    tableReferenceList : TableReferenceList|ValueNode<"DUAL">
}
