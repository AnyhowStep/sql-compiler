import {alias, cannotExpect, choice, field, inline, optional, precedence, seq, tokenSymbol} from "../../grammar-builder";
import {parentheses, tuple1} from "../rule-util";
import {SyntaxKind} from "../syntax-kind.generated";
import {TokenKind} from "../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9272-L9292
 */
export const IsExpression = precedence(60, seq(
    field("left", SyntaxKind.BooleanPrimaryExpression),
    field("isToken", cannotExpect(TokenKind.IS)),
    field("notToken", optional(SyntaxKind.Not)),
    field("right", tokenSymbol(
        TokenKind.TRUE,
        TokenKind.FALSE,
        TokenKind.UNKNOWN,
    )),
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9268
 */
export const NotExpression = precedence(40, seq(
    /**
     * We want to use `TokenKind.NOT` here, not `SyntaxKind.Not`
     */
    field("notToken", cannotExpect(tokenSymbol(TokenKind.NOT))),
    field("expression", SyntaxKind.Expression),
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9250
 *
 * @todo
 */
export const Expression = inline(choice(
    SyntaxKind.BooleanPrimaryExpression,
    SyntaxKind.IsExpression,
    SyntaxKind.NotExpression,
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9251
     */
    alias("BinaryExpression", precedence(10, seq(
        field("left", SyntaxKind.Expression),
        /**
         * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9459
         *
         * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/lex.h#L690
         *
         * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_lex.cc#L881
         *
         * @todo Implement `TokenKind.BarBar_Concat`?
         */
        field("operator", cannotExpect(tokenSymbol(
            TokenKind.OR,
            TokenKind.BarBar,
        ))),
        field("right", SyntaxKind.Expression),
    ))),
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9257
     */
    alias("BinaryExpression", precedence(20, seq(
        field("left", SyntaxKind.Expression),
        field("operator", cannotExpect(tokenSymbol(
            TokenKind.XOR,
        ))),
        field("right", SyntaxKind.Expression),
    ))),
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9262
     */
    alias("BinaryExpression", precedence(30, seq(
        field("left", SyntaxKind.Expression),
        /**
         * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9464
         *
         * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/lex.h#L64
         */
        field("operator", cannotExpect(tokenSymbol(
            TokenKind.AND,
            TokenKind.AmpersandAmpersand,
        ))),
        field("right", SyntaxKind.Expression),
    ))),
));

export const ExpressionTuple1 = tuple1(SyntaxKind.Expression);

export const ParenthesizedExpression = parentheses(
    field("item", SyntaxKind.Expression)
);
