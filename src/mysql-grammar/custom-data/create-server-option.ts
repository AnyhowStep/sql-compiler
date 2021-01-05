import {CreateServerOptions, Node, SyntacticErrorContainer, TextRange} from "../../parser-node";

type MakeCreateServerOption<T, K extends keyof T = Exclude<keyof T, keyof Node|"optionLocations">> =
    K extends keyof T ?
    Pick<T, K> :
    never
;

export type CreateServerOption = MakeCreateServerOption<CreateServerOptions> & TextRange & SyntacticErrorContainer
