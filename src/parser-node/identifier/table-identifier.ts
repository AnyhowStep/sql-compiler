import {Node} from "../node";
import {SyntaxKind} from "../syntax-kind.generated";
import {Identifier} from "./identifier";

export interface TableIdentifier extends Node {
    schemaName : Identifier|undefined,
    syntaxKind : SyntaxKind.TableIdentifier,
    tableName : Identifier,
}

export interface TableIdentifierLike extends Node {
    schemaName : Identifier|undefined,
    tableName : Identifier,
}