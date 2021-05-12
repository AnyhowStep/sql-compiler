import {choice, field, optional, seq, tokenSymbol2} from "../../../grammar-builder";
import {identifier} from "../../rule-util";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6151
 */
export const DefaultCollate = seq(
    field("defaultToken", optional(TokenKind.DEFAULT)),
    field("collateToken", TokenKind.COLLATE),
    field("equalToken", optional(TokenKind.Equal)),
    field("collationName", SyntaxKind.CollationNameOrDefault),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7071
 */
export const CollateExplicit = seq(
    field("collateToken", TokenKind.COLLATE),
    field("collationName", SyntaxKind.CollationName),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7056
 */
export const CollationName = tokenSymbol2(
    identifier,
    TokenKind.StringLiteral,
);

export const CollationNameOrDefault = choice(
    TokenKind.DEFAULT,
    SyntaxKind.CollationName,
);
