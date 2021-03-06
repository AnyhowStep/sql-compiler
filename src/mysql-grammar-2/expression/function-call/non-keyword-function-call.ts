/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9737
 */

import {cannotExpect, choice, field, inline, optional, seq, tokenSymbol} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9738
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9742
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9781-L9785
 */
export const AddDateFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.ADDDATE, TokenKind.SUBDATE))),
    field("arguments", SyntaxKind.Expression2_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9746
 */
export const CurrentDateFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(
        TokenKind.CURRENT_DATE,
        TokenKind.CURDATE,
    ))),
    field("arguments", optional(SyntaxKind.Empty_Arguments)),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9750
 */
export const CurrentTimeFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(
        TokenKind.CURRENT_TIME,
        TokenKind.CURTIME,
    ))),
    field("arguments", optional(SyntaxKind.DateTimePrecisionArg)),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9754
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9759
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9742
 */
export const DateAddIntervalFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(
        TokenKind.DATE_ADD,
        TokenKind.DATE_SUB,
        TokenKind.ADDDATE,
        TokenKind.SUBDATE,
    ))),
    field("arguments", SyntaxKind.DateAddInterval_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9764
 */
export const ExtractFunctionCall = seq(
    field("functionName", cannotExpect(TokenKind.EXTRACT)),
    field("arguments", SyntaxKind.Extract_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9768
 */
export const GetFormatFunctionCall = seq(
    field("functionName", cannotExpect(TokenKind.GET_FORMAT)),
    field("arguments", SyntaxKind.GetFormat_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9777
 */
export const PositionFunctionCall = seq(
    field("functionName", cannotExpect(TokenKind.POSITION)),
    field("arguments", SyntaxKind.Position_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9789-L9801
 */
export const SubstringFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(
        TokenKind.SUBSTRING,
        TokenKind.SUBSTR,
        TokenKind.MID,
    ))),
    field("arguments", SyntaxKind.Substring_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9805
 */
export const SysDateFunctionCall = seq(
    field("functionName", cannotExpect(TokenKind.SYSDATE)),
    field("arguments", SyntaxKind.DateTimePrecisionArg),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9810-L9814
 */
export const TimestampAddFunctionCall = seq(
    field("functionName", cannotExpect(TokenKind.TIMESTAMPADD)),
    field("arguments", SyntaxKind.TimestampAdd_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9814
 */
export const TimestampDiffFunctionCall = seq(
    field("functionName", cannotExpect(TokenKind.TIMESTAMPDIFF)),
    field("arguments", SyntaxKind.TimestampDiff_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9818
 */
export const UtcDateFunctionCall = seq(
    field("functionName", cannotExpect(TokenKind.UTC_DATE)),
    field("arguments", optional(SyntaxKind.Empty_Arguments)),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9822
 */
export const UtcTimeFunctionCall = seq(
    field("functionName", cannotExpect(TokenKind.UTC_TIME)),
    field("arguments", SyntaxKind.DateTimePrecisionArg),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9826
 */
export const UtcTimestampFunctionCall = seq(
    field("functionName", cannotExpect(TokenKind.UTC_TIMESTAMP)),
    field("arguments", SyntaxKind.DateTimePrecisionArg),
);

export const NonKeywordFunctionCall = inline(choice(
    SyntaxKind.AddDateFunctionCall,
    SyntaxKind.CurrentDateFunctionCall,
    SyntaxKind.CurrentTimeFunctionCall,
    SyntaxKind.DateAddIntervalFunctionCall,
    SyntaxKind.ExtractFunctionCall,
    SyntaxKind.GetFormatFunctionCall,
    SyntaxKind.Now,
    SyntaxKind.PositionFunctionCall,
    SyntaxKind.SubstringFunctionCall,
    SyntaxKind.SysDateFunctionCall,
    SyntaxKind.TimestampAddFunctionCall,
    SyntaxKind.TimestampDiffFunctionCall,
    SyntaxKind.UtcDateFunctionCall,
    SyntaxKind.UtcTimeFunctionCall,
    SyntaxKind.UtcTimestampFunctionCall,
));
