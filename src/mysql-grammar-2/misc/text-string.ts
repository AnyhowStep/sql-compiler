import {tokenSymbol2} from "../../grammar-builder";
import {stringLiteral, tuple1} from "../rule-util";
import {SyntaxKind} from "../syntax-kind.generated";
import {TokenKind} from "../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7488
 */
export const TextStringTuple1 = tuple1(SyntaxKind.TextString);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12820
 */
export const TextString = tokenSymbol2(
    stringLiteral,
    TokenKind.HexLiteral,
    TokenKind.BitLiteral,
);
