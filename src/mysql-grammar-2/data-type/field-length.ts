import {choice, field} from "../../grammar-builder";
import {parentheses} from "../rule-util";
import {TokenKind} from "../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6851
 */
export const FieldLength = parentheses(
    field("fieldLength", choice(
        TokenKind.IntegerLiteral,
        TokenKind.DecimalLiteral,
    ))
);
