import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";
import {Identifier} from "./identifier";

/**
 * Stored procedures and stored functions both use this.
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
