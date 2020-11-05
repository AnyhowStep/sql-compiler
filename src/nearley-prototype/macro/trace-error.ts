import {Diagnostic, RelatedRange} from "../../diagnostic";
import {ExpandedContent, TextRangeMap} from "./expand-content";

export interface DiagnosticLike {
    readonly start: number;
    readonly length: number;
    readonly relatedRanges? : readonly RelatedRange[];
}

export interface MakeResultArgs {
    readonly newDiagnosticStart : number;
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
            newRelatedRanges : diagnostic.relatedRanges,
        });
    }

    function createResultWithoutExpandedMacro (map : TextRangeMap) {
        const delta = map.dst.start - map.src.start;
        return makeResult({
            newDiagnosticStart : diagnostic.start - delta,
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
            return createResultWithoutExpandedMacro(map);
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
                depth,
            )
        );

        const xStart = (
            depth == 0 ?
            diagnostic.start - originalToSubstituted.dst.start - map.dst.start + arg.start :
            arg.start
        );

        const newDiagnosticStart = (
            argTrace.length == 0 ?
            xStart :
            argTrace.shift()!.start + arg.start
        );
        const relatedRanges = (
            diagnostic.relatedRanges == undefined ?
            [] :
            diagnostic.relatedRanges
        );

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

        if (map.expandedMacro.expandedContent.originalToExpanded.length > 0) {
            nestedMacroRelatedRanges[0].length = originalToSubstituted.src.parameterName.length;
        }

        return makeResult({
            newDiagnosticStart,
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
        return createResultWithoutExpandedMacro(map);
    }
    const parameter2 = originalToExpanded.expandedMacro.macro.parameterList[parameterIndex2];

    const arg2 = originalToExpanded.expandedMacro.args[parameterIndex2];
    parameter2;
    arg2;

    const originalToSubstituted = map.expandedMacro.originalToSubstituted.find(originalToSubstituted => {
        return originalToSubstituted.dst.start >= originalToExpanded.src.start;
    });
    if (originalToSubstituted == undefined) {
        return createResultWithoutExpandedMacro(map);
    }

    const parameterIndex = map.expandedMacro.macro.parameterList.findIndex(
        parameter => parameter.parameterName == originalToSubstituted.src.parameterName
    );
    if (parameterIndex < 0) {
        return createResultWithoutExpandedMacro(map);
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

    const xStart = (
        depth == 0 ?
        arg.start :
        diagnostic.start - originalToSubstituted.dst.start - map.dst.start + arg.start
    );

    const newDiagnosticStart = (
        argTrace.length == 0 ?
        xStart :
        argTrace.shift()!.start + arg.start
    );
    const relatedRanges = (
        diagnostic.relatedRanges == undefined ?
        [] :
        diagnostic.relatedRanges
    );

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

    if (map.expandedMacro.expandedContent.originalToExpanded.length > 0) {
        nestedMacroRelatedRanges[0].length = originalToSubstituted.src.parameterName.length;
    }

    return makeResult({
        newDiagnosticStart,
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
        makeResult : ({ newDiagnosticStart, newRelatedRanges }) : RelatedRange[] => {
            if (newRelatedRanges == undefined) {
                return [
                    {
                        ...relatedRange,
                        start : newDiagnosticStart + offset,
                        length : relatedRange.length,
                    },
                ];
            }

            return [
                {
                    ...relatedRange,
                    start : newDiagnosticStart + offset,
                    length : relatedRange.length,
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
        makeResult : ({ newDiagnosticStart, newRelatedRanges }) : Diagnostic => {
            return {
                ...diagnostic,
                start : newDiagnosticStart,
                length : diagnostic.length,
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
