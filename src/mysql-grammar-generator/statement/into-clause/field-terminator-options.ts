import {FieldTerminatorOptions, Node, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {union, zeroOrMore} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {FieldTerminatorOption} from "../../custom-data";
import {Diagnostic} from "../../../diagnostic";

makeCustomRule(SyntaxKind.FieldTerminatorOptions)
    .addSubstitution(
        [
            union(
                TokenKind.FIELDS,
                TokenKind.COLUMNS,
            ),
            CustomSyntaxKind.FieldTerminatorOption,
            zeroOrMore(CustomSyntaxKind.FieldTerminatorOption),
        ] as const,
        (data) : FieldTerminatorOptions => {
            const arr = data
                .flat(1)
                .filter((item) : item is FieldTerminatorOption => {
                    if ("tokenKind" in item) {
                        return false;
                    }
                    return true;
                });

            const result : Omit<FieldTerminatorOptions, keyof Node> = {
                terminatedBy : {
                    start : data[0][0].start,
                    end : data[0][0].end,
                    syntaxKind : SyntaxKind.StringLiteral,
                    value : "\t",
                    sourceText : "'\\t'",
                },
                optionallyEnclosed : false,
                enclosedBy : {
                    start : data[0][0].start,
                    end : data[0][0].end,
                    syntaxKind : SyntaxKind.StringLiteral,
                    value : "",
                    sourceText : "''",
                },
                escapedBy : {
                    start : data[0][0].start,
                    end : data[0][0].end,
                    syntaxKind : SyntaxKind.StringLiteral,
                    value : "\\",
                    sourceText : "'\\\\'",
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
                    }
                }
            }

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.FieldTerminatorOptions,
                ...result,
                syntacticErrors : (
                    syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined
                ),
            };
        }
    )
