import {TextRange} from "./text-range";

export type Data =
    | TextRange
    | null
    | undefined
    | readonly Data[]
;
