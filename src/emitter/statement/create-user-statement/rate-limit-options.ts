import {RateLimitOptions} from "../../../parser-node";
import {emitIntegerLiteral} from "../../expression";
import {StringBuilder} from "../../string-builder";

export function emitRateLimitOptions (options : RateLimitOptions) {
    const result = new StringBuilder()
        .scope(builder => {
            if (options.maxQueriesPerHour.value == BigInt(0)) {
                return;
            }
            const maxQueriesPerHour = emitIntegerLiteral(options.maxQueriesPerHour)
            builder
                .append("MAX_QUERIES_PER_HOUR ")
                .appendBuilder(maxQueriesPerHour)
        })
        .scope(builder => {
            if (options.maxUpdatesPerHour.value == BigInt(0)) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine()
            }
            const maxUpdatesPerHour = emitIntegerLiteral(options.maxUpdatesPerHour)
            builder
                .append("MAX_UPDATES_PER_HOUR ")
                .appendBuilder(maxUpdatesPerHour)
        })
        .scope(builder => {
            if (options.maxConnectionsPerHour.value == BigInt(0)) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine()
            }
            const maxConnectionsPerHour = emitIntegerLiteral(options.maxConnectionsPerHour)
            builder
                .append("MAX_CONNECTIONS_PER_HOUR ")
                .appendBuilder(maxConnectionsPerHour)
        })
        .scope(builder => {
            if (options.maxUserConnections.value == BigInt(0)) {
                return;
            }
            if (!builder.isEmpty()) {
                builder.appendNewLine()
            }
            const maxUserConnections = emitIntegerLiteral(options.maxUserConnections)
            builder
                .append("MAX_USER_CONNECTIONS ")
                .appendBuilder(maxUserConnections)
        })

    if (result.isEmpty()) {
        return result;
    } else {
        return new StringBuilder()
            .append("WITH")
            .indent(builder => {
                builder.appendBuilder(result)
            })
    }
}
