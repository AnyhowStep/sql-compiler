import {choice, field, seq} from "../../grammar-builder";
import {dotIdentOrReserved, list1, tuple} from "../rule-util";
import {SyntaxKind} from "../syntax-kind.generated";

export const TableIdentifier = choice(
    field("tableName", SyntaxKind.Ident),
    seq(
        field("schemaName", SyntaxKind.Ident),
        dotIdentOrReserved("tableName"),
    ),
    /**
     * Deprecated.
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13079
     */
    dotIdentOrReserved("tableName"),
);

export const TableIdentifierTuple = tuple(SyntaxKind.TableIdentifier);
export const TableIdentifierList1 = list1(SyntaxKind.TableIdentifier);
