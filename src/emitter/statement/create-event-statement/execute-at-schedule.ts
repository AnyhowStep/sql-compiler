import {ExecuteAtSchedule} from "../../../parser-node";
import {emitExpression} from "../../expression";
import {StringBuilder} from "../../string-builder";

export function emitExecuteAtSchedule (schedule : ExecuteAtSchedule) {
    return new StringBuilder()
        .append("AT ")
        .appendBuilder(emitExpression(schedule.executeAt))
}
