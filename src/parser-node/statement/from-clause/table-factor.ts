import {DerivedTableFactor} from "./derived-table-factor";
import {NamedTableFactor} from "./named-table-factor";

export type TableFactor =
    | NamedTableFactor
    | DerivedTableFactor
;
