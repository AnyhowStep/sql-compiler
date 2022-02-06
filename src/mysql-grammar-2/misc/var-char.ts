import {inline, tokenSymbol} from "../../grammar-builder";
import {TokenKind} from "../token.generated";

/**
 * The `VARCHAR` can be `VARCHAR` or `VARCHARACTER`
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6766
 */
export const VarChar = inline(tokenSymbol(
    TokenKind.VARCHAR,
    TokenKind.VARCHARACTER,
));
