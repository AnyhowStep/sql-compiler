import {alias, choice, field, seq, cannotExpect, tokenSymbol} from "../../grammar-builder";
import {tuple1} from "../rule-util";
import {SyntaxKind} from "../syntax-kind.generated";
import {TokenKind} from "../token.generated";

export const BitExpressionTuple1 = tuple1(SyntaxKind.BitExpression);

export const BitExpressionTuple1Tuple1 = tuple1(SyntaxKind.BitExpressionTuple1);

export const BitwiseXor = choice(
    SyntaxKind.SimpleExpression,
    alias("BinaryBitExpression", seq(
        field("left", SyntaxKind.BitwiseXor),
        field("operator", cannotExpect(TokenKind.Caret)),
        field("right", SyntaxKind.SimpleExpression),
    )),
);

export const MulDivMod = choice(
    SyntaxKind.BitwiseXor,
    alias("BinaryBitExpression", seq(
        field("left", SyntaxKind.MulDivMod),
        field("operator", cannotExpect(tokenSymbol(
            TokenKind.Asterisk,
            TokenKind.Slash,
            TokenKind.DIV,
            TokenKind.Percent,
            TokenKind.MOD,
        ))),
        field("right", SyntaxKind.BitwiseXor),
    )),
);

export const PlusMinus = choice(
    SyntaxKind.MulDivMod,
    alias("BinaryBitExpression", seq(
        field("left", SyntaxKind.PlusMinus),
        field("operator", cannotExpect(tokenSymbol(
            TokenKind.Plus,
            TokenKind.Minus,
        ))),
        field("right", SyntaxKind.MulDivMod),
    )),
    alias("BinaryBitExpression", seq(
        field("left", SyntaxKind.PlusMinus),
        field("operator", cannotExpect(tokenSymbol(
            TokenKind.Plus,
            TokenKind.Minus,
        ))),
        field("right", SyntaxKind.IntervalExpression),
    )),
);

export const BitwiseShift = choice(
    SyntaxKind.PlusMinus,
    alias("BinaryBitExpression", seq(
        field("left", SyntaxKind.BitwiseShift),
        field("operator", cannotExpect(tokenSymbol(
            TokenKind.GreaterGreater,
            TokenKind.LessLess,
        ))),
        field("right", SyntaxKind.PlusMinus),
    )),
);

export const BitwiseAnd = choice(
    SyntaxKind.BitwiseShift,
    alias("BinaryBitExpression", seq(
        field("left", SyntaxKind.BitwiseAnd),
        field("operator", cannotExpect(tokenSymbol(
            TokenKind.Ampersand,
        ))),
        field("right", SyntaxKind.BitwiseShift),
    )),
);

export const BitwiseOr = choice(
    SyntaxKind.BitwiseAnd,
    alias("BinaryBitExpression", seq(
        field("left", SyntaxKind.BitwiseOr),
        field("operator", cannotExpect(tokenSymbol(
            TokenKind.Bar,
        ))),
        field("right", SyntaxKind.BitwiseAnd),
    )),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9399
 *
 * @todo
 */
export const BitExpression = SyntaxKind.BitwiseOr;
