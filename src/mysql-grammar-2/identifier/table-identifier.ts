import {choice, field, seq} from "../../grammar-builder";
import {tuple} from "../rule-util";
import {SyntaxKind} from "../syntax-kind.generated";
import {TokenKind} from "../token.generated";

export const TableIdentifier = choice(
    field("tableName", SyntaxKind.Ident),
    seq(
        field("schemaName", SyntaxKind.Ident),
        field("dotToken", TokenKind.Dot),
        field("tableName", SyntaxKind.IdentOrReserved),
    ),
    /**
     * Deprecated.
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13079
     */
    seq(
        field("dotToken", TokenKind.Dot),
        field("tableName", SyntaxKind.IdentOrReserved),
    ),
);

export const TableIdentifierTuple = tuple(SyntaxKind.TableIdentifier);
