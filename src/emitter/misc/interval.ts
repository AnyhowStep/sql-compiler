import {Interval, IntervalType} from "../../parser-node";
import {StringBuilder} from "../string-builder";

export function emitInterval (interval : Interval) {
    return new StringBuilder()
        .append(
            interval.intervalType == IntervalType.DAY ?
            "DAY" :

            interval.intervalType == IntervalType.WEEK ?
            "WEEK" :

            interval.intervalType == IntervalType.HOUR ?
            "HOUR" :

            interval.intervalType == IntervalType.MINUTE ?
            "MINUTE" :

            interval.intervalType == IntervalType.MONTH ?
            "MONTH" :

            interval.intervalType == IntervalType.QUARTER ?
            "QUARTER" :

            interval.intervalType == IntervalType.SECOND ?
            "SECOND" :

            interval.intervalType == IntervalType.MICROSECOND ?
            "MICROSECOND" :

            interval.intervalType == IntervalType.YEAR ?
            "YEAR" :

            interval.intervalType == IntervalType.DAY_HOUR ?
            "DAY_HOUR" :

            interval.intervalType == IntervalType.DAY_MICROSECOND ?
            "DAY_MICROSECOND" :

            interval.intervalType == IntervalType.DAY_MINUTE ?
            "DAY_MINUTE" :

            interval.intervalType == IntervalType.DAY_SECOND ?
            "DAY_SECOND" :

            interval.intervalType == IntervalType.HOUR_MICROSECOND ?
            "HOUR_MICROSECOND" :

            interval.intervalType == IntervalType.HOUR_MINUTE ?
            "HOUR_MINUTE" :

            interval.intervalType == IntervalType.HOUR_SECOND ?
            "HOUR_SECOND" :

            interval.intervalType == IntervalType.MINUTE_MICROSECOND ?
            "MINUTE_MICROSECOND" :

            interval.intervalType == IntervalType.MINUTE_SECOND ?
            "MINUTE_SECOND" :

            interval.intervalType == IntervalType.SECOND_MICROSECOND ?
            "SECOND_MICROSECOND" :

            "YEAR_MONTH"
        )
}
