import {Node} from "../node";
import {NodeArray2} from "../node-array";
import {SyntaxKind} from "../syntax-kind.generated";
import {Identifier} from "./identifier";

export interface TableIdentifier extends Node {
    syntaxKind : SyntaxKind.TableIdentifier,
    schemaName : Identifier|undefined,
    tableName : Identifier,
}

export interface TableIdentifierLike extends Node {
    schemaName : Identifier|undefined,
    tableName : Identifier,
}

export interface TableIdentifierList extends NodeArray2<SyntaxKind.TableIdentifierList, TableIdentifier> {

}
