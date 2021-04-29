import {choice, field, leftAssociative, seq, cannotExpect} from "../../grammar-builder";
import {precedence} from "../precedence";
import {tuple1} from "../rule-util";
import {SyntaxKind} from "../syntax-kind.generated";
import {TokenKind} from "../token.generated";

export const BitExpressionTuple1 = tuple1(SyntaxKind.BitExpression);

export const BitExpressionTuple1Tuple1 = tuple1(SyntaxKind.BitExpressionTuple1);

export const BinaryBitExpression = choice(
    leftAssociative(
        precedence.BitwiseOr,
        seq(
            field("left", SyntaxKind.BitExpression),
            field("operator", cannotExpect(TokenKind.Bar)),
            field("right", SyntaxKind.BitExpression),
        )
    ),
    leftAssociative(
        precedence.BitwiseAnd,
        seq(
            field("left", SyntaxKind.BitExpression),
            field("operator", cannotExpect(TokenKind.Ampersand)),
            field("right", SyntaxKind.BitExpression),
        )
    ),
    leftAssociative(
        precedence.BitwiseShift,
        seq(
            field("left", SyntaxKind.BitExpression),
            field("operator", cannotExpect(TokenKind.LessLess)),
            field("right", SyntaxKind.BitExpression),
        )
    ),
    leftAssociative(
        precedence.BitwiseShift,
        seq(
            field("left", SyntaxKind.BitExpression),
            field("operator", cannotExpect(TokenKind.GreaterGreater)),
            field("right", SyntaxKind.BitExpression),
        )
    ),
);
/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9399
 *
 * @todo
 */
export const BitExpression = choice(
    SyntaxKind.BinaryBitExpression,
    SyntaxKind.SimpleExpression,
);
