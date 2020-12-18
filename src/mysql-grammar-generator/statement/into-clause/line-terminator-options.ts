import {LineTerminatorOptions, Node, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {zeroOrMore} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {LineTerminatorOption} from "../../custom-data";
import {Diagnostic} from "../../../diagnostic";

makeCustomRule(SyntaxKind.LineTerminatorOptions)
    .addSubstitution(
        [
            TokenKind.LINES,
            CustomSyntaxKind.LineTerminatorOption,
            zeroOrMore(CustomSyntaxKind.LineTerminatorOption),
        ] as const,
        (data) : LineTerminatorOptions => {
            const arr = data
                .flat(1)
                .filter((item) : item is LineTerminatorOption => {
                    if ("tokenKind" in item) {
                        return false;
                    }
                    return true;
                });

            const result : Omit<LineTerminatorOptions, keyof Node> = {
                terminatedBy : {
                    start : data[0].start,
                    end : data[0].end,
                    syntaxKind : SyntaxKind.StringLiteral,
                    value : "\n",
                    sourceText : "'\\n'",
                },
                startingBy : {
                    start : data[0].start,
                    end : data[0].end,
                    syntaxKind : SyntaxKind.StringLiteral,
                    value : "",
                    sourceText : "''",
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
                syntaxKind : SyntaxKind.LineTerminatorOptions,
                ...result,
                syntacticErrors : (
                    syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined
                ),
            };
        }
    )
