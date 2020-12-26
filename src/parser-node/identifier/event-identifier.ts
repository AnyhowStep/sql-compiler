import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";
import {Identifier} from "./identifier";

/**
 * Stored functions, stored procedures, triggers, and events have different namespaces
 */
export interface EventIdentifier extends Node {
    syntaxKind : SyntaxKind.EventIdentifier,
    schemaName : Identifier|undefined,
    eventName : Identifier,
}

export interface EventIdentifierLike extends Node {
    schemaName : Identifier|undefined,
    eventName : Identifier,
}
