import {TextRange} from "../../parser-node";
import {ExpandedContent, TextRangeMap, ExpandedMacroCallPart} from "./expand-content";
import {MacroPartType} from "./find-all-macros";
import {SubstitutedParameterReferencePart, SubstitutedPlainTextPart} from "./substitute";
import {DiagnosticLike} from "./trace-error-3";

export interface PlainTextPathItem extends TextRange {
    type : MacroPartType.PlainText,
    filename : string,
    expandedPart : TextRangeMap & { expandedPart : SubstitutedPlainTextPart },
}

export interface ParameterReferencePathItem extends TextRange {
    type : MacroPartType.ParameterReference,
    filename : string,
    expandedPart : TextRangeMap & { expandedPart : SubstitutedParameterReferencePart },
    argTrace : ExpansionPath,
}

export interface MacroCallPathItem extends TextRange {
    type : MacroPartType.MacroCall,
    filename : string,
    expandedPart : TextRangeMap & { expandedPart : ExpandedMacroCallPart }
}

export type ExpansionPathItem =
    | PlainTextPathItem
    | ParameterReferencePathItem
    | MacroCallPathItem
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
    readonly diagnostic : DiagnosticLike,
    readonly expandedContent : ExpandedContent,
}

function findArgumentRange (
    path : ExpansionPath,
    filename : string,
    start : number,
    end : number
) : ExpansionPathItem|undefined {
    let result : ExpansionPathItem|undefined = undefined;
    let resultLength = Infinity;
    for (const item of path) {
        if (item.filename == filename && item.start >= start && item.end <= end && item.end-item.start < resultLength) {
            result = item;
            resultLength = item.end-item.start;
            if (item.type == MacroPartType.MacroCall) {
                return result;
            }
        }
        if (item.type != MacroPartType.ParameterReference) {
            continue;
        }

        const argTraceResult = findArgumentRange(item.argTrace, filename, start, end);
        if (
            argTraceResult != undefined &&
            argTraceResult.end-argTraceResult.start < resultLength
        ) {
            result = argTraceResult;
            resultLength = argTraceResult.end-argTraceResult.start;
        }
    }
    return result;
}

function getExpansionPathImpl (
    {
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
            expandedPart.expandedSrc.end > diagnostic.start
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
                filename : expandedPart.expandedPart.filePart.filename,
                start : diagnosticStartOffset + expandedPart.expandedPart.filePart.fileSrc.start,
                end : diagnosticStartOffset + expandedPart.expandedPart.filePart.fileSrc.start + diagnostic.length,
                expandedPart : {
                    ...expandedPart,
                    expandedPart : expandedPart.expandedPart,
                },
            }
        ];
    } else if (expandedPart.expandedPart.type == MacroPartType.ParameterReference) {
        const diagnosticStartOffset = diagnostic.start - expandedPart.expandedSrc.start;
        expandedPart.expandedPart.filePart.fileSrc
        const argTrace = getExpansionPathImpl({
            diagnostic : {
                start : diagnosticStartOffset,
                length : diagnostic.length,
            },
            expandedContent : expandedPart.expandedPart.macroArgument.value,
        });
        return [
            {
                type : MacroPartType.ParameterReference,
                filename : expandedPart.expandedPart.filePart.filename,
                start : expandedPart.expandedPart.filePart.fileSrc.start,
                end : expandedPart.expandedPart.filePart.fileSrc.end,
                expandedPart : {
                    ...expandedPart,
                    expandedPart : expandedPart.expandedPart,
                },
                argTrace,
            },
        ]
    } else {
        const macroCallTrace = getExpansionPathImpl({
            diagnostic,
            expandedContent : expandedPart.expandedPart.expandedMacro.expandedContent,
        });
        const firstPathItem = macroCallTrace[0];

        if (firstPathItem.expandedPart.expandedPart.type == MacroPartType.PlainText) {
            return [
                {
                    type : MacroPartType.MacroCall,
                    filename : expandedPart.expandedPart.substituted.filePart.filename,
                    start : expandedPart.expandedPart.substituted.macroIdentifier.macroIdentifier.fileSrc.start,
                    end : expandedPart.expandedPart.substituted.macroIdentifier.macroIdentifier.fileSrc.end,
                    expandedPart : {
                        ...expandedPart,
                        expandedPart : expandedPart.expandedPart,
                    },
                },
                ...macroCallTrace,
            ]
        } else if (firstPathItem.expandedPart.expandedPart.type == MacroPartType.ParameterReference) {
            const usedMacroArgument = firstPathItem.expandedPart.expandedPart.macroArgument;
            const usedMyMacroArgument = expandedPart.expandedPart.macroArguments.some(arg => arg == usedMacroArgument);
            if (usedMyMacroArgument) {
                const argRange = findArgumentRange(
                    macroCallTrace,
                    expandedPart.expandedPart.substituted.filePart.filename,
                    usedMacroArgument.substitutedArgument.argument.fileSrc.start,
                    usedMacroArgument.substitutedArgument.argument.fileSrc.end
                );

                if (argRange != undefined && argRange.type == MacroPartType.MacroCall) {
                    return [
                        {
                            type : MacroPartType.MacroCall,
                            filename : expandedPart.expandedPart.substituted.filePart.filename,
                            start : argRange.expandedPart.expandedPart.substituted.filePart.fileSrc.start,
                            end : argRange.expandedPart.expandedPart.substituted.filePart.fileSrc.end,
                            expandedPart : {
                                ...expandedPart,
                                expandedPart : expandedPart.expandedPart,
                            },
                        },
                        ...macroCallTrace,
                    ];
                }

                return [
                    (
                        argRange == undefined ?
                        {
                            type : MacroPartType.MacroCall,
                            filename : expandedPart.expandedPart.substituted.filePart.filename,
                            start : usedMacroArgument.substitutedArgument.argument.fileSrc.start,
                            end : usedMacroArgument.substitutedArgument.argument.fileSrc.end,
                            expandedPart : {
                                ...expandedPart,
                                expandedPart : expandedPart.expandedPart,
                            },
                        } :
                        {
                            type : MacroPartType.MacroCall,
                            filename : expandedPart.expandedPart.substituted.filePart.filename,
                            start : argRange.start,
                            end : argRange.end,
                            expandedPart : {
                                ...expandedPart,
                                expandedPart : expandedPart.expandedPart,
                            },
                        }
                    ),
                    ...macroCallTrace,
                ];
            } else {
                return [
                    {
                        type : MacroPartType.MacroCall,
                        filename : expandedPart.expandedPart.substituted.filePart.filename,
                        start : expandedPart.expandedPart.substituted.macroIdentifier.macroIdentifier.fileSrc.start,
                        end : expandedPart.expandedPart.substituted.macroIdentifier.macroIdentifier.fileSrc.end,
                        expandedPart : {
                            ...expandedPart,
                            expandedPart : expandedPart.expandedPart,
                        },
                    },
                    ...macroCallTrace,
                ];
            }
        } else {
            const argRange = findArgumentRange(
                macroCallTrace,
                expandedPart.expandedPart.substituted.filePart.filename,
                expandedPart.expandedPart.substituted.filePart.fileSrc.start,
                expandedPart.expandedPart.substituted.filePart.fileSrc.end
            );
            return [
                (
                    argRange == undefined ?
                    {
                        type : MacroPartType.MacroCall,
                        filename : expandedPart.expandedPart.substituted.filePart.filename,
                        start : expandedPart.expandedPart.substituted.macroIdentifier.macroIdentifier.fileSrc.start,
                        end : expandedPart.expandedPart.substituted.macroIdentifier.macroIdentifier.fileSrc.end,
                        expandedPart : {
                            ...expandedPart,
                            expandedPart : expandedPart.expandedPart,
                        },
                    } :
                    {
                        type : MacroPartType.MacroCall,
                        filename : expandedPart.expandedPart.substituted.filePart.filename,
                        start : argRange.start,
                        end : argRange.end,
                        expandedPart : {
                            ...expandedPart,
                            expandedPart : expandedPart.expandedPart,
                        },
                    }
                ),
                ...macroCallTrace,
            ]
        }
    }
}

export function getExpansionPath (
    diagnostic : DiagnosticLike,
    expandedContent : ExpandedContent,
) : ExpansionPath {
    return getExpansionPathImpl({
        diagnostic,
        expandedContent,
    });
}
