import {Identifier, TableIdentifier} from "../../identifier";
import {Node} from "../../node";
import {NodeArray} from "../../node-array";
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
    referencedColumns : NodeArray<Identifier>,
    match : ReferenceMatch|undefined,
    onDelete : ReferenceOption|undefined,
    onUpdate : ReferenceOption|undefined,
}
