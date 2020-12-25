import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";
import {Identifier} from "./identifier";

/**
 * Stored functions and stored procedures have different namespaces
 */
export interface StoredProcedureIdentifier extends Node {
    syntaxKind : SyntaxKind.StoredProcedureIdentifier,
    schemaName : Identifier|undefined,
    storedProcedureName : Identifier,
}

export interface StoredProcedureIdentifierLike extends Node {
    schemaName : Identifier|undefined,
    storedProcedureName : Identifier,
}
