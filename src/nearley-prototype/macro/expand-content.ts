import {Diagnostic} from "../../diagnostic";
import {makeDiagnosticAt} from "../../parse-util";
import {TextRange} from "../../parser-node";
import {Scanner} from "../../scanner";
import {DiagnosticMessages} from "../diagnostic-messages";
import {ExpandedMacro, expandMacro, MacroArgument} from "./expand-macro";
import {Macro} from "./find-all-macros";
import {parseUnexpandedContent} from "./parse-unexpanded-content";

export interface TextRangeMap {
    src : TextRange,
    dst : TextRange,
    expandedMacro : ExpandedMacro|undefined,
}

export interface ExpandedContent {
    /**
     * If `string`, the original content had no macro calls.
     * Else, the original content had macro calls.
     */
    originalContent : string | ExpandedContent,
    expandedContent : string,

    /**
     * Original,
     * ```
     * SELECT #tau();
     * ```
     *
     * Expanded,
     * ```
     * SELECT 6.283185307179586
     * ```
     *
     * + `src: { start : 7, end : 13 }`
     * + `dst: { start : 7, end : 24 }`
     */
    originalToExpanded : TextRangeMap[],

    syntacticErrors : Diagnostic[],
}

/**
 * Expands `unexpandedContent` recursively.
 */
export function expandContent (
    filename : string,
    macros : Macro[],
    originalContent : string,
) : ExpandedContent {
    //const scanner = new Scanner(originalContent);
    const parsed = parseUnexpandedContent(
        filename,
        new Scanner(originalContent)
    );

    if (
        parsed.unexpandedContent.length == 1 &&
        "value" in parsed.unexpandedContent[0]
    ) {
        //No expansion needed
        return {
            originalContent : originalContent,
            expandedContent : originalContent,
            originalToExpanded : [],
            syntacticErrors : [...(parsed.syntacticErrors ?? [])],
        };
    }

    const arr = parsed.unexpandedContent;

    let expandedContent : string = "";
    const originalToExpanded : TextRangeMap[] = [];

    for (const part of arr) {
        if ("identifier" in part) {
            const macro = macros.find(m => m.identifier.macroName == part.identifier.macroName);
            if (macro == undefined) {
                //error
                return {
                    originalContent,
                    expandedContent,
                    originalToExpanded,
                    syntacticErrors : [
                        ...(parsed.syntacticErrors ?? []),
                        makeDiagnosticAt(
                            part.identifier.start,
                            part.identifier.end,
                            [],
                            DiagnosticMessages.MacroNotFound,
                            part.identifier.macroName
                        ),
                    ],
                };
            }

            const args = part.argumentList.args.map((arg) : MacroArgument => {
                return {
                    start : arg.start,
                    end : arg.end,
                    value : expandContent(
                        filename,
                        macros,
                        arg.value
                    ),
                };
            })

            const expandedMacro = expandMacro(
                filename,
                macros,
                macro,
                part.argumentList.start,
                args
            );

            originalToExpanded.push({
                src : {
                    start : part.start,
                    end : part.end,
                },
                dst : {
                    start : expandedContent.length,
                    end : expandedContent.length + expandedMacro.expandedContent.expandedContent.length,
                },
                expandedMacro,
            });

            expandedContent += expandedMacro.expandedContent.expandedContent;
        } else {
            originalToExpanded.push({
                src : {
                    start : part.start,
                    end : part.end,
                },
                dst : {
                    start : expandedContent.length,
                    end : expandedContent.length + part.value.length,
                },
                expandedMacro : undefined,
            });

            expandedContent += part.value;
        }
    }

    return {
        originalContent,
        expandedContent,
        originalToExpanded,
        syntacticErrors : [...(parsed.syntacticErrors ?? [])],
    };
}
