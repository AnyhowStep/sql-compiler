import {field, inline, repeat1, tokenSymbol} from "../../grammar-builder";
import {SyntaxKind} from "../syntax-kind.generated";
import {TokenKind} from "../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6840
 */
export const IntegerDataTypeOptionRepeat1 = repeat1(field("item", SyntaxKind.IntegerDataTypeOption));

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6845
 */
export const IntegerDataTypeOption = inline(tokenSymbol(
    TokenKind.UNSIGNED,
    TokenKind.SIGNED,
    TokenKind.ZEROFILL,
));
