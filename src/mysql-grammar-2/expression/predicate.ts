import {cannotExpect, choice, field, inline, optional, precedence, seq} from "../../grammar-builder";
import {SyntaxKind} from "../syntax-kind.generated";
import {TokenKind} from "../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9328
 *
 * @todo
 */
export const Predicate = inline(choice(
    SyntaxKind.BitExpression,
    SyntaxKind.InSubQueryPredicate,
    SyntaxKind.InExpressionTuple1Predicate,
    SyntaxKind.BetweenPredicate,
    SyntaxKind.SoundsLikePredicate,
    SyntaxKind.LikePredicate,
    SyntaxKind.RegExpPredicate,
));

export const InSubQueryPredicate = precedence(60, seq(
    field("expression", SyntaxKind.BitExpression),
    field("notToken", optional(SyntaxKind.Not)),
    field("inToken", cannotExpect(TokenKind.IN)),
    field("parenthesizedSelect", SyntaxKind.ParenthesizedSelect),
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9338-L9353
 */
export const InExpressionTuple1Predicate = precedence(60, seq(
    field("expression", SyntaxKind.BitExpression),
    field("notToken", optional(SyntaxKind.Not)),
    field("inToken", cannotExpect(TokenKind.IN)),
    field("expressionTuple1", SyntaxKind.ExpressionTuple1),
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9360
 */
export const BetweenPredicate = precedence(50, seq(
    field("left", SyntaxKind.BitExpression),
    field("notToken", optional(SyntaxKind.Not)),
    field("betweenToken", cannotExpect(TokenKind.BETWEEN)),
    field("middle", SyntaxKind.BitExpression),
    field("andToken", TokenKind.AND),
    field("right", SyntaxKind.Predicate),
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9368
 */
export const SoundsLikePredicate = precedence(60, seq(
    field("left", SyntaxKind.BitExpression),
    field("soundsToken", cannotExpect(TokenKind.SOUNDS)),
    field("likeToken", TokenKind.LIKE),
    field("right", SyntaxKind.BitExpression),
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9376-L9380
 */
export const LikePredicate = precedence(60, seq(
    field("left", SyntaxKind.BitExpression),
    field("notToken", optional(SyntaxKind.Not)),
    field("likeToken", cannotExpect(TokenKind.LIKE)),
    field("right", SyntaxKind.SimpleExpression),
    field("escape", optional(SyntaxKind.LikeEscape)),
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9376
 */
export const LikeEscape = seq(
    field("escapeToken", TokenKind.ESCAPE),
    field("expression", SyntaxKind.SimpleExpression),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9387-L9391
 */
export const RegExpPredicate = precedence(60, seq(
    field("left", SyntaxKind.BitExpression),
    field("notToken", optional(SyntaxKind.Not)),
    field("regexpToken", cannotExpect(TokenKind.REGEXP)),
    field("right", SyntaxKind.BitExpression),
));
