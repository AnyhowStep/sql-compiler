import {IndexType, TextRange, ValueNode} from "../../parser-node";

export interface IndexTypeNode extends TextRange {
    indexType : ValueNode<IndexType>,
}
