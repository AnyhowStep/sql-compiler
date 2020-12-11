import {Identifier, IndexType, IntegerLiteral, StringLiteral, TextRange, ValueNode} from "../../parser-node";

export interface IndexOption extends TextRange {
    indexType : ValueNode<IndexType>|undefined;
    keyBlockSize : IntegerLiteral|undefined;
    comment : StringLiteral|undefined;
    withParser : Identifier|undefined;
}
