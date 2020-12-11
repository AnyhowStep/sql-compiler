import {Expression} from "../../expression";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

export enum OrderingDirection {
    ASC,
    DESC,
}

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12973
 */
export interface OrderExpr extends Node {
    syntaxKind : SyntaxKind.OrderExpr;

    expr : Expression;
    /**
     * Defaults to `ASC`
     */
    orderingDirection : OrderingDirection;
}
