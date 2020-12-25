import {IdentifierList, TableIdentifier} from "../../identifier";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

export enum ReferenceMatch {
    FULL,
    PARTIAL,
    SIMPLE,
}
export enum ReferenceOption {
    RESTRICT,
    CASCADE,
    SET_NULL,
    NO_ACTION,
    SET_DEFAULT,
}

export interface ForeignKeyReferenceDefinition extends Node {
    syntaxKind : SyntaxKind.ForeignKeyReferenceDefinition,
    referencedTableName : TableIdentifier,
    /**
     * @todo Make this optional for column def
     */
    referencedColumns : IdentifierList,
    /**
     * https://dev.mysql.com/doc/refman/5.7/en/constraint-foreign-key.html
     *
     * MATCH FULL, MATCH PARTIAL, and MATCH SIMPLE are allowed, but their use should be avoided,
     * as they cause the MySQL Server to ignore any ON DELETE or ON UPDATE clause used in the same statement.
     *
     * MATCH options do not have any other effect in MySQL,
     * which in effect enforces MATCH SIMPLE semantics full-time.
     */
    match : ReferenceMatch|undefined,
    onDelete : ReferenceOption|undefined,
    onUpdate : ReferenceOption|undefined,
}
