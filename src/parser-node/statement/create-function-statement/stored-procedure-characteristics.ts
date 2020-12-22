import {StringLiteral} from "../../expression";
import {Node, ValueNode} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

export enum DatabaseAccessCharacteristic {
    NO_SQL,
    CONTAINS_SQL,
    READS_SQL_DATA,
    MODIFIES_SQL_DATA,
}

export enum StoredProcedureSecurityContext {
    DEFINER,
    INVOKER,
}

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2708
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2732
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2726
 */
export interface StoredProcedureCharacteristics extends Node {
    syntaxKind : SyntaxKind.StoredProcedureCharacteristics,

    comment : StringLiteral|undefined,

    /**
     * There is only one language
     */
    language : ValueNode<"SQL">|undefined,

    /**
     * > https://dev.mysql.com/doc/refman/5.7/en/create-procedure.html
     *
     * Several characteristics provide information about the nature of data use by the routine.
     * In MySQL, these characteristics are advisory only.
     * The server does not use them to constrain what kinds of statements a routine is permitted to execute.
     */
    databaseAccessCharacteristic : ValueNode<DatabaseAccessCharacteristic>|undefined,

    /**
     * Defaults to `false`
     */
    deterministic : ValueNode<boolean>,

    /**
     * Defaults to `DEFINER`
     */
    storedProcedureSecurityContext : ValueNode<StoredProcedureSecurityContext>,
}
