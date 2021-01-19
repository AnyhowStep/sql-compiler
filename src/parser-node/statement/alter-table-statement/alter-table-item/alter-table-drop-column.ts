import {Node, SyntaxKind} from "../../../../parser-node";
import {ColumnIdentifier} from "../../../identifier";
import {ValueNode} from "../../../node";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8208
 */
export interface AlterTableDropColumn extends Node {
    syntaxKind : SyntaxKind.AlterTableDropColumn,

    columnIdentifier : ColumnIdentifier;

    /**
     * @todo Figure out what this really does.
     *
     * It is not part of the documentation,
     * https://dev.mysql.com/doc/refman/5.7/en/alter-table.html#alter-table-add-drop-column
     */
    dropMode : ValueNode<"RESTRICT"|"CASCADE">|undefined;
}
