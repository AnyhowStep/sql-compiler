import {choice, field, inline, optional, seq, tokenSymbol2} from "../../../grammar-builder";
import {identifierOrStringLiteral} from "../../rule-util";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

export const DefaultCharacterSet = seq(
    field("defaultToken", optional(TokenKind.DEFAULT)),
    SyntaxKind.CharSet,
    field("equalToken", optional(TokenKind.Equal)),
    field("characterSetName", SyntaxKind.CharacterSetNameOrDefault),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7016
 */
export const CharacterSetName = inline(tokenSymbol2(
    identifierOrStringLiteral,
    TokenKind.BINARY,
));

export const CharacterSetNameOrDefault = inline(choice(
    TokenKind.DEFAULT,
    SyntaxKind.CharacterSetName,
));

export const CharSet = inline(choice(
    seq(
        field("characterSetToken", TokenKind.CHARACTER),
        field("characterSetToken", TokenKind.SET)
    ),
    field("characterSetToken", TokenKind.CHARSET),
));
