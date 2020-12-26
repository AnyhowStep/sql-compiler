import {ExecuteAtSchedule} from "./execute-at-schedule";
import {IntervalSchedule} from "./interval-schedule";

export type Schedule =
    | ExecuteAtSchedule
    | IntervalSchedule
;
