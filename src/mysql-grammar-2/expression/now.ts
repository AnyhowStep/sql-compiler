import {field, optional, seq, tokenSymbol} from "../../grammar-builder";
import {parentheses} from "../rule-util";
import {SyntaxKind} from "../syntax-kind.generated";
import {TokenKind} from "../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6993
 */
export const Now = seq(
    field("nowToken", tokenSymbol(
        TokenKind.CURRENT_TIMESTAMP,
        TokenKind.NOW,
        TokenKind.LOCALTIME,
        TokenKind.LOCALTIMESTAMP
    )),
    field("dateTimePrecisionArg", optional(SyntaxKind.DateTimePrecisionArg)),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6825
 */
export const DateTimePrecisionArg = parentheses(optional(
    field("dateTimePrecision", TokenKind.IntegerLiteral),
));
