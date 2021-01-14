import {Identifier} from "../../../identifier";
import {Node, ValueNode} from "../../../node";
import {SyntaxKind} from "../../../syntax-kind.generated";
import {ColumnDefinition} from "../../create-table-definition";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8161
 */
export interface AlterTableAddColumn extends Node {
    syntaxKind : SyntaxKind.AlterTableAddColumn,

    columnDefinition : ColumnDefinition,

    placeAfter : ValueNode<"FIRST">|Identifier|undefined,
}
