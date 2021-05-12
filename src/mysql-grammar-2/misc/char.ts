import {tokenSymbol} from "../../grammar-builder";
import {TokenKind} from "../token.generated";

/**
 * The `CHAR_SYM` can be `CHAR` or `CHARACTER`
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6756
 */
export const Char = tokenSymbol(
    TokenKind.CHAR,
    TokenKind.CHARACTER,
);
