import {choice, consumeUnexpected, field, inline, precedence, repeat1, seq, tokenSymbol, tokenSymbol2} from "../../grammar-builder";
import {Precedence} from "../precedence";
import {stringLiteral} from "../rule-util";
import {SyntaxKind} from "../syntax-kind.generated";
import {TokenKind} from "../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12867
 */
export const Literal = inline(choice(
    SyntaxKind.TextLiteral,
    SyntaxKind.NumberLiteral,
    SyntaxKind.TemporalLiteral,
    /**
     * @todo Make the first token a dummy `TokenKind.Expr`?
     */
    tokenSymbol(
        TokenKind.NULL,
        TokenKind.FALSE,
        TokenKind.TRUE,
        TokenKind.HexLiteral,
        TokenKind.BitLiteral,
    ),
    SyntaxKind.UnderscoreCharacterSetHexLiteral,
    SyntaxKind.UnderscoreCharacterSetBitLiteral,
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12797
 */
export const TextLiteral = inline(choice(
    //We want `TokenKind.StringLiteral` here.
    //We do not want `TokenKind.DoubleQuotedLiteral` in this rule.
    TokenKind.StringLiteral,
    TokenKind.NationalStringLiteral,
    SyntaxKind.UnderscoreCharacterSetStringLiteral,
    SyntaxKind.ConcatenatedTextLiteral,
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12813
 */
export const ConcatenatedTextLiteral = precedence(Precedence.ConcatenatedTextLiteral, seq(
    field("item", choice(
        tokenSymbol2(
            stringLiteral,
            TokenKind.NationalStringLiteral,
        ),
        //Hex and Bit literals not allowed here
        SyntaxKind.UnderscoreCharacterSetStringLiteral,
    )),
    repeat1(field("item", stringLiteral)),
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12910
 */
export const NumberLiteral = inline(consumeUnexpected(
    tokenSymbol(
        TokenKind.IntegerLiteral,
        TokenKind.RealLiteral,
        TokenKind.DecimalLiteral,
    ),
    [
        TokenKind.MalformedRealLiteral
    ]
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12934
 */
export const TemporalLiteral = precedence(Precedence.TemporalLiteral, seq(
    field("temporalToken", tokenSymbol(
        TokenKind.TIMESTAMP,
        TokenKind.DATE,
        TokenKind.TIME,
    )),
    field("str", stringLiteral),
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12900
 */
export const UnderscoreCharacterSetHexLiteral = seq(
    field("underscoreCharacterSetToken", TokenKind.UnderscoreCharacterSet),
    field("hexLiteralToken", TokenKind.HexLiteral),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12904
 */
export const UnderscoreCharacterSetBitLiteral = seq(
    field("underscoreCharacterSetToken", TokenKind.UnderscoreCharacterSet),
    field("bitLiteralToken", TokenKind.BitLiteral),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12808
 */
export const UnderscoreCharacterSetStringLiteral = seq(
    field("underscoreCharacterSetToken", TokenKind.UnderscoreCharacterSet),
    field("stringLiteralToken", stringLiteral),
);
