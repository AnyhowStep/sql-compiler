import {alias, choice, field, seq, cannotExpect, tokenSymbol, precedence} from "../../grammar-builder";
import {parentheses, tuple1} from "../rule-util";
import {SyntaxKind} from "../syntax-kind.generated";
import {TokenKind} from "../token.generated";

export const BitExpressionTuple1 = tuple1(SyntaxKind.BitExpression);

export const BitExpressionTuple1Tuple1 = tuple1(SyntaxKind.BitExpressionTuple1);

export const ParenthesizedBitExpression = parentheses(
    field("item", SyntaxKind.BitExpression)
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9399
 *
 * @todo
 */
export const BitExpression = choice(
    SyntaxKind.SimpleExpression,
    alias("BinaryBitExpression", precedence(70, seq(
        field("left", SyntaxKind.BitExpression),
        field("operator", cannotExpect(tokenSymbol(
            TokenKind.Bar,
        ))),
        field("right", SyntaxKind.BitExpression),
    ))),
    alias("BinaryBitExpression", precedence(80, seq(
        field("left", SyntaxKind.BitExpression),
        field("operator", cannotExpect(tokenSymbol(
            TokenKind.Ampersand,
        ))),
        field("right", SyntaxKind.BitExpression),
    ))),
    alias("BinaryBitExpression", precedence(90, seq(
        field("left", SyntaxKind.BitExpression),
        field("operator", cannotExpect(tokenSymbol(
            TokenKind.GreaterGreater,
            TokenKind.LessLess,
        ))),
        field("right", SyntaxKind.BitExpression),
    ))),
    alias("BinaryBitExpression", precedence(100, seq(
        field("left", SyntaxKind.BitExpression),
        field("operator", cannotExpect(tokenSymbol(
            TokenKind.Plus,
            TokenKind.Minus,
        ))),
        field("right", SyntaxKind.BitExpression),
    ))),
    alias("BinaryBitExpression", precedence(100, seq(
        field("left", SyntaxKind.BitExpression),
        field("operator", cannotExpect(tokenSymbol(
            TokenKind.Plus,
            TokenKind.Minus,
        ))),
        field("right", SyntaxKind.IntervalExpression),
    ))),
    alias("BinaryBitExpression", precedence(110, seq(
        field("left", SyntaxKind.BitExpression),
        field("operator", cannotExpect(tokenSymbol(
            TokenKind.Asterisk,
            TokenKind.Slash,
            TokenKind.DIV,
            TokenKind.Percent,
            TokenKind.MOD,
        ))),
        field("right", SyntaxKind.BitExpression),
    ))),
    alias("BinaryBitExpression", precedence(120, seq(
        field("left", SyntaxKind.BitExpression),
        field("operator", cannotExpect(TokenKind.Caret)),
        field("right", SyntaxKind.BitExpression),
    ))),
);
