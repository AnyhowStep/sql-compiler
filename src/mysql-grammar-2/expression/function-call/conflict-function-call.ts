/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9837
 */

import {cannotExpect, choice, field, inline, seq, tokenSymbol} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9838
 */
export const AsciiFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.ASCII))),
    field("arguments", SyntaxKind.Expression1_Arguments),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9842
 */
export const CharSetFunctionCall = seq(
    field("functionName", cannotExpect(tokenSymbol(TokenKind.CHARSET))),
    field("arguments", SyntaxKind.Expression1_Arguments),
);

export const ConflictFunctionCall = inline(choice(
    SyntaxKind.AsciiFunctionCall,
    SyntaxKind.CharSetFunctionCall,
));
