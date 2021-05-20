import {field, seq, tokenSymbol, tokenSymbol2} from "../../grammar-builder";
import {SyntaxKind} from "../syntax-kind.generated";
import {TokenKind} from "../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10745
 */
export const intervalTimeStamp = tokenSymbol(
    TokenKind.DAY,
    TokenKind.WEEK,
    TokenKind.HOUR,
    TokenKind.MINUTE,
    TokenKind.MONTH,
    TokenKind.QUARTER,
    TokenKind.SECOND,
    TokenKind.MICROSECOND,
    TokenKind.YEAR,

    TokenKind.SQL_TSI_DAY,
    TokenKind.SQL_TSI_WEEK,
    TokenKind.SQL_TSI_HOUR,
    TokenKind.SQL_TSI_MINUTE,
    TokenKind.SQL_TSI_MONTH,
    TokenKind.SQL_TSI_QUARTER,
    TokenKind.SQL_TSI_SECOND,
    //For some reason, this does not exist.
    //TokenKind.SQL_TSI_MICROSECOND,
    TokenKind.SQL_TSI_YEAR,
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10730
 */
export const interval = tokenSymbol2(
    intervalTimeStamp,
    TokenKind.DAY_HOUR,
    TokenKind.DAY_MICROSECOND,
    TokenKind.DAY_MINUTE,
    TokenKind.DAY_SECOND,
    TokenKind.HOUR_MICROSECOND,
    TokenKind.HOUR_MINUTE,
    TokenKind.HOUR_SECOND,
    TokenKind.MINUTE_MICROSECOND,
    TokenKind.MINUTE_SECOND,
    TokenKind.SECOND_MICROSECOND,
    TokenKind.YEAR_MONTH,
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9424-L9428
 */
export const IntervalExpression = seq(
    field("intervalToken", TokenKind.INTERVAL),
    field("expression", SyntaxKind.Expression),
    field("temporalUnit", interval),
);
