import {CreateTableOptions, Node, TextRange} from "../../parser-node";

type MakeCreateTableOption<T, K extends keyof T = Exclude<keyof T, keyof Node>> =
    K extends keyof T ?
    {
        [k in K] : T[k]
    } :
    never
;

export type CreateTableOption = MakeCreateTableOption<CreateTableOptions> & TextRange
