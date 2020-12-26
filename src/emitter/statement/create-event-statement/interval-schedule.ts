import {IntervalSchedule} from "../../../parser-node";
import {emitExpression} from "../../expression";
import {emitInterval} from "../../misc";
import {StringBuilder} from "../../string-builder";

export function emitIntervalSchedule (schedule : IntervalSchedule) {
    return new StringBuilder()
        .append("EVERY ")
        .appendBuilder(emitExpression(schedule.intervalExpr))
        .append(" ")
        .appendBuilder(emitInterval(schedule.interval))
        .scope(builder => {
            if (schedule.startsAt == undefined) {
                return;
            }
            const startsAt = emitExpression(schedule.startsAt)
            builder.indent(builder => {
                builder
                    .append("STARTS ")
                    .appendBuilder(startsAt)
            })
        })
        .scope(builder => {
            if (schedule.endsAt == undefined) {
                return;
            }
            const endsAt = emitExpression(schedule.endsAt)
            builder.indent(builder => {
                builder
                    .append("ENDS ")
                    .appendBuilder(endsAt)
            })
        })
}
