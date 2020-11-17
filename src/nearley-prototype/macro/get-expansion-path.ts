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
    }
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

function isLength<ArrT extends readonly unknown[], LengthT extends number> (
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
    const diagnosticEnd = diagnostic.start + diagnostic.length;
    const originalToExpanded = expandedContent.originalToExpanded.find(originalToExpanded => {
        return originalToExpanded.resultDst.end >= diagnosticEnd;
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
        },
        traceRelatedRange,
    });

    const expandedMacro_originalToExpandedOrArg1 = (
        isLength(macroResult1, 1) ?
        {
            src : {
                start : diagnostic.start,
                end : diagnosticEnd,
            }
        } :
        macroResult1[1]
    );

    const expandedMacro_originalToExpandedOrArg_src_start1 = (
        "src" in expandedMacro_originalToExpandedOrArg1 ?
        expandedMacro_originalToExpandedOrArg1.src.start :
        expandedMacro_originalToExpandedOrArg1.start
    );
    const expandedMacro_originalToExpandedOrArg_src_end1 = (
        "src" in expandedMacro_originalToExpandedOrArg1 ?
        expandedMacro_originalToExpandedOrArg1.src.end :
        expandedMacro_originalToExpandedOrArg1.end
    );
    const expandedMacro_src_end_offset1 = (
        "src" in expandedMacro_originalToExpandedOrArg1 ?
        0 :
        originalToExpanded.resultDst.start
        //expandedMacro.macroIdentifier.src.start
    );

    const originalToSubstituted1 = (
        expandedMacro.originalToSubstituted.length == 1 ?
        //expanded macro content has no parameters
        expandedMacro.originalToSubstituted[0] :
        //expanded macro content has parameters
        expandedMacro.originalToSubstituted.find(originalToSubstituted => {
            if ("src" in expandedMacro_originalToExpandedOrArg1) {
                return originalToSubstituted.resultDst.end >= expandedMacro_src_end_offset1 + expandedMacro_originalToExpandedOrArg_src_end1;
            }
            return (
                originalToSubstituted.resultDst.start >= expandedMacro_src_end_offset1 + expandedMacro_originalToExpandedOrArg_src_start1 &&
                originalToSubstituted.resultDst.end <= expandedMacro_src_end_offset1 + expandedMacro_originalToExpandedOrArg_src_end1
            );
        })
    );

    if (originalToSubstituted1 == undefined) {
        throw new Error(`Should have originalToSubstituted`);
    }

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
    let diagnosticRelativeStart = diagnostic.start;// - originalToSubstituted.resultDst.start;
    const expandedMacro_expandedContent_originalToExpanded = expandedMacro.expandedContent.originalToExpanded.find(originalToExpanded => {
        return originalToExpanded.resultDst.end >= diagnosticEnd;
    });
    if (macroConreteSubstitutions.length > 0) {
        for (const sub of macroConreteSubstitutions) {
            diagnosticRelativeStart -= sub.resultDst.start;
        }
    //if (lastMacroResultWithResultDst != undefined) {
    //    diagnosticRelativeStart -= lastMacroResultWithResultDst.resultDst.start;
    } else if (expandedMacro_expandedContent_originalToExpanded != undefined) {
        diagnosticRelativeStart -= expandedMacro_expandedContent_originalToExpanded.resultDst.start;
    } else {
        diagnosticRelativeStart -= originalToSubstituted.resultDst.start;
        if (originalToSubstituted.src.parameterName == undefined) {
            diagnosticRelativeStart += originalToSubstituted.src.start;
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
            },
            //expandedMacro,
            ...(
                macroResult.length == 1 ?
                [
                    {
                        ...originalToSubstituted,
                        macro : expandedMacro.macro,
                        filename : expandedMacro.macro.filename,
                        src : {
                            start : diagnosticRelativeStart,
                            end : diagnosticRelativeStart + diagnostic.length,
                            parameterName : originalToSubstituted.src.parameterName,
                        },
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
            start : diagnosticRelativeStart,
            length : diagnostic.length,
        },
        expandedContent : arg.value,
        parent : {
            macro : parent?.macro,
            originalToSubstituted : undefined,
            replacements : parent?.replacements,
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
                            start : offset + myArg.start + diagnosticRelativeStart,
                            end : offset + myArg.start + diagnosticRelativeStart + diagnostic.length,
                        } :
                        {
                            start : parent.macro.content.start + offset + myArg.start + diagnosticRelativeStart,
                            end : parent.macro.content.start + offset + myArg.start + diagnosticRelativeStart + diagnostic.length,
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
