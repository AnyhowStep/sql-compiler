import {IntegerLiteral, StringLiteral} from "../../expression";
import {Identifier} from "../../identifier";
import {ValueNode} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {CreateTableDefinition} from "./create-table-definition";
import {IndexPartList, IndexType} from "./index-definition";

export interface PrimaryKeyDefinition extends CreateTableDefinition {
    syntaxKind : SyntaxKind.PrimaryKeyDefinition;

    constraintName : Identifier|undefined;

    indexName : Identifier|undefined;
    indexParts : IndexPartList;

    /**
     * BTREE is the default
     */
    indexType : ValueNode<IndexType>|undefined;
    keyBlockSize : IntegerLiteral|undefined;
    comment : StringLiteral|undefined;
    withParser : Identifier|undefined;
}
