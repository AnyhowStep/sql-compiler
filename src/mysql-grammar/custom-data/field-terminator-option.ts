import {FieldTerminatorOptions, Node, SyntacticErrorContainer, TextRange} from "../../parser-node";

type MakeFieldTerminatorOption<T, K extends keyof T = Exclude<keyof T, keyof Node>> =
    K extends keyof T ?
    Pick<T, K> :
    never
;

export type FieldTerminatorOption = MakeFieldTerminatorOption<FieldTerminatorOptions> & TextRange & SyntacticErrorContainer
