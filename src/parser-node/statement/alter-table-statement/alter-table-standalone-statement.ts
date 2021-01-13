import {TableIdentifier} from "../../identifier";
import {Node, ValueNode} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {AlterTableModifiers} from "./alter-table-modifier";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7857-L7858
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7868
 */
export interface AlterTableStandaloneStatement extends Node {
    syntaxKind : SyntaxKind.AlterTableStandaloneStatement,

    tableIdentifier : TableIdentifier,

    alterTableModifiers : AlterTableModifiers,

    alterTableItem : ValueNode<"DISCARD TABLESPACE"|"IMPORT TABLESPACE">,
}
