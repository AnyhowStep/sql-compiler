import {choice, field, precedence, repeat1, seq} from "../../grammar-builder";
import {Precedence} from "../precedence";
import {SyntaxKind} from "../syntax-kind.generated";
import {TokenKind} from "../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12867
 */
export const Literal = choice(
    SyntaxKind.TextLiteral,
    SyntaxKind.NumberLiteral,
    SyntaxKind.TemporalLiteral,
    TokenKind.NULL,
    TokenKind.FALSE,
    TokenKind.TRUE,
    TokenKind.HexLiteral,
    TokenKind.BitLiteral,
    SyntaxKind.UnderscoreCharacterSetHexLiteral,
    SyntaxKind.UnderscoreCharacterSetBitLiteral,
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12797
 */
export const TextLiteral = choice(
    TokenKind.StringLiteral,
    TokenKind.NationalStringLiteral,
    SyntaxKind.UnderscoreCharacterSetStringLiteral,
    SyntaxKind.ConcatenatedTextLiteral,
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12813
 */
export const ConcatenatedTextLiteral = precedence(Precedence.ConcatenatedTextLiteral, seq(
    field("item", choice(
        TokenKind.StringLiteral,
        TokenKind.NationalStringLiteral,
        SyntaxKind.UnderscoreCharacterSetStringLiteral,
    )),
    repeat1(field("item", TokenKind.StringLiteral)),
));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12910
 */
export const NumberLiteral = choice(
    TokenKind.IntegerLiteral,
    TokenKind.RealLiteral,
    TokenKind.DecimalLiteral,
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12934
 */
export const TemporalLiteral = seq(
    field("temporalToken", choice(
        TokenKind.DATE,
        TokenKind.TIME,
        TokenKind.TIMESTAMP,
    )),
    field("str", TokenKind.StringLiteral),
);

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
    field("stringLiteralToken", TokenKind.StringLiteral),
);
