import {Diagnostic, RelatedRange} from "../../diagnostic";
import {ExpandedContent, TextRangeMap} from "./expand-content";

export function traceRelatedRange (
    offset : number,
    relatedRange : RelatedRange,
    expandedContent : ExpandedContent
) : RelatedRange[] {
    const relatedRangeEnd = relatedRange.start + relatedRange.length;
    const map = expandedContent.originalToExpanded.find(map => {
        return map.dst.end >= relatedRangeEnd;
    });
    if (map == undefined) {
        return [{
            ...relatedRange,
            start : relatedRange.start + offset,
            length : relatedRange.length,
        }];
    }

    function createRelatedRangeWithoutExpandedMacro (map : TextRangeMap) {
        const delta = map.dst.start - map.src.start;
        return {
            ...relatedRange,
            start : relatedRange.start - delta + offset,
            length : relatedRange.length,
        };
    }

    if (map.expandedMacro == undefined) {
        return [createRelatedRangeWithoutExpandedMacro(map)];
    }

    const originalToSubstituted = map.expandedMacro.originalToSubstituted.find(originalToSubstituted => {
        return originalToSubstituted.dst.end + map.dst.start >= relatedRangeEnd;
    });
    if (originalToSubstituted == undefined) {
        return [createRelatedRangeWithoutExpandedMacro(map)];
    }

    const parameterIndex = map.expandedMacro.macro.parameterList.findIndex(
        parameter => parameter.parameterName == originalToSubstituted.src.parameterName
    );
    if (parameterIndex < 0) {
        return [createRelatedRangeWithoutExpandedMacro(map)];
    }
    const parameter = map.expandedMacro.macro.parameterList[parameterIndex];

    const arg = map.expandedMacro.args[parameterIndex];

    const delta = originalToSubstituted.dst.start + map.dst.start - arg.start;
    return [
        {
            ...relatedRange,
            start : relatedRange.start - delta + offset,
            length : relatedRange.length,
        },
        {
            filename : map.expandedMacro.macro.filename,
            start : parameter.start + offset,
            length : parameter.end - parameter.start,
        },
        ...traceRelatedRange(
            map.expandedMacro.macro.content.start,
            {
                filename : map.expandedMacro.macro.filename,
                start : originalToSubstituted.src.start,
                length : originalToSubstituted.src.end - originalToSubstituted.src.start,
            },
            map.expandedMacro.expandedContent
        ),
    ];
}

export function traceDiagnostic (
    diagnostic : Diagnostic,
    expandedContent : ExpandedContent,
    getExpandedContent : (filename : string) => ExpandedContent,
) : Diagnostic {
    const diagnosticEnd = diagnostic.start + diagnostic.length;
    const map = expandedContent.originalToExpanded.find(map => {
        return map.dst.end >= diagnosticEnd;
    });
    if (map == undefined) {
        return diagnostic;
    }

    function createDiagnosticWithoutExpandedMacro (map : TextRangeMap) {
        const delta = map.dst.start - map.src.start;
        return {
            ...diagnostic,
            start : diagnostic.start - delta,
            length : diagnostic.length,
            relatedRanges : (
                diagnostic.relatedRanges == undefined ?
                undefined :
                diagnostic.relatedRanges
                    .map(relatedRange => {
                        return traceRelatedRange(0, relatedRange, getExpandedContent(relatedRange.filename));
                    })
                    .flat(1)
            ),
        };
    }

    if (map.expandedMacro == undefined) {
        return createDiagnosticWithoutExpandedMacro(map);
    }

    const originalToSubstituted = map.expandedMacro.originalToSubstituted.find(originalToSubstituted => {
        return originalToSubstituted.dst.end + map.dst.start >= diagnosticEnd;
    });
    if (originalToSubstituted == undefined) {
        return createDiagnosticWithoutExpandedMacro(map);
    }

    const parameterIndex = map.expandedMacro.macro.parameterList.findIndex(
        parameter => parameter.parameterName == originalToSubstituted.src.parameterName
    );
    if (parameterIndex < 0) {
        return createDiagnosticWithoutExpandedMacro(map);
    }
    const parameter = map.expandedMacro.macro.parameterList[parameterIndex];

    const arg = map.expandedMacro.args[parameterIndex];

    const delta = originalToSubstituted.dst.start + map.dst.start - arg.start;
    const relatedRanges = (
        diagnostic.relatedRanges == undefined ?
        [] :
        diagnostic.relatedRanges
    );

    return {
        ...diagnostic,
        start : diagnostic.start - delta,
        length : diagnostic.length,
        relatedRanges : [
            {
                filename : map.expandedMacro.macro.filename,
                start : parameter.start,
                length : parameter.end - parameter.start,
            },
            ...traceRelatedRange(
                map.expandedMacro.macro.content.start,
                {
                    filename : map.expandedMacro.macro.filename,
                    start : originalToSubstituted.src.start,
                    length : originalToSubstituted.src.end - originalToSubstituted.src.start,
                },
                map.expandedMacro.expandedContent
            ),
            ...relatedRanges
                .map(relatedRange => {
                    return traceRelatedRange(0, relatedRange, getExpandedContent(relatedRange.filename));
                })
                .flat(1),
        ],
    };

}
