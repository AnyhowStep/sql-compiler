import {CreateLogFileGroupOptions, Node, SyntacticErrorContainer, TextRange} from "../../parser-node";

type MakeCreateLogFileGroupOption<T, K extends keyof T = Exclude<keyof T, keyof Node|"optionLocations">> =
    K extends keyof T ?
    Pick<T, K> :
    never
;

export type CreateLogFileGroupOption = MakeCreateLogFileGroupOption<CreateLogFileGroupOptions> & TextRange & SyntacticErrorContainer
