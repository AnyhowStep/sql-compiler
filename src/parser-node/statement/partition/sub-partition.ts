import {HashSubPartition} from "./hash-sub-partition";
import {KeySubPartition} from "./key-sub-partition";

export type SubPartition =
    | HashSubPartition
    | KeySubPartition
;
