import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10730
 */
export enum IntervalType {
    DAY,
    WEEK,
    HOUR,
    MINUTE,
    MONTH,
    QUARTER,
    SECOND,
    MICROSECOND,
    YEAR,

    DAY_HOUR,
    DAY_MICROSECOND,
    DAY_MINUTE,
    DAY_SECOND,

    HOUR_MICROSECOND,
    HOUR_MINUTE,
    HOUR_SECOND,

    MINUTE_MICROSECOND,
    MINUTE_SECOND,

    SECOND_MICROSECOND,

    YEAR_MONTH,
}

export interface Interval extends Node {
    syntaxKind : SyntaxKind.Interval,

    intervalType : IntervalType,
}
