import {cannotExpect, choice, field, inline, seq, tokenSymbol} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

export const AggregateFunctionCall = inline(choice(
    SyntaxKind.NumberAggregateFunctionCall,
    SyntaxKind.BitAggregateFunctionCall,
    SyntaxKind.StatisticalAggregateFunctionCall,
    SyntaxKind.JsonObjectAggregateFunctionCall,
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10057-L10061
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10097-L10114
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10134-L10138
 *
 * According to ANSI SQL, DISTINCT is allowed and has
 * no sense inside MIN and MAX grouping functions; so MIN|MAX(DISTINCT ...)
 * is processed like an ordinary MIN | MAX()
 */
 export const NumberAggregateFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(
        TokenKind.AVG,
        TokenKind.MIN,
        TokenKind.MAX,
        TokenKind.SUM,
    ))),
    field("arguments", SyntaxKind.NumberAggregate_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10065
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10069
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10081
 */
export const BitAggregateFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(
        TokenKind.BIT_AND,
        TokenKind.BIT_OR,
        TokenKind.BIT_XOR,
    ))),
    field("arguments", SyntaxKind.Aggregate_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10118-L10130
 */
export const StatisticalAggregateFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(
        /**
         * https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/lex.h#L844-L846
         */
        TokenKind.STD,
        TokenKind.STDDEV,
        TokenKind.STDDEV_POP,

        /**
         * https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/lex.h#L856-L857
         */
        TokenKind.VARIANCE,
        TokenKind.VAR_POP,

        TokenKind.STDDEV_SAMP,
        TokenKind.VAR_SAMP,
    ))),
    field("arguments", SyntaxKind.Aggregate_Arguments),
);

export const JsonObjectAggregateFunctionCall = seq(
    field("functionName", cannotExpect(TokenKind.JSON_OBJECTAGG)),
    field("arguments", SyntaxKind.JsonObjectAggregate_Arguments),
);
