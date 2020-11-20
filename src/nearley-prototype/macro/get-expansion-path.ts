import {RelatedRange} from "../../diagnostic";
import {TextRange} from "../../parser-node";
import {ExpandedContent, TextRangeMap} from "./expand-content";
import {ConcreteSubstitution, MacroArgument} from "./expand-macro";
import {Macro} from "./find-all-macros";
import {DiagnosticLike} from "./trace-error";

export interface MyTextRangeMap extends TextRangeMap {
    filename : string,
    macroIdentifier : undefined|{
        src : TextRange,
        fileSrc : TextRange,
    },
    fileSrc : TextRange,
}

export interface MyMacroArgument extends MacroArgument {
    filename : string,
    fileSrc : TextRange,
}

export interface MyExpandedContent extends ExpandedContent {
    filename : string,
}

export interface MyConcreteSubstitution extends ConcreteSubstitution {
    filename : string,
    macro : Macro,
}

export type ExpansionPathItem =
    | MyExpandedContent
    //| ExpandedMacro
    | MyTextRangeMap
    | MyConcreteSubstitution
    | MyMacroArgument
;

export type ExpansionPath =
    | [MyExpandedContent]
    | [MyExpandedContent, MyTextRangeMap|MyMacroArgument]
    | [MyExpandedContent, MyTextRangeMap|MyMacroArgument, ...ExpansionPathItem[]];

export function isLength<ArrT extends readonly unknown[], LengthT extends number> (
    arr : ArrT,
    length : LengthT
) : arr is Extract<ArrT, { length : LengthT }> {
    return arr.length == length;
}

interface GetExpansionPathImplArgs {
    readonly depth : number,
    readonly offset : number,
    readonly filename : string,
    readonly diagnostic : DiagnosticLike,
    readonly expandedContent : ExpandedContent,
    readonly parent : undefined|{
        readonly macro : Macro|undefined,
        readonly originalToSubstituted : ConcreteSubstitution|undefined,
        readonly replacements : readonly ConcreteSubstitution[] | undefined,
        readonly originalToSubstituted_resultDst_start : number|undefined,
        readonly diagnosticRelativeStart : number|undefined,
        readonly resultDstStart : number|undefined,
    },

    readonly traceRelatedRange : (
        relatedRange : RelatedRange,
        expandedContent : ExpandedContent|undefined,
    ) => ExpansionPath,
}

function getExpansionPathImpl (
    {
        depth,
        offset,
        filename,
        diagnostic,
        expandedContent,
        parent,

        traceRelatedRange,
    } : GetExpansionPathImplArgs
) : ExpansionPath {
    /*
    if (parent?.diagnosticRelativeStart != undefined) {
        diagnostic = {
            start : diagnostic.start - parent.diagnosticRelativeStart,
            length : diagnostic.length,
        };
    }
    //*/
    const diagnosticEnd = diagnostic.start + diagnostic.length;
    const newDiagnosticEnd = diagnosticEnd - (
        //parent?.diagnosticRelativeStart == undefined ?
        parent?.resultDstStart == undefined ?
        0 :
        parent.resultDstStart
    );
    if (newDiagnosticEnd <= 0) {
        //negative-length/zero-length diagnostics do not make sense
        return [
            {
                ...expandedContent,
                filename,
            },
        ];
    }
    const originalToExpanded = expandedContent.originalToExpanded.find(originalToExpanded => {
        return originalToExpanded.resultDst.end >= newDiagnosticEnd;
    });
    if (originalToExpanded == undefined) {
        return [
            {
                ...expandedContent,
                filename,
            },
        ];
    }

    if (originalToExpanded.expandedMacro == undefined) {
        return [
            {
                ...expandedContent,
                filename,
            },
            {
                ...originalToExpanded,
                filename,
                macroIdentifier : undefined,
                fileSrc : {
                    start : diagnostic.start - originalToExpanded.resultDst.start + originalToExpanded.src.start + (parent?.macro?.content?.start ?? 0),
                    end : diagnostic.start - originalToExpanded.resultDst.start + originalToExpanded.src.start + (parent?.macro?.content?.start ?? 0) + diagnostic.length,
                },
            },
        ];
    }

    //We have a macro call
    const expandedMacro = originalToExpanded.expandedMacro;

    const macroResult1 = getExpansionPathImpl({
        depth : depth + 1,
        offset : 0,
        filename : expandedMacro.macro.filename,
        diagnostic,
        expandedContent : expandedMacro.expandedContent,
        parent : {
            macro : expandedMacro.macro,
            originalToSubstituted : undefined,
            replacements : undefined,
            originalToSubstituted_resultDst_start : undefined,
            diagnosticRelativeStart : undefined,
            //resultDstStart : originalToExpanded.resultDst.start + (parent?.resultDstStart ?? 0),
            resultDstStart : (parent?.resultDstStart ?? 0),
        },
        traceRelatedRange,
    });

    const expandedMacro_originalToExpandedOrArg1 = (
        isLength(macroResult1, 1) ?
        (
            parent?.macro == undefined ?
            {
                src : {
                    start : diagnostic.start - originalToExpanded.resultDst.start + originalToExpanded.dst.start - expandedMacro.originalToSubstituted[0].resultDst.start,
                    end : diagnosticEnd - originalToExpanded.resultDst.start + originalToExpanded.dst.start - expandedMacro.originalToSubstituted[0].resultDst.start,
                },
                fileSrc : {
                    start : diagnostic.start - originalToExpanded.resultDst.start + expandedMacro.macro.content.start,
                    end : diagnosticEnd - originalToExpanded.resultDst.start + expandedMacro.macro.content.start,
                },
                resultDst : {
                    start : diagnostic.start,
                    end : diagnosticEnd,
                },
            } :
            {
                src : {
                    start : diagnostic.start - expandedMacro.originalToSubstituted[0].resultDst.start,
                    end : diagnosticEnd - expandedMacro.originalToSubstituted[0].resultDst.start,
                },
                resultDst : {
                    start : diagnostic.start - expandedMacro.originalToSubstituted[0].resultDst.start,
                    end : diagnosticEnd - expandedMacro.originalToSubstituted[0].resultDst.start,
                },
            }
        ) :
        macroResult1[1]
    );

    const expandedMacro_originalToExpandedOrArg_resultDst_start_offset = (
        isLength(macroResult1, 1) ?
        0 :
        "src" in expandedMacro_originalToExpandedOrArg1 ?
        expandedMacro_originalToExpandedOrArg1.resultDst.start - expandedMacro_originalToExpandedOrArg1.src.start :
        0
    );
    const expandedMacro_originalToExpandedOrArg_resultDst_start1 = (
        "src" in expandedMacro_originalToExpandedOrArg1 ?
        (
            "macro" in expandedMacro_originalToExpandedOrArg1 ?
            0 :
            expandedMacro_originalToExpandedOrArg1.resultDst.start
        ) :
        //TODO
        0
    );
    expandedMacro_originalToExpandedOrArg_resultDst_start1;
    const expandedMacro_originalToExpandedOrArg_src_start1 = (
        "src" in expandedMacro_originalToExpandedOrArg1 ?
        expandedMacro_originalToExpandedOrArg1.src.start :
        //expandedMacro_originalToExpandedOrArg1.fileSrc.start :
        expandedMacro_originalToExpandedOrArg1.start
    );
    const expandedMacro_originalToExpandedOrArg_src_end1 = (
        "src" in expandedMacro_originalToExpandedOrArg1 ?
        expandedMacro_originalToExpandedOrArg1.src.end :
        //expandedMacro_originalToExpandedOrArg1.fileSrc.end :
        expandedMacro_originalToExpandedOrArg1.end
    );
    const expandedMacro_src_end_offset1 = (
        "src" in expandedMacro_originalToExpandedOrArg1 ?
        0 :
        0
        //originalToExpanded.resultDst.start
        //expandedMacro.macroIdentifier.src.start
    );
    const parent_resultDstStart = (
        "src" in expandedMacro_originalToExpandedOrArg1 ?
        (parent?.resultDstStart ?? 0) :
        0
    );

    const originalToSubstituted1 = (
        expandedMacro.originalToSubstituted.length == 1 ?
        //expanded macro content has no parameters
        expandedMacro.originalToSubstituted[0] :
        //expanded macro content has parameters
        expandedMacro.originalToSubstituted.find(originalToSubstituted => {
            //if ("src" in expandedMacro_originalToExpandedOrArg1) {
            //    return originalToSubstituted.resultDst.end >= expandedMacro_src_end_offset1 + expandedMacro_originalToExpandedOrArg_src_end1 - parent_resultDstStart;
            //}
            if (originalToSubstituted.resultDst.start == originalToSubstituted.resultDst.end) {
                //Ignore length-zero substrings
                return false;
            }
            const blah = expandedMacro.originalToSubstituted[0].resultDst.start;
            return (
                (
                    originalToSubstituted.resultDst.start >= expandedMacro_src_end_offset1 + expandedMacro_originalToExpandedOrArg_src_start1 - parent_resultDstStart + blah &&
                    originalToSubstituted.resultDst.end <= expandedMacro_src_end_offset1 + expandedMacro_originalToExpandedOrArg_src_end1 - parent_resultDstStart + blah
                ) ||
                (
                    originalToSubstituted.resultDst.start <= expandedMacro_src_end_offset1 + expandedMacro_originalToExpandedOrArg_src_start1 - parent_resultDstStart + blah &&
                    originalToSubstituted.resultDst.end >= expandedMacro_src_end_offset1 + expandedMacro_originalToExpandedOrArg_src_end1 - parent_resultDstStart + blah
                )
            );
        })
    );

    if (originalToSubstituted1 == undefined) {
        throw new Error(`Should have originalToSubstituted`);
    }

    expandedMacro.expandedContent.originalToExpanded
    const blah = expandedMacro.originalToSubstituted[0].resultDst.start
    const expandedMacro_expandedContent_originalToExpanded_src_end_min = expandedMacro_originalToExpandedOrArg_src_start1;
    const expandedMacro_expandedContent_originalToExpanded_src_max = originalToSubstituted1.resultDst.start - blah;
    const relativeResultDstStartAtOriginalToSubstituted = expandedMacro.expandedContent.originalToExpanded.reduce(
        (sum, originalToExpanded) => {
            if (originalToExpanded.src.start == originalToExpanded.src.end) {
                return sum;
            }
            if (originalToExpanded.src.end <= expandedMacro_expandedContent_originalToExpanded_src_end_min) {
                return sum;
            }
            //TODO check if we want >= or >
            if (originalToExpanded.src.start > expandedMacro_expandedContent_originalToExpanded_src_max) {
                return sum;
            }

            if (originalToExpanded.src.end <= expandedMacro_expandedContent_originalToExpanded_src_max) {
                const length = originalToExpanded.resultDst.end - originalToExpanded.resultDst.start;
                return sum + length;
            } else {
                const length = expandedMacro_expandedContent_originalToExpanded_src_max - originalToExpanded.src.start;
                return sum + length;
            }
        },
        0
    );
    relativeResultDstStartAtOriginalToSubstituted;

    const macroResult2 = getExpansionPathImpl({
        depth : depth + 1,
        offset : 0,
        filename : expandedMacro.macro.filename,
        diagnostic,
        expandedContent : expandedMacro.expandedContent,
        parent : {
            macro : expandedMacro.macro,
            originalToSubstituted : originalToSubstituted1,
            replacements : expandedMacro.originalToSubstituted.filter(originalToSubstituted => {
                return originalToSubstituted.src.parameterName != undefined;
            }),
            originalToSubstituted_resultDst_start : undefined,
            diagnosticRelativeStart : undefined,
            //resultDstStart : originalToExpanded.resultDst.start + (parent?.resultDstStart ?? 0),
            resultDstStart : (parent?.resultDstStart ?? 0),
        },
        traceRelatedRange,
    });
    const macroResult = macroResult2;
    const originalToSubstituted = originalToSubstituted1;

    /**
     * @todo improve
     */
    /*const lastMacroResultWithResultDst = [...macroResult].reverse().find<MyTextRangeMap|MyConcreteSubstitution>(
        (result) : result is MyTextRangeMap|MyConcreteSubstitution => {
            if ("resultDst" in result) {
                result;
                return true;
            } else {
                return false;
            }
        }
    );*/
    const macroConreteSubstitutions = [...macroResult].filter<MyConcreteSubstitution>((result) : result is MyConcreteSubstitution => {
        if ("macro" in result) {
            result;
            return true;
        } else {
            return false;
        }
    });

    originalToExpanded.resultDst.start
    //let diagnosticRelativeStart = diagnostic.start;// - originalToSubstituted.resultDst.start;
    let diagnosticRelativeStart = diagnostic.start;
    const expandedMacro_expandedContent_originalToExpanded = expandedMacro.expandedContent.originalToExpanded.find(originalToExpanded => {
        return originalToExpanded.resultDst.end >= diagnosticEnd;
    });
    const macroConreteSubstitutions_resultDst_start = macroConreteSubstitutions.reduce(
        (memo, sub) => {
            return memo + sub.resultDst.start;
        },
        0
    );
    macroConreteSubstitutions_resultDst_start;
    expandedMacro_expandedContent_originalToExpanded;
    if (macroConreteSubstitutions.length > 0) {
        for (const sub of macroConreteSubstitutions) {
            diagnosticRelativeStart -= sub.resultDst.start;
        }
        diagnosticRelativeStart -= (parent?.resultDstStart ?? 0);
    //if (lastMacroResultWithResultDst != undefined) {
    //    diagnosticRelativeStart -= lastMacroResultWithResultDst.resultDst.start;
    //} else if (expandedMacro_expandedContent_originalToExpanded != undefined) {
    //    diagnosticRelativeStart -= expandedMacro_expandedContent_originalToExpanded.resultDst.start;
    } else {
        /*
        if (parent?.originalToSubstituted_resultDst_start != undefined) {
            diagnosticRelativeStart -= parent.originalToSubstituted_resultDst_start;
        }
        //*/

        if (originalToSubstituted.src.parameterName == undefined) {
            diagnosticRelativeStart += originalToSubstituted.src.start;
        } else {
            if (diagnosticRelativeStart == expandedMacro_originalToExpandedOrArg_resultDst_start1) {
                diagnosticRelativeStart -= originalToSubstituted.src.start;
                diagnosticRelativeStart -= originalToExpanded.resultDst.start;
                diagnosticRelativeStart -= (parent?.resultDstStart ?? 0);
            } else {
                diagnosticRelativeStart -= expandedMacro_originalToExpandedOrArg_resultDst_start1;
                diagnosticRelativeStart -= relativeResultDstStartAtOriginalToSubstituted;
            }
        }
    }

    if (originalToSubstituted.src.parameterName == undefined) {
        const macroIdentifierOffset = (parent?.macro?.content.start ?? 0) + offset;
        //This string did not come from a parameter.
        return [
            {
                ...expandedContent,
                filename,
            },
            {
                ...originalToExpanded,
                macroIdentifier : {
                    src : expandedMacro.macroIdentifier.src,
                    fileSrc : {
                        start : macroIdentifierOffset + expandedMacro.macroIdentifier.src.start,
                        end : macroIdentifierOffset + expandedMacro.macroIdentifier.src.end,
                    },
                },
                filename,
                fileSrc : {
                    start : macroIdentifierOffset + expandedMacro.macroIdentifier.src.start,
                    end : macroIdentifierOffset + expandedMacro.macroIdentifier.src.end,
                },
            },
            //expandedMacro,
            ...(
                macroResult.length == 1 ?
                [
                    {
                        ...originalToSubstituted,
                        macro : expandedMacro.macro,
                        filename : expandedMacro.macro.filename,
                        src : (
                            //parent?.diagnosticRelativeStart == undefined ?
                            parent?.originalToSubstituted_resultDst_start == undefined ?
                            {
                                start : diagnosticRelativeStart,
                                end : diagnosticRelativeStart + diagnostic.length,
                                parameterName : originalToSubstituted.src.parameterName,
                            } :
                            {
                                start : diagnostic.start - parent.originalToSubstituted_resultDst_start,
                                end : diagnostic.start - parent.originalToSubstituted_resultDst_start + diagnostic.length,
                                //start : diagnostic.start - diagnosticRelativeStart,
                                //end : diagnostic.start - diagnosticRelativeStart + diagnostic.length,
                                //start : diagnosticRelativeStart,
                                //end : diagnosticRelativeStart + diagnostic.length,
                                parameterName : originalToSubstituted.src.parameterName,
                            }
                        ),
                    }
                ] :
                []
            ),
            ...macroResult,
        ];
    }

    const parameterIndex = expandedMacro.macro.parameterList.findIndex(parameter => {
        return parameter.parameterName == originalToSubstituted.src.parameterName;
    });

    if (parameterIndex < 0) {
        throw new Error(`Should have parameterIndex`);
    }

    //This string came from an argument.
    const arg = expandedMacro.args[parameterIndex];
    const argResult = getExpansionPathImpl({
        depth : depth,
        offset : offset + arg.start,
        filename : filename,
        diagnostic : {
            //start : diagnosticRelativeStart,
            start : diagnostic.start,
            length : diagnostic.length,
        },
        expandedContent : arg.value,
        parent : {
            macro : parent?.macro,
            originalToSubstituted : undefined,
            replacements : parent?.replacements,
            //diagnosticRelativeStart
            originalToSubstituted_resultDst_start : (parent?.originalToSubstituted_resultDst_start ?? 0) + originalToSubstituted.resultDst.start + expandedMacro_originalToExpandedOrArg_resultDst_start_offset,
            //diagnosticRelativeStart : (parent?.diagnosticRelativeStart ?? 0) + diagnosticRelativeStart + originalToSubstituted.resultDst.start,
            //originalToSubstituted_resultDst_start : originalToSubstituted.resultDst.start,
            diagnosticRelativeStart : diagnosticRelativeStart + originalToSubstituted.resultDst.start,
            //todo confirm calculation
            resultDstStart : originalToSubstituted.resultDst.start + expandedMacro_originalToExpandedOrArg_resultDst_start_offset + (parent?.resultDstStart ?? 0),
        },
        traceRelatedRange,
    });

    let myArg : TextRange = (
        parent?.originalToSubstituted == undefined ?
        arg :
        parent.originalToSubstituted.src.parameterName == undefined ?
        arg :
        arg//parent.originalToSubstituted.src
    );
    let hasReplacements = false;
    if (parent?.replacements != undefined) {
        const replacements = parent.replacements.filter(replacement => {
            return (
                replacement.dst.start - offset >= myArg.start &&
                replacement.dst.end - offset <= myArg.end
            )
        });
        const replacementLengths = replacements.map(replacement => {
            const srcLength = replacement.src.end - replacement.src.start;
            const dstLength = replacement.dst.end - replacement.dst.start;
            return srcLength - dstLength;
        });
        const myArgLength = myArg.end - myArg.start;
        const newLength = replacementLengths.reduce(
            (memo, item) => {
                return memo + item;
            },
            myArgLength
        );
        if (replacementLengths.length > 0) {
            myArg = {
                start : myArg.start,
                end : myArg.start + newLength,
            };
            hasReplacements = true;
        }
    }
    if (!hasReplacements && parent?.macro == undefined && depth == 0) {
        debugger;
        //diagnosticRelativeStart = 0;
    }
    if (argResult.length == 1) {
        //Argument does not call macros
        return [
            {
                ...expandedContent,
                filename,
            },
            //originalToExpanded,
            {
                ...arg,
                filename,
                start : myArg.start,
                end : myArg.end,
                fileSrc : (
                    hasReplacements ?
                    (
                        parent?.macro == undefined ?
                        {
                            start : offset + myArg.start,
                            end : offset + myArg.end,
                        } :
                        {
                            start : parent.macro.content.start + offset + myArg.start,
                            end : parent.macro.content.start + offset + myArg.end,
                        }
                    ) :
                    (
                        parent?.macro == undefined ?
                        {
                            //start : offset + myArg.start,
                            //end : offset + myArg.end,
                            //Need this to pass unnested-macro/use-macro-twice
                            start : offset + myArg.start + diagnosticRelativeStart,
                            end : offset + myArg.start + diagnosticRelativeStart + diagnostic.length,
                        } :
                        {
                            start : parent.macro.content.start + offset + myArg.start + diagnosticRelativeStart,
                            end : parent.macro.content.start + offset + myArg.start + diagnosticRelativeStart + diagnostic.length,
                            //start : parent.macro.content.start + offset + myArg.start + macroConreteSubstitutions_resultDst_start,
                            //end : parent.macro.content.start + offset + myArg.start + macroConreteSubstitutions_resultDst_start + diagnostic.length,
                            //start : parent.macro.content.start + offset + myArg.start,
                            //end : parent.macro.content.start + offset + myArg.start + diagnostic.length,
                        }
                    )
                ),
                /*fileSrc : ,*/
            },
            //expandedMacro,
            {
                ...originalToSubstituted,
                macro : expandedMacro.macro,
                filename : expandedMacro.macro.filename,
            },
            ...macroResult,
        ];
    }

    //Argument calls macros
    return [
        {
            ...expandedContent,
            filename,
        },
        //originalToExpanded,
        {
            ...arg,
            filename,
            start : myArg.start,
            end : myArg.end,
            fileSrc : (
                parent?.macro == undefined ?
                {
                    start : offset + myArg.start,
                    end : offset + myArg.end,
                } :
                {
                    start : parent.macro.content.start + offset + myArg.start,
                    end : parent.macro.content.start + offset + myArg.end,
                }
            ),
        },
        ...argResult,
        //expandedMacro,
        {
            ...originalToSubstituted,
            macro : expandedMacro.macro,
            filename : expandedMacro.macro.filename,
        },
        ...macroResult,
    ];
}

export function getExpansionPath (
    filename : string,
    diagnostic : DiagnosticLike,
    expandedContent : ExpandedContent,
    getExpandedContent : (filename : string) => ExpandedContent,
) : ExpansionPath {
    return getExpansionPathImpl({
        depth : 0,
        offset : 0,
        filename,
        diagnostic,
        expandedContent,
        parent : undefined,

        traceRelatedRange : (relatedRange, expandedContent) => {
            return getExpansionPath(
                relatedRange.filename,
                relatedRange,
                expandedContent ?? getExpandedContent(relatedRange.filename),
                getExpandedContent,
            );
        },
    });
}
