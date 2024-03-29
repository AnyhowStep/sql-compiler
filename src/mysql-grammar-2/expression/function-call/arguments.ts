import {cannotExpect, choice, fieldLengthCheck, field, optional, seq, tokenSymbol, inline, repeat} from "../../../grammar-builder";
import {allowedSyntaxKinds, consumeUnexpected, disallowedSyntaxKinds, getTokenKinds, greedySkipExpectation, skipExpectationCost} from "../../../grammar-builder/grammar";
import {greedySkipExpression, itemSeparator, list, list1, parentheses, real_ulong_num, ulong_num} from "../../rule-util";
import {SyntaxKind} from "../../syntax-kind.generated";
import {reservedKeywords, TokenKind} from "../../token.generated";
import {interval, intervalTimeStamp} from "../interval-expression";

export const Empty_Arguments = fieldLengthCheck(
    "item",
    0,
    0,
    SyntaxKind.ExpressionList_ArgumentsImpl
);

export const ExpressionList_ArgumentsImpl = inline(parentheses(
    list(SyntaxKind.Expression)
));

export const ExpressionList_Arguments_NoExpectImpl = inline(seq(
    field("openParenthesesToken", cannotExpect(TokenKind.OpenParentheses)),
    list(SyntaxKind.Expression),
    field("closeParenthesesToken", TokenKind.CloseParentheses),
));

export const ExpressionList_Arguments_NoExpect = SyntaxKind.ExpressionList_Arguments_NoExpectImpl;

export const ExpressionList_Arguments = SyntaxKind.ExpressionList_ArgumentsImpl;

export const ExpressionList1_Arguments = fieldLengthCheck(
    "item",
    1,
    Infinity,
    SyntaxKind.ExpressionList_ArgumentsImpl
);

export const ExpressionList2_Arguments = fieldLengthCheck(
    "item",
    2,
    Infinity,
    SyntaxKind.ExpressionList_ArgumentsImpl
);

export const ExpressionList2_Arguments_NoExpect = fieldLengthCheck(
    "item",
    2,
    Infinity,
    SyntaxKind.ExpressionList_Arguments_NoExpectImpl
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

export const Expression3_Arguments = fieldLengthCheck(
    "item",
    3,
    3,
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

export const Expression2To3_Arguments = fieldLengthCheck(
    "item",
    2,
    3,
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
        field("temporalUnit", greedySkipExpectation(interval)),
        field("fromToken", greedySkipExpectation(TokenKind.FROM)),
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
export const GetFormat_Arguments = fieldLengthCheck(
    "extraItem",
    0,
    0,
    /**
     * Notes:
     * When parser encounters open parentheses, it should look for matching close parentheses.
     * If no matching close parentheses found, continue regular parsing.
     *
     * If found, all contents between parentheses should belong to the rule.
     */
    parentheses(seq(
        field("format", greedySkipExpectation(tokenSymbol(
            /**
             * DATETIME and TIMESTAMP are synonyms
             */
            TokenKind.DATETIME,
            TokenKind.TIMESTAMP,
            TokenKind.DATE,
            TokenKind.TIME,
        ))),
        field("commaToken", greedySkipExpectation(itemSeparator)),
        field("expression", greedySkipExpression),
        repeat(seq(
            field("commaToken", itemSeparator),
            field("extraItem", SyntaxKind.Expression),
        )),
    ))
);

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
export const Substring_Arguments = inline(choice(
    SyntaxKind.Substring_Arguments_From,
    SyntaxKind.Substring_Arguments_Comma,
));

export const ForLength = seq(
    field("forToken", tokenSymbol(TokenKind.FOR)),
    field("length", SyntaxKind.Expression),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9797-L9801
 */
export const Substring_Arguments_From = fieldLengthCheck(
    "extraItem",
    0,
    0,
    parentheses(seq(
        field("str", greedySkipExpression),
        field("fromToken", tokenSymbol(TokenKind.FROM)),
        field("startPosition", SyntaxKind.Expression),
        field("forLength", optional(SyntaxKind.ForLength)),
        repeat(seq(
            field("commaToken", itemSeparator),
            field("extraItem", SyntaxKind.Expression),
        )),
    ))
);

export const Substring_Arguments_Comma = inline(SyntaxKind.Expression2To3_Arguments);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9810-L9814
 */
export const TimestampAdd_Arguments = fieldLengthCheck(
    "item",
    3,
    3,
    parentheses(optional(seq(
        field("item", allowedSyntaxKinds(
            [
                ...getTokenKinds(intervalTimeStamp),
            ],
            choice(
                tokenSymbol(
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
                ),
                SyntaxKind.Expression
            )
        )),
        optional(seq(
            field("commaToken", itemSeparator),
            list1(SyntaxKind.Expression),
        )),
    )))
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9814
 */
export const TimestampDiff_Arguments = TimestampAdd_Arguments;

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9914-L9928
 */
export const WeightString_Arguments = inline(choice(
    SyntaxKind.WeightString_Arguments_Default,
    SyntaxKind.WeightString_Arguments_AsChar,
    SyntaxKind.WeightString_Arguments_AsBinary,
    SyntaxKind.WeightString_Arguments_Undocumented,
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9914
 */
export const WeightString_Arguments_Default =
    choice(
        fieldLengthCheck(
            "extraItem",
            0,
            0,
            parentheses(seq(
                field("expr", SyntaxKind.Expression),
                optional(seq(
                    field("commaToken", TokenKind.Comma),
                    field("extraItem", SyntaxKind.Expression),
                )),
                field("levels", SyntaxKind.WeightString_Levels),
                optional(seq(
                    field("commaToken", TokenKind.Comma),
                    field("extraItem", SyntaxKind.Expression),
                )),
            ))
        ),
        fieldLengthCheck(
            "extraItem",
            0,
            0,
            parentheses(seq(
                field("expr", SyntaxKind.Expression),
                optional(seq(
                    field("commaToken", skipExpectationCost(2.0, TokenKind.Comma)),
                    field("extraItem", SyntaxKind.Expression),
                )),
            ))
        ),
    );

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9918
 */
export const WeightString_Arguments_AsChar = parentheses(seq(
    field("expr", SyntaxKind.Expression),
    field("asToken", TokenKind.AS),
    field("charToken", SyntaxKind.Char),
    field("length", SyntaxKind.WeightStringCastLength),
    field("levels", optional(SyntaxKind.WeightString_Levels)),
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9923
 */
export const WeightString_Arguments_AsBinary = parentheses(seq(
    field("expr", SyntaxKind.Expression),
    field("asToken", TokenKind.AS),
    field("binaryToken", TokenKind.BINARY),
    field("length", SyntaxKind.WeightStringCastLength),
    field("levels", optional(disallowedSyntaxKinds(
        [SyntaxKind.WeightString_Levels],
        SyntaxKind.WeightString_Levels
    ))),
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9928
 *
 * This syntax is undocumented...
 */
export const WeightString_Arguments_Undocumented =  fieldLengthCheck(
    "extraItem",
    0,
    0,
    parentheses(seq(
        field("expr", SyntaxKind.Expression),
        field("commaToken", itemSeparator),
        field("num1", ulong_num),
        field("commaToken", itemSeparator),
        field("num2", ulong_num),
        field("commaToken", greedySkipExpectation(itemSeparator)),
        field("num3", greedySkipExpectation(ulong_num)),
        repeat(seq(
            field("commaToken", itemSeparator),
            field("extraItem", SyntaxKind.Expression),
        )),
    ))
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7218
 */
export const WeightString_Levels = seq(
    field("levelToken", TokenKind.LEVEL),
    field("levels", choice(
        SyntaxKind.WeightString_Level_List1,
        SyntaxKind.WeightString_Level_Range,
    )),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7176
 */
export const WeightString_Level_Flag = choice(
    seq(
        field("sortOrder", tokenSymbol(
            TokenKind.ASC,
            TokenKind.DESC,
        )),
        field("reverseToken", optional(TokenKind.REVERSE)),
    ),
    field("reverseToken", TokenKind.REVERSE),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7191
 */
export const WeightString_Level_Item = seq(
    field("level", greedySkipExpectation(skipExpectationCost(0.5, real_ulong_num))),
    field("flag", optional(SyntaxKind.WeightString_Level_Flag)),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7198
 */
export const WeightString_Level_List1 = list1(SyntaxKind.WeightString_Level_Item);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7203
 */
export const WeightString_Level_Range = seq(
    field("minLevel", real_ulong_num),
    field("dashToken", TokenKind.Minus),
    field("maxLevel", real_ulong_num),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7155
 */
export const WeightStringCastLength = seq(
    field("openParenthesesToken", TokenKind.OpenParentheses),
    field("length", real_ulong_num),
    field("closeParenthesesToken", TokenKind.CloseParentheses),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10205
 */
export const Aggregate_Arguments_Expression = seq(
    // implement a greedyUnexpect or sth here.
    // it will skip all tokens up till ALL or Expression or sth?
    // seems like it will be computationally expensive, though. it has to "know" when to stop
    repeat(consumeUnexpected(
        tokenSymbol(""),
        [
            //This is reserved
            TokenKind.UnderscoreCharacterSet,
            ...reservedKeywords.filter(tokenKind => tokenKind != TokenKind.ALL),
        ]
    )),
    /**
     * The `ALL` is redundant because it is `ALL` by default.
     */
    field("allToken", optional(TokenKind.ALL)),
    field("expression", SyntaxKind.Expression),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10057-L10061
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10205
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10780
 */
export const NumberAggregate_Arguments_Expression = seq(
    field("distinctToken", optional(TokenKind.DISTINCT)),
    /**
     * The `ALL` is redundant because it is `ALL` by default.
     */
    field("allToken", optional(TokenKind.ALL)),
    field("expression", SyntaxKind.Expression),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10057-L10061
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10205
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10780
 */
export const NumberAggregate_Arguments = fieldLengthCheck(
    "item",
    1,
    1,
    parentheses(list(SyntaxKind.NumberAggregate_Arguments_Expression))
);

export const Aggregate_Arguments = fieldLengthCheck(
    "item",
    1,
    1,
    parentheses(list(SyntaxKind.Aggregate_Arguments_Expression))
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10077
 */
export const JsonObjectAggregate_Arguments = fieldLengthCheck(
    "item",
    2,
    2,
    parentheses(list(SyntaxKind.Aggregate_Arguments_Expression))
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10085
 */
export const CountAggregate_Arguments_All_Expression = seq(
    // implement a greedyUnexpect or sth here.
    // it will skip all tokens up till ALL or Expression or sth?
    // seems like it will be computationally expensive, though. it has to "know" when to stop
    repeat(consumeUnexpected(
        tokenSymbol(""),
        [
            //This is reserved
            TokenKind.UnderscoreCharacterSet,
            ...reservedKeywords.filter(tokenKind => tokenKind != TokenKind.ALL),
        ]
    )),
    /**
     * The `ALL` is redundant because it is `ALL` by default.
     */
    field("allToken", optional(TokenKind.ALL)),
    field("expression", choice(
        TokenKind.Asterisk,
        SyntaxKind.Expression,
    )),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10085-L10093
 */
export const CountAggregate_Arguments_All = fieldLengthCheck(
    "item",
    1,
    1,
    parentheses(list(SyntaxKind.CountAggregate_Arguments_All_Expression))
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10085-L10093
 */
export const CountAggregate_Arguments_Distinct = fieldLengthCheck(
    "item",
    1,
    Infinity,
    parentheses(seq(
        field("distinctToken", TokenKind.DISTINCT),
        list(SyntaxKind.Expression)
    ))
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10085-L10093
 */
export const CountAggregate_Arguments = inline(choice(
    SyntaxKind.CountAggregate_Arguments_All,
    SyntaxKind.CountAggregate_Arguments_Distinct,
));


/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10142-L10144
 */
export const GroupConcatAggregate_Arguments = fieldLengthCheck(
    "extraItem",
    0,
    0,
    fieldLengthCheck(
        "item",
        1,
        Infinity,
        parentheses(seq(
            field("distinctToken", optional(TokenKind.DISTINCT)),
            list(SyntaxKind.Expression),
            field("orderByClause", optional(SyntaxKind.OrderByClause)),
            optional(seq(
                field("separator", SyntaxKind.GroupConcatAggregate_Separator),
                repeat(seq(
                    field("commaToken", itemSeparator),
                    field("extraItem", SyntaxKind.Expression),
                )),
            )),
        ))
    )
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10175
 */
export const GroupConcatAggregate_Separator = seq(
    field("separatorToken", TokenKind.SEPARATOR),
    field("textString", SyntaxKind.TextString),
);
