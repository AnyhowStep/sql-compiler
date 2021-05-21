import {cannotExpect, choice, field, optional, seq} from "../../grammar-builder";
import {SyntaxKind} from "../syntax-kind.generated";
import {TokenKind} from "../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9328
 *
 * @todo
 */
export const Predicate = choice(
    SyntaxKind.BitExpression,
    SyntaxKind.InSubQueryPredicate,
    SyntaxKind.InExpressionTuple1Predicate,
    SyntaxKind.BetweenPredicate,
    SyntaxKind.SoundsLikePredicate,
    SyntaxKind.LikePredicate,
    SyntaxKind.RegExpPredicate,
);

export const InSubQueryPredicate = seq(
    field("expression", SyntaxKind.BitExpression),
    field("notToken", optional(TokenKind.NOT)),
    field("inToken", TokenKind.IN),
    field("parenthesizedSelect", SyntaxKind.ParenthesizedSelect),
);

export const InExpressionTuple1Predicate = seq(
    field("expression", SyntaxKind.BitExpression),
    field("notToken", optional(TokenKind.NOT)),
    field("inToken", cannotExpect(TokenKind.IN)),
    field("expressionTuple1", SyntaxKind.ExpressionTuple1),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9360
 */
export const BetweenPredicate = seq(
    field("left", SyntaxKind.BitExpression),
    field("notToken", optional(TokenKind.NOT)),
    field("betweenToken", cannotExpect(TokenKind.BETWEEN)),
    field("middle", SyntaxKind.BitExpression),
    field("andToken", TokenKind.AND),
    field("right", SyntaxKind.Predicate),
);

export const SoundsLikePredicate = seq(
    field("left", SyntaxKind.BitExpression),
    field("soundsToken", cannotExpect(TokenKind.SOUNDS)),
    field("likeToken", TokenKind.LIKE),
    field("right", SyntaxKind.BitExpression),
);

export const LikePredicate = seq(
    field("left", SyntaxKind.BitExpression),
    field("notToken", optional(TokenKind.NOT)),
    field("likeToken", cannotExpect(TokenKind.LIKE)),
    field("right", SyntaxKind.SimpleExpression),
    field("escape", optional(SyntaxKind.LikeEscape)),
);

export const LikeEscape = seq(
    field("escapeToken", TokenKind.ESCAPE),
    field("expression", SyntaxKind.SimpleExpression),
);

export const RegExpPredicate = seq(
    field("left", SyntaxKind.BitExpression),
    field("notToken", optional(TokenKind.NOT)),
    field("regexpToken", cannotExpect(TokenKind.REGEXP)),
    field("right", SyntaxKind.BitExpression),
);
