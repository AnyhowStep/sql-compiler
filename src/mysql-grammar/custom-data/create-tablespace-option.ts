import {CreateTablespaceOptions, Node, SyntacticErrorContainer, TextRange} from "../../parser-node";

type MakeCreateTablespaceOption<T, K extends keyof T = Exclude<keyof T, keyof Node|"optionLocations">> =
    K extends keyof T ?
    Pick<T, K> :
    never
;

export type CreateTablespaceOption = MakeCreateTablespaceOption<CreateTablespaceOptions> & TextRange & SyntacticErrorContainer
