import {Node, ValueNode} from "../../node";
import {NodeArray2} from "../../node-array";
import {SyntaxKind} from "../../syntax-kind.generated";
import {GroupingExpr} from "./grouping-expr";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10835
 */
export enum OlapOption {
    /**
     * Unimplemented in 5.7
     */
    WITH_CUBE,
    WITH_ROLLUP,
}

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10812
 */
export interface GroupByClause extends Node {
    syntaxKind : SyntaxKind.GroupByClause,

    groupingExprs : NodeArray2<SyntaxKind.GroupingExprList, GroupingExpr>,

    olapOption : ValueNode<OlapOption>|undefined,
}
