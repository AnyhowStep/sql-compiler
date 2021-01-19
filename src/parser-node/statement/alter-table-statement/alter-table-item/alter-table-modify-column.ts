import {Node, SyntaxKind} from "../../../../parser-node";
import {Identifier} from "../../../identifier";
import {ValueNode} from "../../../node";
import {ColumnDefinition} from "../../create-table-definition";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8181-L8204
 *
 * + You can rename a column with `CHANGE COLUMN`
 * + You cannot rename a column with `MODIFY COLUMN`
 */
export interface AlterTableModifyColumn extends Node {
    syntaxKind : SyntaxKind.AlterTableModifyColumn,

    /**
     * `checkDefinition` and `foreignKeyReferenceDefinition` cannot be specified.
     */
    columnDefinition : ColumnDefinition,

    placeAfter : ValueNode<"FIRST">|Identifier|undefined,
}
