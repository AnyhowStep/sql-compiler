import {Identifier, IdentifierList} from "../../identifier";
import {SyntaxKind} from "../../syntax-kind.generated";
import {CreateTableDefinition} from "./create-table-definition";
import {ForeignKeyReferenceDefinition} from "./foreign-key-reference-definition";

export interface ForeignKeyDefinition extends CreateTableDefinition {
    syntaxKind : SyntaxKind.ForeignKeyDefinition;

    constraintName : Identifier|undefined;
    indexName : Identifier|undefined;
    columns : IdentifierList;

    foreignKeyReferenceDefinition : ForeignKeyReferenceDefinition,
}
