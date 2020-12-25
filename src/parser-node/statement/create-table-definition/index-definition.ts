import {IntegerLiteral, StringLiteral} from "../../expression";
import {Identifier} from "../../identifier";
import {Node, ValueNode} from "../../node";
import {NodeArray2} from "../../node-array";
import {SortDirection} from "../../sort-direction";
import {SyntaxKind} from "../../syntax-kind.generated";
import {CreateTableDefinition} from "./create-table-definition";

export enum IndexClass {
    INDEX,
    UNIQUE,
    FULLTEXT,
    SPATIAL,
}

export enum IndexType {
    BTREE,
    HASH,
}

export interface IndexPart extends Node {
    syntaxKind : SyntaxKind.IndexPart;

    columnName : Identifier;
    indexLength : IntegerLiteral|undefined;
    /**
     * Default `ASC`.
     * For now, parsed but never used. Always `ASC`.
     */
    sortDirection : ValueNode<SortDirection>;
}

export interface IndexPartList extends NodeArray2<SyntaxKind.IndexPartList, IndexPart> {

}

export interface IndexDefinition extends CreateTableDefinition {
    syntaxKind : SyntaxKind.IndexDefinition;

    constraintName : Identifier|undefined;

    indexClass : IndexClass;
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
