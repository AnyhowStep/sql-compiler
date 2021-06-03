import {alias, cannotExpect, choice, field, optional, precedence, seq, tokenSymbol} from "../../grammar-builder";
import {parentheses, tuple1} from "../rule-util";
import {SyntaxKind} from "../syntax-kind.generated";
import {TokenKind} from "../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9272-L9292
 */
export const IsExpression = seq(
    field("left", SyntaxKind.BooleanPrimaryExpression),
    field("isToken", cannotExpect(TokenKind.IS)),
    field("notToken", optional(TokenKind.NOT)),
    field("right", tokenSymbol(
        TokenKind.TRUE,
        TokenKind.FALSE,
        TokenKind.UNKNOWN,
    )),
);

export const NotExpression = seq(
    field("notToken", cannotExpect(TokenKind.NOT)),
    field("expression", SyntaxKind.Expression),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9250
 *
 * @todo
 */
export const Expression = choice(
    SyntaxKind.BooleanPrimaryExpression,
    SyntaxKind.IsExpression,
    SyntaxKind.NotExpression,
    alias("BinaryExpression", seq(
        field("left", SyntaxKind.Expression),
        field("operator", cannotExpect(tokenSymbol(
            TokenKind.OR,
            TokenKind.BarBar,
        ))),
        field("right", SyntaxKind.Expression),
    )),
    alias("BinaryExpression", precedence(10, seq(
        field("left", SyntaxKind.Expression),
        field("operator", cannotExpect(tokenSymbol(
            TokenKind.XOR,
        ))),
        field("right", SyntaxKind.Expression),
    ))),
    alias("BinaryExpression", precedence(20, seq(
        field("left", SyntaxKind.Expression),
        field("operator", cannotExpect(tokenSymbol(
            TokenKind.AND,
            TokenKind.AmpersandAmpersand,
        ))),
        field("right", SyntaxKind.Expression),
    ))),
);

export const ExpressionTuple1 = tuple1(SyntaxKind.Expression);

export const ParenthesizedExpression = parentheses(
    field("item", SyntaxKind.Expression)
);
