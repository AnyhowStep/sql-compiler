import {PartitionDefinitionOptions, Node, SyntacticErrorContainer, TextRange} from "../../parser-node";

type MakePartitionDefinitionOption<T, K extends keyof T = Exclude<keyof T, keyof Node>> =
    K extends keyof T ?
    Pick<T, K> :
    never
;

export type PartitionDefinitionOption = MakePartitionDefinitionOption<PartitionDefinitionOptions> & TextRange & SyntacticErrorContainer
