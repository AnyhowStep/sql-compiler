import {HashPartition} from "./hash-partition";
import {KeyPartition} from "./key-partition";
import {ListPartition} from "./list-partition";
import {RangePartition} from "./range-partition";

export type Partition =
    | HashPartition
    | KeyPartition
    | ListPartition
    | RangePartition
;
