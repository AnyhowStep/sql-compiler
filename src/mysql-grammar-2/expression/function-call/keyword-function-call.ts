import {cannotExpect, choice, field, inline, optional, seq, tokenSymbol} from "../../../grammar-builder";
import {char} from "../../rule-util";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9610
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9615
 */
export const CharacterFunctionCall = seq(
    field("functionName", cannotExpect(char)),
    field("arguments", SyntaxKind.Character_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9619
 */
export const CurrentUserFunctionCall = seq(
    field("functionName", cannotExpect(TokenKind.CURRENT_USER)),
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
    field("functionName", cannotExpect(tokenSymbol(
        TokenKind.DATE,
        TokenKind.DAY,
        TokenKind.SQL_TSI_DAY,
        TokenKind.HOUR,
        TokenKind.SQL_TSI_HOUR,
        TokenKind.MINUTE,
        TokenKind.SQL_TSI_MINUTE,
        TokenKind.MONTH,
        TokenKind.SQL_TSI_MONTH,
        TokenKind.SECOND,
        TokenKind.SQL_TSI_SECOND,
        TokenKind.TIME,
        /**
         * @see TimestampFunctionCall
         */
        //TokenKind.TIMESTAMP,
        TokenKind.YEAR,
        TokenKind.SQL_TSI_YEAR,
    ))),
    field("arguments", SyntaxKind.Expression1_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9635
 */
export const InsertFunctionCall = seq(
    field("functionName", cannotExpect(TokenKind.INSERT)),
    field("arguments", SyntaxKind.Expression4_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9639-L9643
 */
export const IntervalFunctionCall = seq(
    field("functionName", cannotExpect(TokenKind.INTERVAL)),
    /**
     * This _NoExpect is an ugly hack used because I'm sick of the
     * parser trying to shove this function in everywhere I use
     * `INTERVAL expr DAY` incorrectly.
     *
     * Keeps trying to suggest `INTERVAL(expr, DAY)`
     */
    field("arguments", SyntaxKind.ExpressionList2_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9647
 */
export const LeftFunctionCall = seq(
    field("functionName", cannotExpect(TokenKind.LEFT)),
    field("arguments", SyntaxKind.Expression2_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9659
 */
export const RightFunctionCall = seq(
    field("functionName", cannotExpect(TokenKind.RIGHT)),
    field("arguments", SyntaxKind.Expression2_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9675
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9671
 */
//export const TimestampAddTimeFunctionCall = seq(
export const TimestampFunctionCall = seq(
    field("functionName", cannotExpect(TokenKind.TIMESTAMP)),
    field("arguments", SyntaxKind.Expression1To2_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9679-L9710
 */
export const TrimFunctionCall = seq(
    field("functionName", cannotExpect(TokenKind.TRIM)),
    field("arguments", SyntaxKind.Trim_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9715
 */
export const UserFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(
        TokenKind.USER,
        TokenKind.SESSION_USER,
        TokenKind.SYSTEM_USER,
    ))),
    field("arguments", SyntaxKind.Empty_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9610
 */
export const KeywordFunctionCall = inline(choice(
    SyntaxKind.CharacterFunctionCall,
    SyntaxKind.CurrentUserFunctionCall,
    SyntaxKind.ExtractFromDateTimeFunctionCall,
    SyntaxKind.InsertFunctionCall,
    SyntaxKind.IntervalFunctionCall,
    SyntaxKind.LeftFunctionCall,
    SyntaxKind.RightFunctionCall,
    //SyntaxKind.TimestampAddTimeFunctionCall,
    SyntaxKind.TimestampFunctionCall,
    SyntaxKind.TrimFunctionCall,
    SyntaxKind.UserFunctionCall,
));
