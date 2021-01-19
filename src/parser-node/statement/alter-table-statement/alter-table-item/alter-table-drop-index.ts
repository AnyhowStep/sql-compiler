import {Node, SyntaxKind} from "../../../../parser-node";
import {ColumnIdentifier} from "../../../identifier";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8235
 */
export interface AlterTableDropIndex extends Node {
    syntaxKind : SyntaxKind.AlterTableDropIndex,

    /**
     * @todo Implement `IndexIdentifier`?
     */
    indexIdentifier : ColumnIdentifier;
}
