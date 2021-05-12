import {choice, field, optional, seq} from "../../grammar-builder";
import {SyntaxKind} from "../syntax-kind.generated";
import {TokenKind} from "../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7112
 */
export const CharacterDataTypeOption = choice(
    SyntaxKind.CharacterDataTypeOptionAscii,
    SyntaxKind.CharacterDataTypeOptionUnicode,
    SyntaxKind.CharacterDataTypeOptionCharacterSet,
    SyntaxKind.CharacterDataTypeOptionByte,
    SyntaxKind.CharacterDataTypeOptionBinary,
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7085
 */
export const CharacterDataTypeOptionAscii = choice(
    field("asciiToken", TokenKind.ASCII),
    seq(
        field("asciiToken", TokenKind.ASCII),
        field("binaryToken", TokenKind.BINARY),
    ),
    seq(
        field("binaryToken", TokenKind.BINARY),
        field("asciiToken", TokenKind.ASCII),
    ),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7091
 */
export const CharacterDataTypeOptionUnicode = choice(
    field("unicodeToken", TokenKind.UNICODE),
    seq(
        field("unicodeToken", TokenKind.UNICODE),
        field("binaryToken", TokenKind.BINARY),
    ),
    seq(
        field("binaryToken", TokenKind.BINARY),
        field("unicodeToken", TokenKind.UNICODE),
    ),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7133
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7143
 */
export const CharacterDataTypeOptionCharacterSet = choice(
    seq(
        SyntaxKind.CharSet,
        field("characterSetName", SyntaxKind.CharacterSetName),
        field("binaryToken", optional(TokenKind.BINARY)),
    ),
    seq(
        field("binaryToken", TokenKind.BINARY),
        SyntaxKind.CharSet,
        field("characterSetName", SyntaxKind.CharacterSetName),
    ),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7128
 */
export const CharacterDataTypeOptionByte = field("byteToken", TokenKind.BYTE);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7138
 */
export const CharacterDataTypeOptionBinary = field("binaryToken", TokenKind.BINARY);
