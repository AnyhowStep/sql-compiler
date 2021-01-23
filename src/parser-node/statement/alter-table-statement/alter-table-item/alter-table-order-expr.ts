import {ColumnIdentifier} from "../../../identifier";
import {Node} from "../../../node";
import {NodeArray2} from "../../../node-array";
import {SyntaxKind} from "../../../syntax-kind.generated";
import {OrderingDirection} from "../../select-statement";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10866
 */
export interface AlterTableOrderExpr extends Node {
    syntaxKind : SyntaxKind.AlterTableOrderExpr;

    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13001
     */
    expr : ColumnIdentifier;
    /**
     * Defaults to `ASC`
     */
    orderingDirection : OrderingDirection;
}

export interface AlterTableOrderExprList extends NodeArray2<SyntaxKind.AlterTableOrderExprList, AlterTableOrderExpr> {

}
