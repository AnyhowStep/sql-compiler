import {Identifier} from "../../identifier";
import {NodeArray} from "../../node-array";
import {SyntaxKind} from "../../syntax-kind.generated";
import {CreateTableDefinition} from "./create-table-definition";
import {ForeignKeyReferenceDefinition} from "./foreign-key-reference-definition";

export interface ForeignKeyDefinition extends CreateTableDefinition {
    syntaxKind : SyntaxKind.ForeignKeyDefinition;

    constraintName : Identifier|undefined;
    indexName : Identifier|undefined;
    columns : NodeArray<Identifier>;

    foreignKeyReferenceDefinition : ForeignKeyReferenceDefinition,
}
