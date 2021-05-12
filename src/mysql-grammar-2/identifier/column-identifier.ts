import {choice, field, seq} from "../../grammar-builder";
import {SyntaxKind} from "../syntax-kind.generated";
import {TokenKind} from "../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13026
 */
export const ColumnIdentifier = choice(
    field("columnName", SyntaxKind.Ident),
    seq(
        field("tableName", SyntaxKind.Ident),
        field("dotToken", TokenKind.Dot),
        field("columnName", SyntaxKind.IdentOrReserved),
    ),
    seq(
        field("schemaName", SyntaxKind.Ident),
        field("dotToken", TokenKind.Dot),
        field("tableName", SyntaxKind.IdentOrReserved),
        field("dotToken", TokenKind.Dot),
        field("columnName", SyntaxKind.IdentOrReserved),
    ),
    /**
     * Deprecated.
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13054
     */
    seq(
        field("dotToken", TokenKind.Dot),
        field("columnName", SyntaxKind.IdentOrReserved),
    ),
);
