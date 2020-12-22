import {ReturnStatement} from "../../stored-procedure-statement";
import {Statement} from "../statement";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L3671
 */
export type StoredProcedureStatement =
    | Statement
    | ReturnStatement
;
