import {IntegerLiteral, StringLiteral} from "../../expression";
import {Identifier} from "../../identifier";
import {Node} from "../../node";
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
    columnName : Identifier;
    indexLength : IntegerLiteral|undefined;
    /**
     * Default `ASC`.
     * For now, parsed but never used. Always `ASC`.
     */
    sortDirection : SortDirection;
}

export interface IndexDefinition extends CreateTableDefinition {
    syntaxKind : SyntaxKind.IndexDefinition;

    indexClass : IndexClass;
    indexName : Identifier;
    indexParts : NodeArray<IndexPart>;

    indexType : IndexType;
    keyBlockSize : IntegerLiteral|undefined;
    comment : StringLiteral|undefined;
    withParser : Identifier|undefined;

}
