import {CreateLogFileGroupOptions, Node, SyntaxKind} from "../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {CreateLogFileGroupOption} from "../../custom-data";
import {optional, zeroOrMore} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {Diagnostic} from "../../../diagnostic";
import {TokenKind} from "../../../scanner";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4805
 */
makeCustomRule(SyntaxKind.CreateLogFileGroupOptions)
    .addSubstitution(
        [
            optional([
                CustomSyntaxKind.CreateLogFileGroupOption,
                zeroOrMore([
                    optional(TokenKind.Comma),
                    CustomSyntaxKind.CreateLogFileGroupOption,
                ] as const),
            ] as const),
        ] as const,
        (data) : CreateLogFileGroupOptions => {
            const arr = data
                .flat(3)
                .filter((item) : item is CreateLogFileGroupOption => {
                    if (item == undefined) {
                        return false;
                    }
                    if ("tokenKind" in item) {
                        return false;
                    }
                    return true;
                });

            const result : Omit<CreateLogFileGroupOptions, keyof Node> = {
                initialSize : {
                    start : -1,
                    end : -1,
                    syntaxKind : SyntaxKind.Identifier,
                    quoted : false,
                    identifier : "128M",
                },
                undoBufferSize : {
                    start : -1,
                    end : -1,
                    syntaxKind : SyntaxKind.Identifier,
                    quoted : false,
                    identifier : "8M",
                },
                redoBufferSize : undefined,
                nodeGroup : undefined,
                engine : undefined,
                wait : undefined,
                comment : undefined,
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
                syntaxKind : SyntaxKind.CreateLogFileGroupOptions,
                ...result,
                syntacticErrors : (
                    syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined
                ),
            };
        }
    )
