import {field, seq} from "../../grammar-builder";
import {parentheses} from "../rule-util";
import {TokenKind} from "../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6811
 */
export const RealPrecision = parentheses(
    seq(
        field("precision", TokenKind.IntegerLiteral),
        field("commaToken", TokenKind.Comma),
        field("scale", TokenKind.IntegerLiteral),
    ),
);
