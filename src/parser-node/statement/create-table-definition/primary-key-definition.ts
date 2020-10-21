import {IntegerLiteral, StringLiteral} from "../../expression";
import {Identifier} from "../../identifier";
import {NodeArray} from "../../node-array";
import {SyntaxKind} from "../../syntax-kind.generated";
import {CreateTableDefinition} from "./create-table-definition";
import {IndexPart, IndexType} from "./index-definition";

export interface PrimaryKeyDefinition extends CreateTableDefinition {
    syntaxKind : SyntaxKind.PrimaryKeyDefinition;

    indexParts : NodeArray<IndexPart>;

    indexType : IndexType;
    keyBlockSize : IntegerLiteral|undefined;
    comment : StringLiteral|undefined;
    withParser : Identifier|undefined;
}
