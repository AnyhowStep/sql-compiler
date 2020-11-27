import {Diagnostic} from "../diagnostic";
import {makeDiagnosticAt} from "../parse-util";
import type {TextRange} from "../nearley-wrapper";
import {DiagnosticMessages} from "./diagnostic-messages";
import {expandContent, ExpandedContent} from "./expand-content";
import {Macro, ParameterReferencePart} from "../macro-definition-node";
import {getSubstitutedMacro, SubstitutedArgument, SubstitutedMacroCallPart} from "./substitute";

export interface MacroArgument {
    substitutedArgument : SubstitutedArgument,
    value : ExpandedContent,
}

export interface MacroContentPart extends TextRange {
    parameterName : undefined,
}
export interface ConcreteSubstitution {
    src : ParameterReferencePart|MacroContentPart,
    dst : TextRange,
    resultDst : TextRange,
}

export interface ExpandedMacro {
    macro : Macro,
    args : MacroArgument[],

    expandedContent : ExpandedContent,

    semanticErrors : Diagnostic[],
}

export function expandMacro (
    expandedSrcStartOffset : number,
    filename : string,
    macros : Macro[],
    substitutedMacroCall : SubstitutedMacroCallPart,
    macro : Macro,
    args : MacroArgument[],
) : ExpandedMacro {
    const argsStart = substitutedMacroCall.filePart.argumentList.start;

    if (args.length != macro.parameterList.length) {
        return {
            macro,
            args,
            expandedContent : expandContent(
                expandedSrcStartOffset,
                filename,
                macros,
                [],
            ),
            semanticErrors : [
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

    const {parts} = getSubstitutedMacro(macro, args);
    const expandedContent = expandContent(
        expandedSrcStartOffset,
        "",
        macros,
        parts
    );

    return {
        macro,
        args,
        expandedContent,
        semanticErrors : [],
    };
}
