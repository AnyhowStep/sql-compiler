import {Join} from "./join";
import {OdbcTableReference} from "./odbc-table-reference";
import {TableFactor} from "./table-factor";
import {TableReferenceList} from "./table-reference-list";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10402
 */
export type TableReference =
    | TableFactor
    | Join
    | OdbcTableReference
    /**
     * Very recursive structure
     * ```sql
     *  SELECT
     *      1
     *  FROM
     *      (T LEFT JOIN U ON TRUE),
     *      (V LEFT JOIN W ON TRUE INNER JOIN (X, Y))
     * ```
     */
    | TableReferenceList
;
