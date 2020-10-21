import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";
import {Identifier} from "./identifier";

export interface ColumnIdentifier extends Node {
    syntaxKind : SyntaxKind.ColumnIdentifier,
    schemaName : Identifier|undefined,
    tableName : Identifier|undefined,
    columnName : Identifier,
}

export interface QualifiedColumnIdentifier extends Node {
    syntaxKind : SyntaxKind.ColumnIdentifier,
    schemaName : Identifier|undefined,
    tableName : Identifier,
    columnName : Identifier,
}
