import {Expression} from "../../expression";
import {Interval} from "../../misc";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2468-L2476
 */
export interface IntervalSchedule extends Node {
    syntaxKind : SyntaxKind.IntervalSchedule,

    intervalExpr : Expression,
    interval : Interval,

    /**
     * @todo Defaults to `CURRENT_TIMESTAMP`
     */
    startsAt : Expression|undefined,


    endsAt : Expression|undefined,
}
