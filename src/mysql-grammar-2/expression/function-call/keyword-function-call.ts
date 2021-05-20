import {choice, field, optional, seq, tokenSymbol} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9610
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9615
 */
export const CharacterFunctionCall = seq(
    field("functionName", SyntaxKind.Char),
    field("arguments", SyntaxKind.Character_Arguments),
);

export const CurrentUserFunctionCall = seq(
    field("functionName", TokenKind.CURRENT_USER),
    field("arguments", optional(SyntaxKind.Empty_Arguments)),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9623-L9631
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9651-L9655
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9663-L9671
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9719
 */
export const ExtractFromDateTimeFunctionCall = seq(
    field("functionName", tokenSymbol(
        TokenKind.DATE,
        TokenKind.DAY,
        TokenKind.HOUR,
        TokenKind.MINUTE,
        TokenKind.MONTH,
        TokenKind.SECOND,
        TokenKind.TIME,
        TokenKind.TIMESTAMP,
        TokenKind.YEAR,
    )),
    field("arguments", SyntaxKind.Expression1_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9635
 */
export const InsertFunctionCall = seq(
    field("functionName", TokenKind.INSERT),
    field("arguments", SyntaxKind.Expression4_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9639-L9643
 */
export const IntervalFunctionCall = seq(
    field("functionName", TokenKind.INTERVAL),
    field("arguments", SyntaxKind.ExpressionList2_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9647
 */
export const LeftFunctionCall = seq(
    field("functionName", TokenKind.LEFT),
    field("arguments", SyntaxKind.Expression2_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9659
 */
export const RightFunctionCall = seq(
    field("functionName", TokenKind.RIGHT),
    field("arguments", SyntaxKind.Expression2_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9675
 */
export const TimestampAddTimeFunctionCall = seq(
    field("functionName", TokenKind.TIMESTAMP),
    field("arguments", SyntaxKind.Expression2_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9715
 */
export const UserFunctionCall = seq(
    field("functionName", TokenKind.USER),
    field("arguments", SyntaxKind.Empty_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9610
 */
export const KeywordFunctionCall = choice(
    SyntaxKind.CharacterFunctionCall,
    SyntaxKind.CurrentUserFunctionCall,
    SyntaxKind.ExtractFromDateTimeFunctionCall,
    SyntaxKind.InsertFunctionCall,
    SyntaxKind.IntervalFunctionCall,
    SyntaxKind.LeftFunctionCall,
    SyntaxKind.RightFunctionCall,
    SyntaxKind.TimestampAddTimeFunctionCall,
    SyntaxKind.UserFunctionCall,
);
