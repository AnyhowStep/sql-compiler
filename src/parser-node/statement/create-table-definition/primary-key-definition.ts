import {IntegerLiteral, StringLiteral} from "../../expression";
import {Identifier} from "../../identifier";
import {ValueNode} from "../../node";
import {NodeArray} from "../../node-array";
import {SyntaxKind} from "../../syntax-kind.generated";
import {CreateTableDefinition} from "./create-table-definition";
import {IndexPart, IndexType} from "./index-definition";

export interface PrimaryKeyDefinition extends CreateTableDefinition {
    syntaxKind : SyntaxKind.PrimaryKeyDefinition;

    constraintName : Identifier|undefined;

    indexName : Identifier|undefined;
    indexParts : NodeArray<IndexPart>;

    /**
     * BTREE is the default
     */
    indexType : ValueNode<IndexType>|undefined;
    keyBlockSize : IntegerLiteral|undefined;
    comment : StringLiteral|undefined;
    withParser : Identifier|undefined;
}
