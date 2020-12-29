import {SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {getTextRange} from "../../parse-util";
import {RateLimitOption} from "../../custom-data";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7782
 */
makeCustomRule(CustomSyntaxKind.RateLimitOption)
    .addSubstitution(
        [
            TokenKind.MAX_QUERIES_PER_HOUR,
            SyntaxKind.IntegerLiteral,
        ] as const,
        (data) : RateLimitOption => {
            return {
                ...getTextRange(data),
                maxQueriesPerHour : data[1],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.MAX_UPDATES_PER_HOUR,
            SyntaxKind.IntegerLiteral,
        ] as const,
        (data) : RateLimitOption => {
            return {
                ...getTextRange(data),
                maxUpdatesPerHour : data[1],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.MAX_CONNECTIONS_PER_HOUR,
            SyntaxKind.IntegerLiteral,
        ] as const,
        (data) : RateLimitOption => {
            return {
                ...getTextRange(data),
                maxConnectionsPerHour : data[1],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.MAX_USER_CONNECTIONS,
            SyntaxKind.IntegerLiteral,
        ] as const,
        (data) : RateLimitOption => {
            return {
                ...getTextRange(data),
                maxUserConnections : data[1],
            };
        }
    )
