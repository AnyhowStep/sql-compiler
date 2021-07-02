import {cannotExpect, choice, fieldLengthCheck, field, optional, seq, tokenSymbol, inline, repeat, skipExpectationCost, skipExpectationAfterExtraCost} from "../../../grammar-builder";
import {itemSeparator, list, list1, parentheses} from "../../rule-util";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

export const Empty_Arguments = fieldLengthCheck(
    "item",
    0,
    0,
    SyntaxKind.ExpressionList_ArgumentsImpl
);

export const ExpressionList_ArgumentsImpl = inline(parentheses(
    list(SyntaxKind.Expression)
));

export const ExpressionList_Arguments = SyntaxKind.ExpressionList_ArgumentsImpl;

export const ExpressionList2_Arguments = fieldLengthCheck(
    "item",
    2,
    Infinity,
    SyntaxKind.ExpressionList_ArgumentsImpl
);

export const UserDefinedExpressionList_Arguments = seq(
    field("openParenthesesToken", cannotExpect(TokenKind.OpenParentheses)),
    list(choice(SyntaxKind.Expression, SyntaxKind.UserDefinedExpression)),
    field("closeParenthesesToken", TokenKind.CloseParentheses),
);

export const Expression1_Arguments = fieldLengthCheck(
    "item",
    1,
    1,
    SyntaxKind.ExpressionList_ArgumentsImpl
);

export const Expression2_Arguments = fieldLengthCheck(
    "item",
    2,
    2,
    SyntaxKind.ExpressionList_ArgumentsImpl
);

export const Expression4_Arguments = fieldLengthCheck(
    "item",
    4,
    4,
    SyntaxKind.ExpressionList_ArgumentsImpl
);

export const Expression1To2_Arguments = fieldLengthCheck(
    "item",
    1,
    2,
    SyntaxKind.ExpressionList_ArgumentsImpl
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9611-L9615
 */
export const Character_Arguments = parentheses(seq(
    list1(SyntaxKind.Expression),
    field("usingCharacterSetName", optional(SyntaxKind.UsingCharacterSetName)),
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9615
 */
export const UsingCharacterSetName = seq(
    field("usingToken", TokenKind.USING),
    field("characterSetName", SyntaxKind.CharacterSetName),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9679-L9694
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9710
 */
export const Trim_RemoveStringExpression = seq(
    field("trimDirection", optional(tokenSymbol(
        TokenKind.BOTH,
        TokenKind.LEADING,
        TokenKind.TRAILING,
    ))),
    field("expression", SyntaxKind.Expression),
    field("fromToken", TokenKind.FROM),
);

/**
 * If the `expression` is not specified, `TRIM()` removes spaces.
 *
 * https://dev.mysql.com/doc/refman/5.7/en/string-functions.html#function_trim
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9698-L9706
 */
export const Trim_RemoveSpaceExpression = seq(
    field("trimDirection", tokenSymbol(
        TokenKind.BOTH,
        TokenKind.LEADING,
        TokenKind.TRAILING,
    )),
    field("fromToken", TokenKind.FROM),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9679-L9710
 */
export const Trim_Arguments = parentheses(seq(
    field("trimExpression", optional(choice(
        SyntaxKind.Trim_RemoveStringExpression,
        SyntaxKind.Trim_RemoveSpaceExpression,
    ))),
    field("expression", SyntaxKind.Expression),
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9754-L9759
 */
export const DateAddInterval_Arguments = fieldLengthCheck(
    "extraItem",
    0,
    0,
    parentheses(seq(
        field("expression", SyntaxKind.Expression),
        field("commaToken", itemSeparator),
        field("intervalExpression", SyntaxKind.IntervalExpression),
        repeat(seq(
            field("commaToken", itemSeparator),
            field("extraItem", SyntaxKind.Expression),
        ))
    ))
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9764
 */
export const Extract_Arguments = fieldLengthCheck(
    "extraItem",
    0,
    0,
    parentheses(seq(
        field("temporalUnit", SyntaxKind.TemporalUnit),
        field("fromToken", skipExpectationAfterExtraCost(
            0.0,
            skipExpectationCost(0.1, TokenKind.FROM)
        )),
        field("expression", SyntaxKind.Expression),
        repeat(seq(
            field("commaToken", itemSeparator),
            field("extraItem", SyntaxKind.Expression),
        ))
    ))
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9768
 */
export const GetFormat_Arguments = parentheses(seq(
    field("format", tokenSymbol(
        TokenKind.DATETIME,
        TokenKind.TIMESTAMP,
        TokenKind.DATE,
        TokenKind.TIME,
    )),
    field("commaToken", itemSeparator),
    field("expression", SyntaxKind.Expression),
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9777
 */
export const Position_Arguments = parentheses(seq(
    field("left", SyntaxKind.BitExpression),
    field("inToken", TokenKind.IN),
    field("right", SyntaxKind.Expression),
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9789-L9801
 */
export const Substring_Arguments = parentheses(seq(
    field("str", SyntaxKind.Expression),
    field("fromToken", tokenSymbol(TokenKind.FROM, TokenKind.Comma)),
    field("startPosition", SyntaxKind.Expression),
    field("forLength", optional(SyntaxKind.ForLength)),
));

export const ForLength = seq(
    field("forToken", tokenSymbol(TokenKind.FOR, TokenKind.Comma)),
    field("length", SyntaxKind.Expression),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9810-L9814
 */
export const TimestampAdd_Arguments = parentheses(seq(
    field("temporalUnit", SyntaxKind.TemporalUnitTimeStamp),
    field("commaToken", itemSeparator),
    field("interval", SyntaxKind.Expression),
    field("commaToken", itemSeparator),
    field("dateTime", SyntaxKind.Expression),
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9814
 */
export const TimestampDiff_Arguments = parentheses(seq(
    field("temporalUnit", SyntaxKind.TemporalUnitTimeStamp),
    field("commaToken", itemSeparator),
    field("startDateTime", SyntaxKind.Expression),
    field("commaToken", itemSeparator),
    field("endDateTime", SyntaxKind.Expression),
));
