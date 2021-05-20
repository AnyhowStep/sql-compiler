import {alias, cannotExpect, choice, field, optional, seq, tokenSymbol} from "../../grammar-builder";
import {tuple1} from "../rule-util";
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

export const And = choice(
    SyntaxKind.UnaryExpressionOrBooleanPrimaryExpression,
    alias("BinaryExpression", seq(
        field("left", SyntaxKind.And),
        field("operator", cannotExpect(tokenSymbol(
            TokenKind.AND,
            TokenKind.AmpersandAmpersand,
        ))),
        field("right", SyntaxKind.UnaryExpressionOrBooleanPrimaryExpression),
    )),
);

export const Xor = choice(
    SyntaxKind.And,
    alias("BinaryExpression", seq(
        field("left", SyntaxKind.Xor),
        field("operator", cannotExpect(tokenSymbol(
            TokenKind.XOR,
        ))),
        field("right", SyntaxKind.And),
    )),
);

export const Or = choice(
    SyntaxKind.Xor,
    alias("BinaryBitExpression", seq(
        field("left", SyntaxKind.Or),
        field("operator", cannotExpect(tokenSymbol(
            TokenKind.OR,
            TokenKind.BarBar,
        ))),
        field("right", SyntaxKind.Xor),
    )),
);

export const UnaryExpressionOrBooleanPrimaryExpression = choice(
    SyntaxKind.BooleanPrimaryExpression,
    SyntaxKind.IsExpression,
    SyntaxKind.NotExpression,
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9250
 *
 * @todo
 */
export const Expression = SyntaxKind.Or;

export const ExpressionTuple1 = tuple1(SyntaxKind.Expression);
