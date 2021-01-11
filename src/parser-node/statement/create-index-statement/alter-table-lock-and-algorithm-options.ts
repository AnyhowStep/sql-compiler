import {Identifier} from "../../identifier";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

export interface AlterTableLock extends Node {
    syntaxKind : SyntaxKind.AlterTableLock,

    /**
     * Valid identifiers are,
     * + NONE
     * + SHARED
     * + EXCLUSIVE
     *
     * https://dev.mysql.com/doc/refman/5.7/en/alter-table.html#:~:text=for%20alter%20table
     *
     * Defaults to `DEFAULT`
     */
    identifier : Identifier,
}

export interface AlterTableAlgorithm extends Node {
    syntaxKind : SyntaxKind.AlterTableAlgorithm,

    /**
     * Valid identifiers are,
     * + INPLACE
     * + COPY
     *
     * https://dev.mysql.com/doc/refman/5.7/en/alter-table.html#:~:text=algorithm
     *
     * Defaults to `DEFAULT`
     */
    identifier : Identifier,
}

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8366
 *
 */
export interface AlterTableLockAndAlgorithmOptions extends Node {
    syntaxKind : SyntaxKind.AlterTableLockAndAlgorithmOptions,

    alterTableLock : AlterTableLock,

    alterTableAlgorithm : AlterTableAlgorithm,
}
