import {Node, SyntaxKind} from "../../../../parser-node";
import {TableIdentifier} from "../../../identifier";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8274
 */
export interface AlterTableRenameTable extends Node {
    syntaxKind : SyntaxKind.AlterTableRenameTable,

    /**
     * You can actually move a table to a different schema
     * with this.
     *
     * https://stackoverflow.com/questions/15558461/move-table-from-one-database-to-another-in-mysql
     */
    newTableIdentifier : TableIdentifier,
}
