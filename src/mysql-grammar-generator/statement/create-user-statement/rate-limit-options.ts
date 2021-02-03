import {RateLimitOptions, PartialRateLimitOptions, Node, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional, oneOrMore} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {RateLimitOption} from "../../custom-data";
import {Diagnostic} from "../../../diagnostic";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7772
 */
makeCustomRule(SyntaxKind.RateLimitOptions)
    .addSubstitution(
        [
            optional([
                TokenKind.WITH,
                oneOrMore(CustomSyntaxKind.RateLimitOption)
            ] as const),
        ] as const,
        (data) : RateLimitOptions => {
            const arr = data
                .flat(2)
                .filter((item) : item is RateLimitOption => {
                    if (item == undefined) {
                        return false;
                    }
                    if ("tokenKind" in item) {
                        return false;
                    }
                    return true;
                });

            const result : Omit<RateLimitOptions, keyof Node> = {
                maxQueriesPerHour : {
                    start : -1,
                    end : -1,
                    syntaxKind : SyntaxKind.IntegerLiteral,
                    value : BigInt(0),
                },
                maxUpdatesPerHour : {
                    start : -1,
                    end : -1,
                    syntaxKind : SyntaxKind.IntegerLiteral,
                    value : BigInt(0),
                },
                maxConnectionsPerHour : {
                    start : -1,
                    end : -1,
                    syntaxKind : SyntaxKind.IntegerLiteral,
                    value : BigInt(0),
                },
                maxUserConnections : {
                    start : -1,
                    end : -1,
                    syntaxKind : SyntaxKind.IntegerLiteral,
                    value : BigInt(0),
                },
            };

            const syntacticErrors : Diagnostic[] = [];

            for (const item of arr) {
                if (item.syntacticErrors != undefined && item.syntacticErrors.length > 0) {
                    syntacticErrors.push(...item.syntacticErrors);
                }
                for (const k of Object.keys(item)) {
                    if (k in result) {
                        (result as any)[k] = (item as any)[k];
                        break;
                    }
                }
            }

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.RateLimitOptions,
                ...result,
                syntacticErrors : (
                    syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined
                ),
            };
        }
    )

makeCustomRule(SyntaxKind.PartialRateLimitOptions)
    .addSubstitution(
        [
            optional([
                TokenKind.WITH,
                oneOrMore(CustomSyntaxKind.RateLimitOption)
            ] as const),
        ] as const,
        (data) : PartialRateLimitOptions => {
            const arr = data
                .flat(2)
                .filter((item) : item is RateLimitOption => {
                    if (item == undefined) {
                        return false;
                    }
                    if ("tokenKind" in item) {
                        return false;
                    }
                    return true;
                });

            const result : Omit<PartialRateLimitOptions, keyof Node> = {
                maxQueriesPerHour : undefined,
                maxUpdatesPerHour : undefined,
                maxConnectionsPerHour : undefined,
                maxUserConnections : undefined,
            };

            const syntacticErrors : Diagnostic[] = [];

            for (const item of arr) {
                if (item.syntacticErrors != undefined && item.syntacticErrors.length > 0) {
                    syntacticErrors.push(...item.syntacticErrors);
                }
                for (const k of Object.keys(item)) {
                    if (k in result) {
                        (result as any)[k] = (item as any)[k];
                        break;
                    }
                }
            }

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.PartialRateLimitOptions,
                ...result,
                syntacticErrors : (
                    syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined
                ),
            };
        }
    )
