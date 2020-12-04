import {CreateTableOptions, Node, TextRange} from "../../parser-node";

type MakeCreateTableOption<T, K extends keyof T = Exclude<keyof T, keyof Node>> =
    K extends keyof T ?
    Pick<T, K> :
    never
;

export type CreateTableOption = MakeCreateTableOption<CreateTableOptions> & TextRange
