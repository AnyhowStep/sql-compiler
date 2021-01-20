import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";
import {Identifier} from "./identifier";

export interface QualifiedColumnIdentifier extends Node {
    syntaxKind : SyntaxKind.ColumnIdentifier,
    schemaName : Identifier|undefined,
    tableName : Identifier,
    columnName : Identifier,
}

export interface UnqualifiedColumnIdentifier extends Node {
    syntaxKind : SyntaxKind.ColumnIdentifier,
    schemaName : undefined,
    tableName : undefined,
    columnName : Identifier,
}

export type ColumnIdentifier =
    | QualifiedColumnIdentifier
    | UnqualifiedColumnIdentifier
;
