import {Diagnostic, RelatedRange} from "../../diagnostic";
import {ExpandedContent, TextRangeMap} from "./expand-content";
import {ConcreteSubstitution, ExpandedMacro} from "./expand-macro";

export interface DiagnosticLike {
    readonly start: number;
    readonly length: number;
    readonly relatedRanges? : readonly RelatedRange[];
}

export interface MakeResultArgs {
    readonly newDiagnosticStart : number;
    readonly newDiagnosticLength : number;
    readonly newRelatedRanges : undefined|(readonly RelatedRange[]);
}

export interface DoThingArgs<
    DiagnosticT extends DiagnosticLike,
    ResultT
> {
    readonly filename : string,
    readonly diagnostic : DiagnosticT,
    readonly expandedContent : ExpandedContent,

    readonly depth : number,

    readonly makeResult : (makeResultArgs : MakeResultArgs) => ResultT,
    readonly traceRelatedRange : (
        offset : number,
        relatedRange : RelatedRange,
        expandedContent : ExpandedContent|undefined,
        depth : number,
    ) => RelatedRange[],
}

export function doThing<
    DiagnosticT extends DiagnosticLike,
    ResultT
> (
    {
        filename,
        diagnostic,
        expandedContent,

        depth,

        makeResult,
        traceRelatedRange,
    } : DoThingArgs<DiagnosticT, ResultT>
) : ResultT {
    const diagnosticEnd = diagnostic.start + diagnostic.length;
    const map = expandedContent.originalToExpanded.find(map => {
        return map.resultDst.end >= diagnosticEnd;
    });
    if (map == undefined) {
        return makeResult({
            newDiagnosticStart : diagnostic.start,
            newDiagnosticLength : diagnostic.length,
            newRelatedRanges : diagnostic.relatedRanges,
        });
    }

    function createResultWithoutExpandedMacro (map : TextRangeMap) {
        const delta = map.dst.start - map.src.start;
        return makeResult({
            newDiagnosticStart : diagnostic.start - delta,
            newDiagnosticLength : diagnostic.length,
            newRelatedRanges : (
                diagnostic.relatedRanges == undefined ?
                undefined :
                diagnostic.relatedRanges
                    .map(relatedRange => {
                        return traceRelatedRange(
                            0,
                            relatedRange,
                            undefined,
                            depth,
                        );
                    })
                    .flat(1)
            ),
        });
    }

    function createResultWithoutParameter (
        map : TextRangeMap,
        expandedMacro : ExpandedMacro,
        originalToSubstituted : ConcreteSubstitution,
        nestedMacroRelatedRanges : RelatedRange[],
    ) {
        //const delta = map.dst.start - map.src.start;
        const macroReferenceLength = expandedMacro.macro.identifier.end - expandedMacro.macro.identifier.start;
        const relatedRanges = (
            diagnostic.relatedRanges == undefined ?
            [] :
            diagnostic.relatedRanges
        );

        const diagnosticRelativeStart = diagnostic.start - originalToSubstituted.resultDst.start;
        diagnosticRelativeStart;

        return makeResult({
            newDiagnosticStart : map.src.start,//diagnostic.start - delta,
            newDiagnosticLength : macroReferenceLength + 1,
            newRelatedRanges : [
                /*{
                    filename : expandedMacro.macro.filename,
                    start : expandedMacro.macro.content.start + originalToSubstituted.src.start + diagnosticRelativeStart,
                    length : diagnosticEnd - diagnostic.start,
                },*/
                ...nestedMacroRelatedRanges,
                ...relatedRanges
                    .map(relatedRange => {
                        return traceRelatedRange(
                            0,
                            relatedRange,
                            undefined,
                            depth,
                        );
                    })
                    .flat(1),
            ],
        });
    }

    if (map.expandedMacro == undefined) {
        return createResultWithoutExpandedMacro(map);
    }

    const originalToExpanded = map.expandedMacro.expandedContent.originalToExpanded
        .find(originalToExpanded => {
            return originalToExpanded.resultDst.end >= diagnosticEnd;
        });
    if (originalToExpanded == undefined) {
        //map.expandedMacro.macro does not call macro
        //or diagnostic is not inside a macro call
        const originalToSubstituted = map.expandedMacro.originalToSubstituted.find(originalToSubstituted => {
            return originalToSubstituted.resultDst.end >= diagnosticEnd;
        });
        if (originalToSubstituted == undefined) {
            return createResultWithoutExpandedMacro(map);
        }

        const parameterIndex = map.expandedMacro.macro.parameterList.findIndex(
            parameter => parameter.parameterName == originalToSubstituted.src.parameterName
        );
        if (parameterIndex < 0) {
            const diagnosticRelativeStart = diagnostic.start - originalToSubstituted.resultDst.start;

            const nestedMacroRelatedRanges = traceRelatedRange(
                map.expandedMacro.macro.content.start,
                (
                    map.expandedMacro.expandedContent.originalToExpanded.length == 0 ?
                    {
                        filename : map.expandedMacro.macro.filename,
                        start : originalToSubstituted.src.start + diagnosticRelativeStart,
                        length : diagnostic.length,
                        //length : originalToSubstituted.src.end - originalToSubstituted.src.start,
                    } :
                    {
                        filename : map.expandedMacro.macro.filename,
                        start : diagnostic.start,
                        length : diagnostic.length,
                    }
                ),
                map.expandedMacro.expandedContent,
                depth + 1,
            );

            if (
                map.expandedMacro.expandedContent.originalToExpanded.length > 0 &&
                originalToSubstituted.src.parameterName != undefined
            ) {
                nestedMacroRelatedRanges[0].start = map.expandedMacro.macro.content.start + originalToSubstituted.src.start;
                nestedMacroRelatedRanges[0].length = originalToSubstituted.src.parameterName.length;
            }

            //diagnostic is not inside of an argument.
            //Either before or after.
            //diagnostic is part of the unexpanded macro content itself.
            return createResultWithoutParameter(
                map,
                map.expandedMacro,
                originalToSubstituted,
                nestedMacroRelatedRanges,
            );
        }

        const nestedMacroRelatedRanges = traceRelatedRange(
            map.expandedMacro.macro.content.start,
            (
                map.expandedMacro.expandedContent.originalToExpanded.length == 0 ?
                {
                    filename : map.expandedMacro.macro.filename,
                    start : originalToSubstituted.src.start,
                    length : originalToSubstituted.src.end - originalToSubstituted.src.start,
                } :
                {
                    filename : map.expandedMacro.macro.filename,
                    start : diagnostic.start,
                    length : diagnostic.length,
                }
            ),
            map.expandedMacro.expandedContent,
            depth + 1,
        );

        if (
            map.expandedMacro.expandedContent.originalToExpanded.length > 0 &&
            originalToSubstituted.src.parameterName != undefined
        ) {
            nestedMacroRelatedRanges[0].start = map.expandedMacro.macro.content.start + originalToSubstituted.src.start;
            nestedMacroRelatedRanges[0].length = originalToSubstituted.src.parameterName.length;
        }

        const parameter = map.expandedMacro.macro.parameterList[parameterIndex];

        const arg = map.expandedMacro.args[parameterIndex];

        let argTrace = (
            arg.value.originalToExpanded.length == 0 ?
            //The `arg` does not call any macros
            [] :
            //The `arg` has a macro call
            traceRelatedRange(
                0,
                {
                    filename,
                    start : diagnostic.start - originalToSubstituted.resultDst.start,
                    length : diagnostic.length,
                },
                arg.value,
                depth,
            )
        );

        const xStart = (
            depth == 0 ?
            diagnostic.start - originalToSubstituted.resultDst.start + arg.start :

            //@see unnested-macro-2-twice/use-macro-thrice.txt
            arg.start + (diagnostic.start - originalToSubstituted.resultDst.start)
            //@see crazy-thing-3
            //@see crazy-thing-4
            //arg.start
        );
        const argOriginalToExpanded = arg.value.originalToExpanded.find(originalToExpanded => {
            return originalToExpanded.resultDst.end >= diagnostic.start - originalToSubstituted.resultDst.start
        });
        argOriginalToExpanded;

        let diagnosticRelativeStart = diagnostic.start - originalToSubstituted.resultDst.start;
        diagnosticRelativeStart;

        if (argOriginalToExpanded != undefined) {
            diagnosticRelativeStart -= argOriginalToExpanded.resultDst.start;
        }

        //If `undefined`, the `arg` does not call any macros.
        const firstArgTrace = argTrace.shift();
        const newDiagnosticStart = (
            firstArgTrace == undefined ?
            xStart :
            depth == 0 ?
            firstArgTrace.start + arg.start :
            //@see depth-0/crazy-thing-6
            firstArgTrace.start + arg.start + diagnosticRelativeStart
        );
        if (firstArgTrace != undefined && depth != 0) {
            debugger;
        }
        const newDiagnosticLength = (
            firstArgTrace == undefined ?
            diagnostic.length :
            firstArgTrace.length
        );
        const relatedRanges = (
            diagnostic.relatedRanges == undefined ?
            [] :
            diagnostic.relatedRanges
        );

        return makeResult({
            newDiagnosticStart,
            newDiagnosticLength,
            newRelatedRanges : [
                ...argTrace,
                {
                    filename : map.expandedMacro.macro.filename,
                    start : parameter.start,
                    length : parameter.end - parameter.start,
                },
                ...nestedMacroRelatedRanges,
                ...relatedRanges
                    .map(relatedRange => {
                        return traceRelatedRange(0, relatedRange, undefined, depth);
                    })
                    .flat(1),
            ],
        });
    }

    if (originalToExpanded.expandedMacro == undefined) {
        return createResultWithoutExpandedMacro(map);
    }

    const originalToSubstituted2 = originalToExpanded.expandedMacro.originalToSubstituted.find(originalToSubstituted => {
        return originalToSubstituted.resultDst.end >= diagnosticEnd;
    });
    if (originalToSubstituted2 == undefined) {
        return createResultWithoutExpandedMacro(map);
    }

    const parameterIndex2 = originalToExpanded.expandedMacro.macro.parameterList.findIndex(
        parameter => parameter.parameterName == originalToSubstituted2.src.parameterName
    );
    if (parameterIndex2 < 0) {
        const diagnosticRelativeStart = diagnostic.start - originalToSubstituted2.resultDst.start;

        const nestedMacroRelatedRanges = traceRelatedRange(
            map.expandedMacro.macro.content.start,
            (
                map.expandedMacro.expandedContent.originalToExpanded.length == 0 ?
                {
                    filename : map.expandedMacro.macro.filename,
                    start : originalToSubstituted2.src.start + diagnosticRelativeStart,
                    length : diagnostic.length,
                    //length : originalToSubstituted.src.end - originalToSubstituted.src.start,
                } :
                {
                    filename : map.expandedMacro.macro.filename,
                    start : diagnostic.start,
                    length : diagnostic.length,
                }
            ),
            map.expandedMacro.expandedContent,
            depth + 1
        );

        if (
            map.expandedMacro.expandedContent.originalToExpanded.length > 0 &&
            originalToSubstituted2.src.parameterName != undefined
        ) {
            nestedMacroRelatedRanges[0].length = originalToSubstituted2.src.parameterName.length;
        }

        return createResultWithoutParameter(
            map,
            map.expandedMacro,
            originalToSubstituted2,
            nestedMacroRelatedRanges,
        );
        //return createResultWithoutExpandedMacro(map);
    }
    const parameter2 = originalToExpanded.expandedMacro.macro.parameterList[parameterIndex2];
    const arg2Qwerty = originalToExpanded.expandedMacro.args[parameterIndex2];

    function arg2QwertyThing (
        map : TextRangeMap & { expandedMacro : ExpandedMacro },
        originalToSubstituted2 : ConcreteSubstitution
    ) {
        const originalToSubstituted = map.expandedMacro.originalToSubstituted.find(originalToSubstituted => {
            //return originalToSubstituted.dst.start >= originalToExpanded.src.start;
            //return originalToSubstituted.src.end >= originalToExpanded.src.end;
            /*if (originalToExpanded.expandedMacro == undefined) {
                return originalToSubstituted.resultDst.end >= originalToExpanded.resultDst.end;
            } else {
                return originalToSubstituted.src.end >= originalToExpanded.src.end;
            }*/
            const offset = map.expandedMacro!.originalToSubstituted[0].resultDst.start;
            return originalToSubstituted.resultDst.end - offset >= arg2Qwerty.end;
        });
        if (originalToSubstituted == undefined) {
            return createResultWithoutExpandedMacro(map);
        }

        const parameterIndex = map.expandedMacro.macro.parameterList.findIndex(
            parameter => parameter.parameterName == originalToSubstituted.src.parameterName
        );
        if (parameterIndex < 0) {
            const diagnosticRelativeStart = diagnostic.start - originalToSubstituted.resultDst.start;

            const nestedMacroRelatedRanges = traceRelatedRange(
                map.expandedMacro.macro.content.start,
                (
                    map.expandedMacro.expandedContent.originalToExpanded.length == 0 ?
                    {
                        filename : map.expandedMacro.macro.filename,
                        start : originalToSubstituted.src.start + diagnosticRelativeStart,
                        length : diagnostic.length,
                        //length : originalToSubstituted.src.end - originalToSubstituted.src.start,
                    } :
                    {
                        filename : map.expandedMacro.macro.filename,
                        start : diagnostic.start,
                        length : diagnostic.length,
                    }
                ),
                map.expandedMacro.expandedContent,
                depth + 1
            );

            if (
                map.expandedMacro.expandedContent.originalToExpanded.length > 0 &&
                originalToSubstituted.src.parameterName != undefined
            ) {
                nestedMacroRelatedRanges[0].start = map.expandedMacro.macro.content.start + originalToSubstituted.src.start;
                nestedMacroRelatedRanges[0].length = originalToSubstituted.src.parameterName.length;
            }

            return createResultWithoutParameter(
                map,
                map.expandedMacro,
                originalToSubstituted2,
                nestedMacroRelatedRanges,
            );
            //return createResultWithoutExpandedMacro(map);
        }

        const nestedMacroRelatedRanges = traceRelatedRange(
            map.expandedMacro.macro.content.start,
            (
                map.expandedMacro.expandedContent.originalToExpanded.length == 0 ?
                {
                    filename : map.expandedMacro.macro.filename,
                    start : originalToSubstituted.src.start,
                    length : originalToSubstituted.src.end - originalToSubstituted.src.start,
                } :
                {
                    filename : map.expandedMacro.macro.filename,
                    start : diagnostic.start,
                    length : diagnostic.length,
                }
            ),
            map.expandedMacro.expandedContent,
            depth + 1
        );

        if (
            map.expandedMacro.expandedContent.originalToExpanded.length > 0 &&
            originalToSubstituted.src.parameterName != undefined
        ) {
            nestedMacroRelatedRanges[0].start = map.expandedMacro.macro.content.start + originalToSubstituted.src.start;
            nestedMacroRelatedRanges[0].length = originalToSubstituted.src.parameterName.length;
        }

        const parameter = map.expandedMacro.macro.parameterList[parameterIndex];

        const arg = map.expandedMacro.args[parameterIndex];

        let argTrace = (
            arg.value.originalToExpanded.length == 0 ?
            [] :
            traceRelatedRange(
                0,
                {
                    filename,
                    start : diagnostic.start - originalToSubstituted.dst.start - map.dst.start,
                    length : diagnostic.length,
                },
                arg.value,
                depth
            )
        );

        const diagnosticRelativeStart = diagnostic.start - originalToSubstituted2.resultDst.start;
        const xStart = (
            depth == 0 ?
            arg.start + diagnosticRelativeStart :
            arg.start
        );

        //If `undefined`, the `arg` does not call any macros.
        const firstArgTrace = argTrace.shift();
        const newDiagnosticStart = (
            firstArgTrace == undefined ?
            xStart :
            firstArgTrace.start + arg.start
        );
        const relatedRanges = (
            diagnostic.relatedRanges == undefined ?
            [] :
            diagnostic.relatedRanges
        );

        return makeResult({
            newDiagnosticStart,
            newDiagnosticLength : diagnostic.length,
            newRelatedRanges : [
                ...argTrace,
                {
                    filename : map.expandedMacro.macro.filename,
                    start : parameter.start,
                    length : parameter.end - parameter.start,
                },
                ...nestedMacroRelatedRanges,
                ...relatedRanges
                    .map(relatedRange => {
                        return traceRelatedRange(0, relatedRange, undefined, depth);
                    })
                    .flat(1),
            ],
        });
    }
    if (arg2Qwerty.value.originalToExpanded.length == 0) {
        return arg2QwertyThing(
            {...map, expandedMacro : map.expandedMacro},
            originalToSubstituted2
        );
    }
    let argTrace2Qwerty = traceRelatedRange(
        arg2Qwerty.start,
        {
            filename,
            //start : diagnostic.start - originalToSubstituted2.dst.start - map.dst.start,
            start : diagnostic.start - originalToSubstituted2.resultDst.start,
            length : diagnostic.length,
        },
        arg2Qwerty.value,
        depth
    );

    if (argTrace2Qwerty.length == 0) {
        throw new Error(`Can this happen??`);
    }

    const iDuno = argTrace2Qwerty.shift()!;
    const originalToSubstituted = map.expandedMacro.originalToSubstituted.find(originalToSubstituted => {
        return originalToSubstituted.resultDst.end >= iDuno.start + iDuno.length;
    });
    if (originalToSubstituted == undefined) {
        throw new Error(`Can this happen?`)
    }

    argTrace2Qwerty;
    arg2Qwerty.value.originalToExpanded

    map.expandedMacro.macro.substitutionContent

    const parameterIndex = map.expandedMacro.macro.parameterList.findIndex(
        parameter => parameter.parameterName == originalToSubstituted.src.parameterName
    );
    if (parameterIndex < 0) {
        return arg2QwertyThing(
            {...map, expandedMacro : map.expandedMacro},
            originalToSubstituted2
        );
    }
    /**
     * This is computed incorrectly.
     */
    const parameter = map.expandedMacro.macro.parameterList[parameterIndex];

    /**
     * @todo Better name
     */
    const arg2 = map.expandedMacro.args[parameterIndex];


    let argTrace2 = (
        arg2.value.originalToExpanded.length == 0 ?
        [] :
        traceRelatedRange(
            0,
            {
                filename,
                start : diagnostic.start - originalToSubstituted2.dst.start - map.dst.start,
                length : diagnostic.length,
            },
            arg2.value,
            depth
        )
    );

    const xStart2 = (
        depth == 0 ?
        arg2.start :
        diagnostic.start - originalToSubstituted2.dst.start - map.dst.start + arg2.start
    );

    const newDiagnosticStart2 = (
        argTrace2.length == 0 ?
        xStart2 :
        argTrace2.shift()!.start + arg2.start
    );
    const relatedRanges2 = (
        diagnostic.relatedRanges == undefined ?
        [] :
        diagnostic.relatedRanges
    );
    parameter2;
    newDiagnosticStart2;
    relatedRanges2;


    const nestedMacroRelatedRanges2 = traceRelatedRange(
        map.expandedMacro.macro.content.start,
        (
            map.expandedMacro.expandedContent.originalToExpanded.length == 0 ?
            {
                filename : map.expandedMacro.macro.filename,
                start : originalToSubstituted2.src.start,
                length : originalToSubstituted2.src.end - originalToSubstituted2.src.start,
            } :
            {
                filename : map.expandedMacro.macro.filename,
                start : diagnostic.start,
                length : diagnostic.length,
            }
        ),
        map.expandedMacro.expandedContent,
        depth + 1
    );

    if (
        map.expandedMacro.expandedContent.originalToExpanded.length > 0 &&
        originalToSubstituted.src.parameterName != undefined
    ) {
        nestedMacroRelatedRanges2[0].length = originalToSubstituted.src.parameterName.length;
    }

    return makeResult({
        newDiagnosticStart : newDiagnosticStart2,
        newDiagnosticLength : diagnostic.length,
        newRelatedRanges : [
            ...argTrace2,
            {
                filename : map.expandedMacro.macro.filename,
                start : parameter.start,
                length : parameter.end - parameter.start,
            },
            ...nestedMacroRelatedRanges2,
            ...relatedRanges2
                .map(relatedRange => {
                    return traceRelatedRange(0, relatedRange, undefined, depth);
                })
                .flat(1),
        ],
    });
}

export function traceRelatedRange (
    offset : number,
    relatedRange : RelatedRange,
    expandedContent : ExpandedContent,
    depth : number,
) : RelatedRange[] {
    return doThing<RelatedRange, RelatedRange[]>({
        filename : relatedRange.filename,
        diagnostic : relatedRange,
        expandedContent,
        depth,
        makeResult : ({ newDiagnosticStart, newDiagnosticLength, newRelatedRanges }) : RelatedRange[] => {
            if (newRelatedRanges == undefined) {
                return [
                    {
                        ...relatedRange,
                        start : newDiagnosticStart + offset,
                        length : newDiagnosticLength,
                    },
                ];
            }

            return [
                {
                    ...relatedRange,
                    start : newDiagnosticStart + offset,
                    length : newDiagnosticLength,
                },
                ...newRelatedRanges,
            ];
        },
        traceRelatedRange : (offset, relatedRange, expandedContent, depth) => {
            if (expandedContent == undefined) {
                throw new Error(`This should not happen`);
            }
            return traceRelatedRange(
                offset,
                relatedRange,
                expandedContent,
                depth,
            );
        },
    });
}

export function traceDiagnostic (
    filename : string,
    diagnostic : Diagnostic,
    expandedContent : ExpandedContent,
    depth : number,
    getExpandedContent : (filename : string) => ExpandedContent,
) : Diagnostic {
    return doThing<Diagnostic, Diagnostic>({
        filename,
        diagnostic,
        expandedContent,
        depth,
        makeResult : ({ newDiagnosticStart, newDiagnosticLength, newRelatedRanges }) : Diagnostic => {
            return {
                ...diagnostic,
                start : newDiagnosticStart,
                length : newDiagnosticLength,
                relatedRanges : (
                    newRelatedRanges == undefined ?
                    undefined :
                    [...newRelatedRanges]
                ),
            };
        },
        traceRelatedRange : (offset, relatedRange, expandedContent, depth) => {
            return traceRelatedRange(
                offset,
                relatedRange,
                expandedContent ?? getExpandedContent(relatedRange.filename),
                depth,
            );
        },
    });
}
