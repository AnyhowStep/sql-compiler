import {Identifier, IndexType, IntegerLiteral, StringLiteral, SyntacticErrorContainer, TextRange, ValueNode} from "../../parser-node";

export interface IndexOptions extends TextRange {
    indexType : ValueNode<IndexType>|undefined;
    keyBlockSize : IntegerLiteral|undefined;
    comment : StringLiteral|undefined;
    withParser : Identifier|undefined;
}

type MakeIndexOption<T, K extends keyof T = Exclude<keyof T, keyof TextRange>> =
    K extends keyof T ?
    Pick<T, K> :
    never
;

export type IndexOption = MakeIndexOption<IndexOptions> & TextRange & SyntacticErrorContainer
