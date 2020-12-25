import {Expression} from "../../expression";
import {Node, ValueNode} from "../../node";
import {NodeArray2} from "../../node-array";
import {SortDirection} from "../../sort-direction";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12980
 */
export interface GroupingExpr extends Node {
    syntaxKind : SyntaxKind.GroupingExpr,

    expr : Expression,
    /**
     * This is deprecated
     */
    sortDirection : ValueNode<SortDirection>|undefined,
}

export interface GroupingExprList extends NodeArray2<SyntaxKind.GroupingExprList, GroupingExpr> {

}
