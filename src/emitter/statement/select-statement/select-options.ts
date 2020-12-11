import {SelectOptions} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";

export function emitSelectOptions (options : SelectOptions) {
    return new StringBuilder()
        .scope(builder => {
            if (options.distinct == undefined) {
                return;
            }
            builder
                .append(options.distinct ? "DISTINCT" : "ALL")
        })
        .scope(builder => {
            if (!options.highPriority) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.append(" ");
            }
            builder
                .append("HIGH_PRIORITY")
        })
        .scope(builder => {
            if (!options.straightJoin) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.append(" ");
            }
            builder
                .append("STRAIGHT_JOIN")
        })
        .scope(builder => {
            if (!options.sqlSmallResult) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.append(" ");
            }
            builder
                .append("SQL_SMALL_RESULT")
        })
        .scope(builder => {
            if (!options.sqlBigResult) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.append(" ");
            }
            builder
                .append("SQL_BIG_RESULT")
        })
        .scope(builder => {
            if (!options.sqlBufferResult) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.append(" ");
            }
            builder
                .append("SQL_BUFFER_RESULT")
        })
        .scope(builder => {
            if (options.sqlCache == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.append(" ");
            }
            builder
                .append(
                    options.sqlCache ?
                    "SQL_CACHE" :
                    "SQL_NO_CACHE"
                )
        })
        .scope(builder => {
            if (!options.sqlCalcFoundRows) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.append(" ");
            }
            builder
                .append("SQL_CALC_FOUND_ROWS")
        })
}
