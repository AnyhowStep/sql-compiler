import {choice, field, seq} from "../../grammar-builder";
import {dotIdentOrReserved} from "../rule-util";
import {SyntaxKind} from "../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13026
 */
export const ColumnIdentifier = choice(
    field("columnName", SyntaxKind.Ident),
    seq(
        field("tableName", SyntaxKind.Ident),
        dotIdentOrReserved("columnName"),
    ),
    seq(
        field("schemaName", SyntaxKind.Ident),
        dotIdentOrReserved("tableName"),
        dotIdentOrReserved("columnName"),
    ),
    /**
     * Deprecated.
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13054
     */
    dotIdentOrReserved("columnName"),
);
