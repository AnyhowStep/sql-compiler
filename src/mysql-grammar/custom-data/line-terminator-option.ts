import {LineTerminatorOptions, Node, SyntacticErrorContainer, TextRange} from "../../parser-node";

type MakeLineTerminatorOption<T, K extends keyof T = Exclude<keyof T, keyof Node>> =
    K extends keyof T ?
    Pick<T, K> :
    never
;

export type LineTerminatorOption = MakeLineTerminatorOption<LineTerminatorOptions> & TextRange & SyntacticErrorContainer
