import {cannotExpect, choice, field, optional, precedence, seq, tokenSymbol} from "../../grammar-builder";
import {SyntaxKind} from "../syntax-kind.generated";
import {TokenKind} from "../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9299
 *
 * @todo
 */
export const BooleanPrimaryExpression = choice(
    SyntaxKind.Predicate,
    SyntaxKind.IsNullBooleanPrimaryExpression,
    SyntaxKind.ComparisonBooleanPrimaryExpression,
    SyntaxKind.ComparisonSubQueryBooleanPrimaryExpression,
);

export const IsNullBooleanPrimaryExpression = precedence(60, seq(
    field("expression", SyntaxKind.BooleanPrimaryExpression),
    field("isToken", cannotExpect(TokenKind.IS)),
    field("notToken", optional(SyntaxKind.Not)),
    field("nullToken", TokenKind.NULL),
));

export const ComparisonBooleanPrimaryExpression = precedence(60, seq(
    field("left", SyntaxKind.BooleanPrimaryExpression),
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9479
     */
    field("operator", cannotExpect(tokenSymbol(
        TokenKind.Equal,
        TokenKind.LessEqualGreater,
        TokenKind.GreaterEqual,
        TokenKind.Greater,
        TokenKind.LessEqual,
        TokenKind.Less,
        /**
         * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/lex.h#L67-L68
         */
        TokenKind.LessGreater,
        TokenKind.ExclamationEqual,
    ))),
    field("right", SyntaxKind.Predicate),
));

export const ComparisonSubQueryBooleanPrimaryExpression = precedence(60, seq(
    field("expression", SyntaxKind.BooleanPrimaryExpression),
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9479
     */
    field("operator", cannotExpect(tokenSymbol(
        TokenKind.Equal,
        TokenKind.LessEqualGreater,
        TokenKind.GreaterEqual,
        TokenKind.Greater,
        TokenKind.LessEqual,
        TokenKind.Less,
        /**
         * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/lex.h#L67-L68
         */
        TokenKind.LessGreater,
        TokenKind.ExclamationEqual,
    ))),
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9489
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/lex.h#L560
     */
    field("quantifier", tokenSymbol(TokenKind.ALL, TokenKind.ANY, TokenKind.SOME)),
    field("parenthesizedSelect", SyntaxKind.ParenthesizedSelect),
));
