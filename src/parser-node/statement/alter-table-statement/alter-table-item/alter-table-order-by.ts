import {Node, SyntaxKind} from "../../../../parser-node";
import {AlterTableOrderExprList} from "./alter-table-order-expr";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8349
 *
 * https://dev.mysql.com/doc/refman/5.7/en/alter-table.html#:~:text=This%20clause%20should%20be%20given%20last%20after%20any%20other%20clauses.
 *
 * > This clause should be given last after any other clauses.
 *
 * > ORDER BY does not make sense for InnoDB tables because InnoDB always orders table rows according to the clustered index.
 */
export interface AlterTableOrderBy extends Node {
    syntaxKind : SyntaxKind.AlterTableOrderBy,

    alterTableOrderExprList : AlterTableOrderExprList,
}
