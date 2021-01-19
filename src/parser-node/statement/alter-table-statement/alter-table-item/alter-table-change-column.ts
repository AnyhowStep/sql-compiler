import {Node, SyntaxKind} from "../../../../parser-node";
import {ColumnIdentifier, Identifier} from "../../../identifier";
import {ValueNode} from "../../../node";
import {ColumnDefinition} from "../../create-table-definition";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8171-L8177
 */
export interface AlterTableChangeColumn extends Node {
    syntaxKind : SyntaxKind.AlterTableChangeColumn,

    oldColumnIdentifier : ColumnIdentifier;

    /**
     * `checkDefinition` and `foreignKeyReferenceDefinition` cannot be specified.
     */
    columnDefinition : ColumnDefinition,

    placeAfter : ValueNode<"FIRST">|Identifier|undefined,
}
