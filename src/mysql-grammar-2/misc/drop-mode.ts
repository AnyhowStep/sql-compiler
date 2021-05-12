import {choice} from "../../grammar-builder";
import {TokenKind} from "../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8415
 */
export const DropMode = choice(
    TokenKind.RESTRICT,
    TokenKind.CASCADE,
);
