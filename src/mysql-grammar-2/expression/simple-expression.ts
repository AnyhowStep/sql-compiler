import {alias, cannotExpect, choice, field, inline, optional, precedence, repeat, repeat1, repeatNoSkipIfAllError, seq, tokenSymbol, useCustomExtra, consumeUnexpected, getTokenKinds, greedySkipExpectation, skipExpectationCost, omitCost, fieldLengthCheck} from "../../grammar-builder";
import {CustomExtras} from "../custom-extras";
import {Precedence} from "../precedence";
import {dotIdentOrReserved, dotIdentOrReservedNoSkipErrors, dotIdentOrReservedScopedSystemVariable, identifier, identifierNoScopeKeyword, identifierOrReserved, identifierOrReservedOrStringLiteralOrHostname, list, list2, reserved} from "../rule-util";
import {SyntaxKind} from "../syntax-kind.generated";
import {extras, TokenKind} from "../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9494
 *
 * @todo
 */
export const SimpleExpression = inline(choice(
    /**
     * This `Ident` could reference column, stored procedure parameter, or some local variable.
     *
     * @todo Make the first token a dummy `TokenKind.Expr`?
     */
    identifier,
    SyntaxKind.ColumnIdentifierSimpleExpression,
    SyntaxKind.FunctionCall,
    //SyntaxKind.CollateSimpleExpression,
    SyntaxKind.Literal,
    SyntaxKind.ParamMarker,
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10151
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10160
     */
    SyntaxKind.UserVariableIdentifier,
    SyntaxKind.UserVariableIdentifierAssignment,
    SyntaxKind.ScopedSystemVariableIdentifier,
    SyntaxKind.UnscopedSystemVariableIdentifier,
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9508
     */
    SyntaxKind.ConcatSimpleExpression,
    SyntaxKind.Not2SimpleExpression,
    SyntaxKind.ParenthesizedExpressionSimpleExpression,
    SyntaxKind.RowSimpleExpression,
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9582-L9583
     */
    SyntaxKind.IntervalExpressionPlus,
    SyntaxKind.PrefixSimpleExpression,
    SyntaxKind.CollateSimpleExpression,
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9528
     */
    SyntaxKind.ParenthesizedSelect,
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9524
 */
export const Not2SimpleExpression = precedence(140, seq(
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9469-L9476
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_lex.cc#L878
     *
     * @todo Implement `TokenKind.NOT2`
     *
     * `NOT2` is just `NOT` with `HIGH_NOT_PRECEDENCE` enabled.
     *
     * https://dev.mysql.com/doc/refman/5.7/en/sql-mode.html#sqlmode_high_not_precedence
     */
    field("exclamationToken", cannotExpect(tokenSymbol(TokenKind.Exclamation, TokenKind.NOT2))),
    field("expression", SyntaxKind.SimpleExpression),
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9512-L9520
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9554
 */
export const PrefixSimpleExpression = precedence(140, seq(
    field("operator", cannotExpect(tokenSymbol(
        TokenKind.Plus,
        TokenKind.Minus,
        TokenKind.Tilde,
        TokenKind.BINARY,
    ))),
    field("expression", SyntaxKind.SimpleExpression),
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9500
 */
export const CollateSimpleExpression = precedence(150, seq(
    field("expression", SyntaxKind.SimpleExpression),
    field("collateToken", cannotExpect(TokenKind.COLLATE)),
    field("collation", SyntaxKind.CollationName),
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9582
 */
//export const IntervalExpressionPlus = precedence(160, seq(
/**
 * + BETWEEN > INTERVAL
 * + INTERVAL > AND
 *
 * BETWEEN = 50
 * NOT = 40
 * AND = 30
 * OR  = 10
 */
export const IntervalExpressionPlus = precedence(45, seq(
    field("left", SyntaxKind.IntervalExpression),
    field("operator", tokenSymbol(
        TokenKind.Plus,
        /**
         * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9583
         */
        //TokenKind.Minus,
    )),
    field("right", SyntaxKind.Expression),
));

export const ParenthesizedExpressionSimpleExpression = inline(alias(SyntaxKind.ParenthesizedExpression, seq(
    field("openParenthesesToken", cannotExpect(TokenKind.OpenParentheses)),
    field("item", SyntaxKind.Expression),
    field("closeParenthesesToken", TokenKind.CloseParentheses),
)));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12993
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13009
 */
export const ColumnIdentifierSimpleExpression = choice(
    seq(
        field("tableName", SyntaxKind.Ident),
        dotIdentOrReserved("columnName"),
    ),
    seq(
        field("schemaName", SyntaxKind.Ident),
        dotIdentOrReserved("tableName"),
        dotIdentOrReserved("columnName"),
    ),
    /**
     * This should not used, generally
     */
    useCustomExtra(
        //Don't use any extras, not even CustomExtras.noExtras
        "",
        seq(
            field("tableName", reserved),
            repeatNoSkipIfAllError(consumeUnexpected(
                tokenSymbol(extras[0], ...extras.slice(1)),
                extras,
                1
            )),
            field("dotToken", cannotExpect(TokenKind.Dot)),
            //No whitespace and linebreak allowed between dot and tableName
            repeatNoSkipIfAllError(consumeUnexpected(
                tokenSymbol(extras[0], ...extras.slice(1)),
                extras,
                .25
            )),
            field("columnName", identifierOrReserved),
        )
    ),
    /**
     * This should not used, generally
     */
    useCustomExtra(
        //Don't use any extras, not even CustomExtras.noExtras
        "",
        seq(
            field("schemaName", reserved),
            repeatNoSkipIfAllError(consumeUnexpected(
                tokenSymbol(extras[0], ...extras.slice(1)),
                extras,
                1
            )),
            field("dotToken", cannotExpect(TokenKind.Dot)),
            //No whitespace and linebreak allowed between dot and tableName
            repeatNoSkipIfAllError(consumeUnexpected(
                tokenSymbol(extras[0], ...extras.slice(1)),
                extras,
                .25
            )),
            field("tableName", identifierOrReserved),
            repeat(tokenSymbol(extras[0], ...extras.slice(1))),
            dotIdentOrReservedNoSkipErrors("columnName"),
        )
    ),
    /**
     * Deprecated.
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13014
     */
    seq(
        field("dotToken", cannotExpect(TokenKind.Dot)),
        field("tableName", SyntaxKind.Ident),
        dotIdentOrReserved("columnName"),
    ),
    seq(
        useCustomExtra(
            CustomExtras.noExtras,
            seq(
                field("dotToken", cannotExpect(TokenKind.Dot)),
                field("tableName", reserved),
            )
        ),
        dotIdentOrReserved("columnName"),
    ),
    useCustomExtra(
        //Don't use any extras, not even CustomExtras.noExtras
        "",
        seq(
            field("dotToken", cannotExpect(TokenKind.Dot)),
            repeat1(tokenSymbol(extras[0], ...extras.slice(1))),
            field("tableName", reserved),
            repeat(consumeUnexpected(
                tokenSymbol(extras[0], ...extras.slice(1)),
                extras,
                1
            )),
            field("dotToken", cannotExpect(TokenKind.Dot)),
            repeatNoSkipIfAllError(consumeUnexpected(
                tokenSymbol(extras[0], ...extras.slice(1)),
                extras,
                .25
            )),
            field("columnName", SyntaxKind.IdentOrReserved),
        )
    ),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10152
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13833
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10164
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7483
 *
 * ```sql
 *  SELECT @@sql_mode;
 *  SELECT @@GLOBAL.sql_mode;
 *  SELECT @@GLOBAL.hot_cache.key_buffer_size;
 *  SELECT @@hot_cache.key_buffer_size;
 * ```
 *
 * The `@@x.y.z` syntax is documented here,
 * https://dev.mysql.com/doc/refman/8.0/en/structured-system-variables.html
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10164
 */
export const ScopedSystemVariableIdentifier = seq(
    useCustomExtra(
        CustomExtras.noExtras,
        seq(
            field("atToken", cannotExpect(TokenKind.At)),
            field("atToken", TokenKind.At),
            field("scope", tokenSymbol(
                TokenKind.SESSION,
                TokenKind.LOCAL,
                TokenKind.GLOBAL,
            )),
        )
    ),
    choice(
        //I don't know why they call it "instance"
        choice(
            useCustomExtra(
                "",
                seq(
                    field("dotToken", cannotExpect(TokenKind.Dot)),
                    //whitespace and linebreak allowed between dot and non-reserved tokens
                        repeat(tokenSymbol(extras[0], ...extras.slice(1))),
                    field("instanceName", greedySkipExpectation(consumeUnexpected(
                        identifier,
                        [
                            TokenKind.StringLiteral,
                            TokenKind.DoubleQuotedLiteral,
                        ],
                        .5
                    ))),
                )
            ),
            useCustomExtra(
                "",
                seq(
                    field("dotToken", cannotExpect(TokenKind.Dot)),
                    //No whitespace and linebreak allowed between dot and reserved tokens
                    repeatNoSkipIfAllError(consumeUnexpected(
                        tokenSymbol(extras[0], ...extras.slice(1)),
                        extras,
                        .25
                    )),
                    field("instanceName", reserved),
                )
            ),
        ),
        seq(
            //I don't know why they call it "instance"
            dotIdentOrReservedScopedSystemVariable("instanceName"),
            //https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/item_func.cc#L7810
            //https://dev.mysql.com/doc/refman/8.0/en/structured-system-variables.html
            dotIdentOrReservedNoSkipErrors("componentName"),
        ),
    ),
);

/**
 * Defaults to `@@SESSION`... Usually.
 * https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/set_var.h#L114
 *
 * For example, `@@hot_cache.key_buffer_size` is the same as,
 * `@@GLOBAL.hot_cache.key_buffer_size`
 *
 * Because `hot_cache.key_buffer_size` is `GLOBAL`-only.
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10164
 */
export const UnscopedSystemVariableIdentifier = choice(
    seq(
        useCustomExtra(
            //Don't use any extras, not even CustomExtras.noExtras
            "",
            seq(
                field("atToken", cannotExpect(TokenKind.At)),
                repeatNoSkipIfAllError(consumeUnexpected(
                    tokenSymbol(extras[0], ...extras.slice(1)),
                    extras,
                    .25
                )),
                field("atToken", TokenKind.At),
                repeatNoSkipIfAllError(consumeUnexpected(
                    tokenSymbol(extras[0], ...extras.slice(1)),
                    extras,
                    .25
                )),
                //I don't know why they call it "instance"
                /**
                 * We use a subset of valid identifiers to prevent ambiguity with
                 * `ScopedSystemVariableIdentifier`
                 */
                field("instanceName", skipExpectationCost(.5, consumeUnexpected(
                    identifierNoScopeKeyword,
                    [
                        ...getTokenKinds(reserved),
                        TokenKind.StringLiteral,
                        TokenKind.DoubleQuotedLiteral,
                        TokenKind.GLOBAL,
                        TokenKind.SESSION,
                        TokenKind.LOCAL,
                    ],
                    .5
                ))),
            )
        ),
    ),
    seq(
        useCustomExtra(
            //Don't use any extras, not even CustomExtras.noExtras
            "",
            seq(
                field("atToken", cannotExpect(TokenKind.At)),
                repeatNoSkipIfAllError(consumeUnexpected(
                    tokenSymbol(extras[0], ...extras.slice(1)),
                    extras,
                    .25
                )),
                field("atToken", TokenKind.At),
                repeatNoSkipIfAllError(consumeUnexpected(
                    tokenSymbol(extras[0], ...extras.slice(1)),
                    extras,
                    .25
                )),
                //I don't know why they call it "instance"
                /**
                 * We use a subset of valid identifiers to prevent ambiguity with
                 * `ScopedSystemVariableIdentifier`
                 */
                field("instanceName", greedySkipExpectation(consumeUnexpected(
                    identifierNoScopeKeyword,
                    [
                        ...getTokenKinds(reserved),
                        TokenKind.StringLiteral,
                        TokenKind.DoubleQuotedLiteral,
                        // TokenKind.GLOBAL,
                        // TokenKind.SESSION,
                        // TokenKind.LOCAL,
                    ],
                    .5
                ))),
            )
        ),
        //https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/item_func.cc#L7810
        //https://dev.mysql.com/doc/refman/8.0/en/structured-system-variables.html
        dotIdentOrReservedNoSkipErrors("componentName"),
    )
);

export const UserVariableIdentifier = precedence(Precedence.UserVariableIdentifier, useCustomExtra(
    CustomExtras.noExtras,
    seq(
        field("atToken", cannotExpect(TokenKind.At)),
        omitCost(0.5, optional(field("identifier", identifierOrReservedOrStringLiteralOrHostname))),
    )
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10156
 */
export const UserVariableIdentifierAssignment = precedence(
    5,
    seq(
        field("userVariableIdentifier", alias(
            SyntaxKind.UserVariableIdentifier,
            useCustomExtra(
                CustomExtras.noExtras,
                seq(
                    field("atToken", TokenKind.At),
                    field("identifier", greedySkipExpectation(identifierOrReservedOrStringLiteralOrHostname)),
                )
            )
        )),
        field("colonEqual", SyntaxKind.ColonEqual),
        field("expression", SyntaxKind.Expression),
    )
);

/**
 * https://github.com/mysql/mysql-server/blob/3e90d07c3578e4da39dc1bce73559bbdf655c28c/sql/gen_lex_token.cc#L289
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12845
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9505
 */
export const ParamMarker = field("questionMarkToken", TokenKind.QuestionMark);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9508
 */
export const ConcatSimpleExpression = precedence(130, seq(
    field("left", SyntaxKind.SimpleExpression),
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9459
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/lex.h#L690
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_lex.cc#L881
     */
    field("operator", cannotExpect(tokenSymbol(
        TokenKind.BarBar_Concat,
    ))),
    field("right", SyntaxKind.SimpleExpression),
));

/**
 * https://dev.mysql.com/doc/refman/5.7/en/row-subqueries.html
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9534-L9538
 */
export const RowSimpleExpression = choice(
    seq(
        field("openParenthesesToken", cannotExpect(TokenKind.OpenParentheses)),
        list2(SyntaxKind.Expression),
        field("closeParenthesesToken", TokenKind.CloseParentheses),
    ),
    fieldLengthCheck(
        "item",
        2,
        Infinity,
        seq(
            field("rowToken", cannotExpect(TokenKind.ROW)),
            field("openParenthesesToken", TokenKind.OpenParentheses),
            list(SyntaxKind.Expression),
            field("closeParenthesesToken", TokenKind.CloseParentheses),
        )
    )
);
