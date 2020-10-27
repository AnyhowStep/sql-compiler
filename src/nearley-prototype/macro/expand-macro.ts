import {Diagnostic} from "../../diagnostic";
import {TextRange} from "../../parser-node";
import {DiagnosticMessages} from "../diagnostic-messages";
import {makeDiagnosticAt} from "../parse-util";
import {ParserSettings} from "../parser-settings";
import {expandContent, ExpandedContent} from "./expand-content";
import {Macro, MacroSubstitution} from "./find-all-macros";

export interface MacroArgument extends TextRange {
    value : ExpandedContent,
}

export interface ConcreteSubstitution {
    src : MacroSubstitution,
    dst : TextRange,
}

export interface ExpandedMacro {
    macro : Macro,
    args : MacroArgument[],

    originalSubstitutedContent : string,
    expandedContent : ExpandedContent,
    /**
     * Original,
     * ```
     * SELECT x, y, z;
     * ```
     *
     * Arguments,
     * ```
     * x = 'hello'
     * y = 23
     * z = PI()
     * ```
     *
     * Expanded,
     * ```
     * SELECT 'hello', 23, PI()
     * ```
     *
     * For `x`,
     * + `src: { start : 7, end : 8 }`
     * + `dst: { start : 7, end : 14 }`
     *
     * For `y`,
     * + `src: { start : 10, end : 11 }`
     * + `dst: { start : 16, end : 18 }`
     *
     * For `z`,
     * + `src: { start : 13, end : 14 }`
     * + `dst: { start : 20, end : 24 }`
     */
    originalToSubstituted : ConcreteSubstitution[],

    syntacticErrors : Diagnostic[],
}

export function expandMacro (
    filename : string,
    macros : Macro[],
    macro : Macro,
    argsStart : number,
    args : MacroArgument[],
    settings : ParserSettings,
) : ExpandedMacro {
    if (args.length != macro.parameterList.length) {
        return {
            macro,
            args,
            originalSubstitutedContent : "",
            expandedContent : expandContent(
                filename,
                macros,
                "",
                settings,
            ),
            originalToSubstituted : [],
            syntacticErrors : [
                makeDiagnosticAt(
                    argsStart,
                    argsStart,
                    [
                        {
                            filename : macro.filename,
                            start : macro.parameterList.start,
                            end : macro.parameterList.end,
                        }
                    ],
                    DiagnosticMessages.MacroArgumentCountMismatch,
                    macro.parameterList.length,
                    args.length
                )
            ],
        };
    }
    const originalToSubstituted : ConcreteSubstitution[] = [];

    let originalSubstitutedContent = "";

    for (const part of macro.substitutionContent) {
        if ("parameterName" in part) {
            const argumentIndex = macro.parameterList.findIndex(x => x.parameterName == part.parameterName);
            const argument = args[argumentIndex];

            originalToSubstituted.push({
                src : part,
                dst : {
                    start : originalSubstitutedContent.length,
                    end : originalSubstitutedContent.length + argument.value.expandedContent.length,
                },
            });

            originalSubstitutedContent += argument.value.expandedContent;
        } else {
            originalSubstitutedContent += part.value;
        }
    }

    return {
        macro,
        args,
        originalSubstitutedContent,
        expandedContent : expandContent(
            filename,
            macros,
            originalSubstitutedContent,
            settings,
        ),
        originalToSubstituted,
        syntacticErrors : [],
    };
}