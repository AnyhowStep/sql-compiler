import {TextRange} from "../../parser-node";
import {ExpandedContent, TextRangeMap} from "./expand-content";
import {MacroPartType} from "./find-all-macros";
import {SubstitutedParameterReferencePart} from "./substitute";
import {DiagnosticLike} from "./trace-error-3";

export interface PathItem extends TextRange {
    type : MacroPartType.PlainText | MacroPartType.MacroCall,
    filename : string,
    expandedPart : TextRangeMap
}

export interface ParameterReferencePathItem extends TextRange {
    type : MacroPartType.ParameterReference,
    filename : string,
    expandedPart : TextRangeMap & { expandedPart : SubstitutedParameterReferencePart },
}

export type ExpansionPathItem =
    | PathItem
    | ParameterReferencePathItem
;

export type ExpansionPath =
    | ExpansionPathItem[]
;

export function isLength<ArrT extends readonly unknown[], LengthT extends number> (
    arr : ArrT,
    length : LengthT
) : arr is Extract<ArrT, { length : LengthT }> {
    return arr.length == length;
}

interface GetExpansionPathImplArgs {
    readonly filename : string,
    readonly diagnostic : DiagnosticLike,
    readonly expandedContent : ExpandedContent,
}

function getExpansionPathImpl (
    {
        filename,
        diagnostic,
        expandedContent,
    } : GetExpansionPathImplArgs
) : ExpansionPath {
    const expandedPart = expandedContent.expandedParts.find(expandedPart => {
        if (expandedPart.expandedSrc.start == expandedPart.expandedSrc.end) {
            return false;
        }
        return (
            expandedPart.expandedSrc.start <= diagnostic.start &&
            expandedPart.expandedSrc.end >= diagnostic.start
        );
    });
    if (expandedPart == undefined) {
        //This should not happen...
        throw new Error(`Diagnostic is outside expanded content`);
    }

    if (expandedPart.expandedPart.type == MacroPartType.PlainText) {
        const diagnosticStartOffset = diagnostic.start - expandedPart.expandedSrc.start;
        return [
            {
                type : MacroPartType.PlainText,
                filename,
                start : diagnosticStartOffset + expandedPart.expandedPart.filePart.fileSrc.start,
                end : diagnosticStartOffset + expandedPart.expandedPart.filePart.fileSrc.start + diagnostic.length,
                expandedPart,
            }
        ];
    } else if (expandedPart.expandedPart.type == MacroPartType.ParameterReference) {
        const diagnosticStartOffset = diagnostic.start - expandedPart.expandedSrc.start;
        expandedPart.expandedPart.filePart.fileSrc
        const argTrace = getExpansionPathImpl({
            filename,
            diagnostic : {
                start : diagnosticStartOffset,
                length : diagnostic.length,
            },
            expandedContent : expandedPart.expandedPart.macroArgument.value,
        });
        return [
            {
                type : MacroPartType.ParameterReference,
                filename,
                start : expandedPart.expandedPart.filePart.fileSrc.start,
                end : expandedPart.expandedPart.filePart.fileSrc.end,
                expandedPart : {
                    ...expandedPart,
                    expandedPart : expandedPart.expandedPart,
                },
            },
            ...argTrace,
        ]
    } else {
        const macroCallTrace = getExpansionPathImpl({
            filename : expandedPart.expandedPart.expandedMacro.macro.filename,
            diagnostic,
            expandedContent : expandedPart.expandedPart.expandedMacro.expandedContent,
        });
        const firstPathItem = macroCallTrace[0];

        if (firstPathItem.expandedPart.expandedPart.type == MacroPartType.PlainText) {
            return [
                {
                    type : MacroPartType.MacroCall,
                    filename,
                    start : expandedPart.expandedPart.substituted.macroIdentifier.macroIdentifier.fileSrc.start,
                    end : expandedPart.expandedPart.substituted.macroIdentifier.macroIdentifier.fileSrc.end,
                    expandedPart,
                },
                ...macroCallTrace,
            ]
        } else if (firstPathItem.expandedPart.expandedPart.type == MacroPartType.ParameterReference) {
            const usedMacroArgument = firstPathItem.expandedPart.expandedPart.macroArgument;
            const usedMyMacroArgument = expandedPart.expandedPart.macroArguments.some(arg => arg == usedMacroArgument);
            if (usedMyMacroArgument) {
                return [
                    {
                        type : MacroPartType.MacroCall,
                        filename,
                        start : usedMacroArgument.substitutedArgument.argument.fileSrc.start,
                        end : usedMacroArgument.substitutedArgument.argument.fileSrc.end,
                        expandedPart,
                    },
                    ...macroCallTrace,
                ];
            } else {
                return [
                    {
                        type : MacroPartType.MacroCall,
                        filename,
                        start : expandedPart.expandedPart.substituted.macroIdentifier.macroIdentifier.fileSrc.start,
                        end : expandedPart.expandedPart.substituted.macroIdentifier.macroIdentifier.fileSrc.end,
                        expandedPart,
                    },
                    ...macroCallTrace,
                ];
            }
        } else {
            return [
                {
                    type : MacroPartType.MacroCall,
                    filename,
                    start : expandedPart.expandedPart.substituted.macroIdentifier.macroIdentifier.fileSrc.start,
                    end : expandedPart.expandedPart.substituted.macroIdentifier.macroIdentifier.fileSrc.end,
                    expandedPart,
                },
                ...macroCallTrace,
            ]
        }
    }
}

export function getExpansionPath (
    filename : string,
    diagnostic : DiagnosticLike,
    expandedContent : ExpandedContent,
) : ExpansionPath {
    return getExpansionPathImpl({
        filename,
        diagnostic,
        expandedContent,
    });
}
