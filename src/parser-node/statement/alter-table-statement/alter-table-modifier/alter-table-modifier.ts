import {Node} from "../../../node";
import {SyntaxKind} from "../../../syntax-kind.generated";
import {AlterTableAlgorithm, AlterTableLock} from "../../create-index-statement";
import {AlterTableValidation} from "./alter-table-validation";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8360
 */
export type AlterTableModifier =
    | AlterTableLock
    | AlterTableAlgorithm
    | AlterTableValidation
;

export interface AlterTableModifiers extends Node {
    syntaxKind : SyntaxKind.AlterTableModifiers,

    alterTableLock : AlterTableLock,

    alterTableAlgorithm : AlterTableAlgorithm,

    /**
     * Defaults to `WITHOUT VALIDATION`
     *
     * https://dev.mysql.com/doc/refman/5.7/en/alter-table-generated-columns.html
     *
     * > With `WITHOUT VALIDATION` (the default if neither clause is specified),
     */
    alterTableValidation : AlterTableValidation,
}
