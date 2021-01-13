import {TableIdentifier} from "../../identifier";
import {Node, ValueNode} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {Partition} from "../partition";
import {AlterTableItemOrModifierList} from "./alter-table-item-or-modifier-list";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7497
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7854-L7856
 *
 * https://dev.mysql.com/doc/refman/5.7/en/alter-table.html
 */
export interface AlterTableStatement extends Node {
    syntaxKind : SyntaxKind.AlterTableStatement,

    tableIdentifier : TableIdentifier,

    alterTableItemOrModifierList : AlterTableItemOrModifierList,

    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7854-L7856
     *
     * `REMOVE PARTITIONING`
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8039
     */
    partition : Partition|ValueNode<"REMOVE PARTITIONING">|undefined,
}
