import {Identifier} from "../../identifier";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TableReference} from "./table-reference";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10404
 *
 * ```sql
 *  SELECT
 *      1
 *  FROM
 *      { lmao
 *          (
 *              SELECT 2
 *          ) AS x
 *          INNER JOIN
 *          (
 *              SELECT 3
 *          ) AS y
 *      };
 * ```
 */
export interface OdbcTableReference extends Node {
    syntaxKind : SyntaxKind.OdbcTableReference,

    /**
     * Typically the value `oj`.
     *
     * https://docs.microsoft.com/en-us/sql/odbc/reference/appendixes/outer-join-escape-sequence?view=sql-server-ver15
     *
     * https://docs.microsoft.com/en-us/sql/odbc/reference/develop-app/outer-joins?view=sql-server-ver15
     */
    identifier : Identifier,

    tableReference : TableReference,
}
