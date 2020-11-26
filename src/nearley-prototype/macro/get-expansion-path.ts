import {TextRange} from "../../parser-node";
import {ExpandedContent, TextRangeMap, ExpandedMacroCallPart} from "./expand-content";
import {MacroPartType} from "./find-all-macros";
import {SubstitutedParameterReferencePart, SubstitutedPlainTextPart} from "./substitute";
import {DiagnosticLike} from "./trace-error-3";

export interface PlainTextPathItem extends TextRange {
    type : MacroPartType.PlainText,
    filename : string,
    expandedPart : TextRangeMap & { expandedPart : SubstitutedPlainTextPart },
    depth : number,
}

export interface ParameterReferencePathItem extends TextRange {
    type : MacroPartType.ParameterReference,
    filename : string,
    expandedPart : TextRangeMap & { expandedPart : SubstitutedParameterReferencePart },
    argTrace : ExpansionPath,
    depth : number,
}

export interface MacroCallPathItem extends TextRange {
    type : MacroPartType.MacroCall,
    filename : string,
    expandedPart : TextRangeMap & { expandedPart : ExpandedMacroCallPart },
    depth : number,
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
    readonly depth : number,
}

function findArgumentRangeImpl (
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

        const argTraceResult = findArgumentRangeImpl(item.argTrace, filename, start, end);
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

function findArgumentRanges (
    path : ExpansionPath,
    filename : string,
    start : number,
    end : number
) : {
    argRange : ExpansionPathItem|undefined,
    splitPath : ExpansionPath,
}[] {
    if (path.length == 0) {
        return [
            {
                argRange : undefined,
                splitPath : path,
            }
        ];
    }

    const depth = path[0].depth;
    const splitPaths = path.reduce<ExpansionPath[]>(
        (memo, cur) => {
            if (cur.depth == depth) {
                memo.push([]);
            }
            memo[memo.length-1].push(cur);
            return memo;
        },
        []
    );
    const results : {
        argRange : ExpansionPathItem|undefined,
        splitPath : ExpansionPath,
    }[] = [];

    for (const splitPath of splitPaths) {
        const splitResult = findArgumentRangeImpl(splitPath, filename, start, end);
        results.push({
            argRange : splitResult,
            splitPath,
        });
    }

    return results;
}

function getExpansionPathPerPart (
    {
        diagnostic,
        //expandedContent,
        depth,
    } : GetExpansionPathImplArgs,
    expandedPart : TextRangeMap
) : ExpansionPath {
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
                depth,
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
            depth : depth + 1,
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
                depth,
            },
        ]
    } else {
        const macroCallTrace = getExpansionPathImpl({
            diagnostic,
            expandedContent : expandedPart.expandedPart.expandedMacro.expandedContent,
            depth : depth + 1,
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
                    depth,
                },
                ...macroCallTrace,
            ]
        } else if (firstPathItem.expandedPart.expandedPart.type == MacroPartType.ParameterReference) {
            const usedMacroArgument = firstPathItem.expandedPart.expandedPart.macroArgument;
            const usedMyMacroArgument = expandedPart.expandedPart.macroArguments.some(arg => arg == usedMacroArgument);
            if (usedMyMacroArgument) {
                const argRanges = findArgumentRanges(
                    macroCallTrace,
                    expandedPart.expandedPart.substituted.filePart.filename,
                    usedMacroArgument.substitutedArgument.argument.fileSrc.start,
                    usedMacroArgument.substitutedArgument.argument.fileSrc.end
                );
                const myExpandedPart : TextRangeMap & {
                    expandedPart: ExpandedMacroCallPart;
                } = {
                    ...expandedPart,
                    expandedPart : expandedPart.expandedPart,
                };
                return argRanges.reduce<ExpansionPath>(
                    (memo, { argRange, splitPath }) => {
                        if (argRange != undefined && argRange.type == MacroPartType.MacroCall) {
                            memo.push(
                                {
                                    type : MacroPartType.MacroCall,
                                    filename : myExpandedPart.expandedPart.substituted.filePart.filename,
                                    start : argRange.expandedPart.expandedPart.substituted.filePart.fileSrc.start,
                                    end : argRange.expandedPart.expandedPart.substituted.filePart.fileSrc.end,
                                    expandedPart : myExpandedPart,
                                    depth,
                                },
                                ...splitPath,
                            );
                            return memo;
                        }

                        memo.push(
                            (
                                argRange == undefined ?
                                {
                                    type : MacroPartType.MacroCall,
                                    filename : myExpandedPart.expandedPart.substituted.filePart.filename,
                                    start : usedMacroArgument.substitutedArgument.argument.fileSrc.start,
                                    end : usedMacroArgument.substitutedArgument.argument.fileSrc.end,
                                    expandedPart : myExpandedPart,
                                    depth,
                                } :
                                {
                                    type : MacroPartType.MacroCall,
                                    filename : myExpandedPart.expandedPart.substituted.filePart.filename,
                                    start : argRange.start,
                                    end : argRange.end,
                                    expandedPart : myExpandedPart,
                                    depth,
                                }
                            ),
                            ...splitPath,
                        );
                        return memo;
                    },
                    []
                );
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
                        depth,
                    },
                    ...macroCallTrace,
                ];
            }
        } else {
            const argRanges = findArgumentRanges(
                macroCallTrace,
                expandedPart.expandedPart.substituted.filePart.filename,
                expandedPart.expandedPart.substituted.filePart.fileSrc.start,
                expandedPart.expandedPart.substituted.filePart.fileSrc.end
            );
            const myExpandedPart : TextRangeMap & {
                expandedPart: ExpandedMacroCallPart;
            } = {
                ...expandedPart,
                expandedPart : expandedPart.expandedPart,
            };
            return argRanges.reduce<ExpansionPath>(
                (memo, { argRange, splitPath }) => {
                    memo.push(
                        (
                            argRange == undefined ?
                            {
                                type : MacroPartType.MacroCall,
                                filename : myExpandedPart.expandedPart.substituted.filePart.filename,
                                start : myExpandedPart.expandedPart.substituted.macroIdentifier.macroIdentifier.fileSrc.start,
                                end : myExpandedPart.expandedPart.substituted.macroIdentifier.macroIdentifier.fileSrc.end,
                                expandedPart : myExpandedPart,
                                depth,
                            } :
                            {
                                type : MacroPartType.MacroCall,
                                filename : myExpandedPart.expandedPart.substituted.filePart.filename,
                                start : argRange.start,
                                end : argRange.end,
                                expandedPart : myExpandedPart,
                                depth,
                            }
                        ),
                        ...splitPath,
                    );
                    return memo;
                },
                []
            );
        }
    }
}

function getExpansionPathImpl (
    {
        diagnostic,
        expandedContent,
        depth,
    } : GetExpansionPathImplArgs
) : ExpansionPath {
    const expandedParts = expandedContent.expandedParts.filter(expandedPart => {
        if (expandedPart.expandedSrc.start == expandedPart.expandedSrc.end) {
            return false;
        }
        return (
            (
                expandedPart.expandedSrc.start <= diagnostic.start &&
                expandedPart.expandedSrc.end > diagnostic.start
            ) ||
            (
                expandedPart.expandedSrc.start < diagnostic.start + diagnostic.length &&
                expandedPart.expandedSrc.end >= diagnostic.start + diagnostic.length
            )
        );
    });
    if (expandedParts.length == 0) {
        //This should not happen...
        throw new Error(`Diagnostic is outside expanded content`);
    }

    const result : ExpansionPathItem[] = [];
    for (const expandedPart of expandedParts) {
        const newDiagnosticStart = Math.max(
            diagnostic.start,
            expandedPart.expandedSrc.start
        );
        const newDiagnosticEnd = Math.min(
            diagnostic.start + diagnostic.length,
            expandedPart.expandedSrc.end
        );

        const expandedPartPath = getExpansionPathPerPart(
            {
                diagnostic : {
                    start : newDiagnosticStart,
                    length : newDiagnosticEnd - newDiagnosticStart,
                },
                expandedContent,
                depth : depth + 1,
            },
            expandedPart
        );
        result.push(...expandedPartPath);
    }
    return result;
}

export function getExpansionPath (
    diagnostic : DiagnosticLike,
    expandedContent : ExpandedContent,
) : ExpansionPath {
    return getExpansionPathImpl({
        diagnostic,
        expandedContent,
        depth : 0,
    });
}
