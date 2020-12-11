import {IntegerLiteral, StringLiteral} from "../../expression";
import {Identifier} from "../../identifier";
import {Node, ValueNode} from "../../node";
import {NodeArray} from "../../node-array";
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

export interface IndexDefinition extends CreateTableDefinition {
    syntaxKind : SyntaxKind.IndexDefinition;

    constraintName : Identifier|undefined;

    indexClass : IndexClass;
    indexName : Identifier|undefined;
    indexParts : NodeArray<IndexPart>;

    /**
     * BTREE is the default
     */
    indexType : IndexType|undefined;
    keyBlockSize : IntegerLiteral|undefined;
    comment : StringLiteral|undefined;
    withParser : Identifier|undefined;

}
