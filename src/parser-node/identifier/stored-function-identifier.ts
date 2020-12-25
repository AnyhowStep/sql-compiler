import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";
import {Identifier} from "./identifier";

/**
 * Stored functions and user-defined functions both use this.
 *
 * https://dev.mysql.com/doc/refman/8.0/en/create-procedure.html
 * > Stored functions share their namespace with UDFs.
 *
 * -----
 *
 * Stored functions and stored procedures have different namespaces
 */
export interface StoredFunctionIdentifier extends Node {
    syntaxKind : SyntaxKind.StoredFunctionIdentifier,
    schemaName : Identifier|undefined,
    storedFunctionName : Identifier,
}

export interface StoredFunctionIdentifierLike extends Node {
    schemaName : Identifier|undefined,
    storedFunctionName : Identifier,
}
