import {SelectOptions, Node, SyntacticErrorContainer, TextRange} from "../../parser-node";

type MakeSelectOption<T, K extends keyof T = Exclude<keyof T, keyof Node>> =
    K extends keyof T ?
    Pick<T, K> :
    never
;

export type SelectOption = MakeSelectOption<SelectOptions> & TextRange & SyntacticErrorContainer
