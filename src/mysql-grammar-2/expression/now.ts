import {allowedSyntaxKinds, field, fieldLengthCheck, optional, repeat, seq, tokenSymbol} from "../../grammar-builder";
import {itemSeparator, parentheses} from "../rule-util";
import {SyntaxKind} from "../syntax-kind.generated";
import {TokenKind} from "../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6993
 */
export const Now = seq(
    field("functionName", tokenSymbol(
        TokenKind.CURRENT_TIMESTAMP,
        TokenKind.NOW,
        TokenKind.LOCALTIME,
        TokenKind.LOCALTIMESTAMP
    )),
    field("arguments", optional(SyntaxKind.DateTimePrecisionArg)),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6825
 */
export const DateTimePrecisionArg = fieldLengthCheck(
    "extraItem",
    0,
    0,
    parentheses(optional(seq(
        field("dateTimePrecision", allowedSyntaxKinds(
            [TokenKind.IntegerLiteral],
            SyntaxKind.Expression
        )),
        repeat(seq(
            field("commaToken", itemSeparator),
            field("extraItem", SyntaxKind.Expression),
        )),
    )))
);
