import {Identifier, IndexType, IntegerLiteral, StringLiteral, TextRange} from "../../parser-node";

export interface IndexOption extends TextRange {
    indexType : IndexType|undefined;
    keyBlockSize : IntegerLiteral|undefined;
    comment : StringLiteral|undefined;
    withParser : Identifier|undefined;
}
