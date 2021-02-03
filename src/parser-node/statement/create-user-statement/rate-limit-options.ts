import {IntegerLiteral} from "../../expression";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

export interface RateLimitOptions extends Node {
    syntaxKind : SyntaxKind.RateLimitOptions,

    /**
     * Defaults to `0`, which means no limit.
     * https://dev.mysql.com/doc/refman/5.7/en/create-user.html
     */
    maxQueriesPerHour : IntegerLiteral,

    /**
     * Defaults to `0`, which means no limit.
     * https://dev.mysql.com/doc/refman/5.7/en/create-user.html
     */
    maxUpdatesPerHour : IntegerLiteral,

    /**
     * Defaults to `0`, which means no limit.
     * https://dev.mysql.com/doc/refman/5.7/en/create-user.html
     */
    maxConnectionsPerHour : IntegerLiteral,

    /**
     * Defaults to `0`, which means no limit.
     * https://dev.mysql.com/doc/refman/5.7/en/create-user.html
     */
    maxUserConnections : IntegerLiteral,
}

export interface PartialRateLimitOptions extends Node {
    syntaxKind : SyntaxKind.PartialRateLimitOptions,

    maxQueriesPerHour : IntegerLiteral|undefined,

    maxUpdatesPerHour : IntegerLiteral|undefined,

    maxConnectionsPerHour : IntegerLiteral|undefined,

    maxUserConnections : IntegerLiteral|undefined,
}
