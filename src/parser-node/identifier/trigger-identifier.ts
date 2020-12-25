import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";
import {Identifier} from "./identifier";

/**
 * Stored functions, stored procedures, and triggers have different namespaces
 */
export interface TriggerIdentifier extends Node {
    syntaxKind : SyntaxKind.TriggerIdentifier,
    schemaName : Identifier|undefined,
    triggerName : Identifier,
}

export interface TriggerIdentifierLike extends Node {
    schemaName : Identifier|undefined,
    triggerName : Identifier,
}
