import {inline, tokenSymbol} from "../../grammar-builder";
import {TokenKind} from "../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9469-L9472
 */
export const Not = inline(tokenSymbol(
    TokenKind.NOT,
    /**
     * This is a hack for `HIGH_NOT_PRECEDENCE`
     */
    TokenKind.NOT2,
));
