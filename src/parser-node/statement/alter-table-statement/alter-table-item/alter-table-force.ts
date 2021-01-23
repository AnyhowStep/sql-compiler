import {Node, SyntaxKind} from "../../../../parser-node";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8345
 *
 * > `ALTER TABLE tbl_name ENGINE=INNODB` and `ALTER TABLE tbl_name FORCE` use online DDL.
 *
 * https://dev.mysql.com/doc/refman/5.7/en/innodb-online-ddl.html
 *
 */
export interface AlterTableForce extends Node {
    syntaxKind : SyntaxKind.AlterTableForce,
}
