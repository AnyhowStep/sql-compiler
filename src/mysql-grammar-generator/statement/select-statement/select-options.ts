import {SelectOptions, Node, SyntaxKind} from "../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {zeroOrMore} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {Diagnostic} from "../../../diagnostic";
import {makeDiagnosticAt} from "../../../parse-util";
import {DiagnosticMessages} from "../../diagnostic-messages";

makeCustomRule(SyntaxKind.SelectOptions)
    .addSubstitution(
        [
            zeroOrMore([
                CustomSyntaxKind.SelectOption,
            ] as const),
        ] as const,
        (data) : SelectOptions => {
            const arr = data
                .flat(3)
                .filter((item) : item is SelectOptions => {
                    if (item == undefined) {
                        return false;
                    }
                    if ("tokenKind" in item) {
                        return false;
                    }
                    return true;
                });

            const result : Omit<SelectOptions, keyof Node> = {
                distinct : undefined,
                highPriority : false,
                straightJoin : false,
                sqlSmallResult : false,
                sqlBigResult : false,
                sqlBufferResult : false,
                sqlCache : undefined,
                sqlCalcFoundRows : false,
            };

            const syntacticErrors : Diagnostic[] = [];

            for (const item of arr) {
                if (item.syntacticErrors != undefined && item.syntacticErrors.length > 0) {
                    syntacticErrors.push(...item.syntacticErrors);
                }

                if ("distinct" in item) {
                    if (result.distinct !== undefined && result.distinct !== item.distinct) {
                        syntacticErrors.push(makeDiagnosticAt(
                            item.start,
                            item.end,
                            [],
                            DiagnosticMessages.CannotUseDistinctAndAllAtTheSameTime
                        ));
                    }
                }

                if ("sqlCache" in item) {
                    if (result.sqlCache !== undefined && result.sqlCache !== item.sqlCache) {
                        syntacticErrors.push(makeDiagnosticAt(
                            item.start,
                            item.end,
                            [],
                            DiagnosticMessages.CannotUseSqlCacheAndSqlNoCacheAtTheSameTime
                        ));
                    }
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
                syntaxKind : SyntaxKind.SelectOptions,
                ...result,
                syntacticErrors : (
                    syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined
                ),
            };
        }
    )
