import {Select} from "./select";
import {Union} from "./union";
import {UnionOrderLimit} from "./union-order-limit";

export type SelectStatement =
    | Select
    | Union
    | UnionOrderLimit
;
