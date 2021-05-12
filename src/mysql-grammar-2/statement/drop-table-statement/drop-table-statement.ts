import {choice, field, optional, seq} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L11147
 */
export const DropTableStatement = seq(
    field("dropToken", TokenKind.DROP),
    field("temporaryToken", optional(TokenKind.TEMPORARY)),
    field("tableToken", choice(TokenKind.TABLE, TokenKind.TABLES)),
    field("ifExists", optional(SyntaxKind.IfExists)),
    field("tableIdentifierList1", SyntaxKind.TableIdentifierList1),
    field("dropMode", optional(SyntaxKind.DropMode)),
);
