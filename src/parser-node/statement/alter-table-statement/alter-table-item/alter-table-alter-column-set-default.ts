import {Node, SyntaxKind} from "../../../../parser-node";
import {Expression} from "../../../expression";
import {ColumnIdentifier} from "../../../identifier";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8256
 */
export interface AlterTableAlterColumnSetDefault extends Node {
    syntaxKind : SyntaxKind.AlterTableAlterColumnSetDefault,

    columnIdentifier : ColumnIdentifier,

    /**
     * @todo Only allow literals using a linter?
     */
    expr : Expression,
}
