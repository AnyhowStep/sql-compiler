import {Diagnostic, RelatedRange} from "../../diagnostic";
import {ExpandedContent} from "./expand-content";
import {ExpansionPath, getExpansionPath, isLength} from "./get-expansion-path";

function pathToRelatedRanges (path : ExpansionPath) : RelatedRange[] {
    let relatedRanges : RelatedRange[] = [];
    function pushIfUnique (relatedRange : RelatedRange) {
        const relatedRangeEnd = relatedRange.start + relatedRange.length;
        if (relatedRanges.some(r => {
            const rEnd = r.start + r.length;
            return (
                r.filename == relatedRange.filename &&
                r.start >= relatedRange.start &&
                rEnd <= relatedRangeEnd
            );
        })) {
            return;
        }

        relatedRanges = relatedRanges.filter(r => {
            const rEnd = r.start + r.length;
            return !(
                r.filename == relatedRange.filename &&
                r.start <= relatedRange.start &&
                rEnd >= relatedRangeEnd
            );
        })

        relatedRanges.push(relatedRange);
    }
    for (const item of path) {
        if ("macro" in item) {
            const parameter = item.macro.parameterList.find(parameter => {
                return parameter.parameterName == item.src.parameterName;
            });
            if (parameter != undefined) {
                pushIfUnique({
                    filename : item.filename,
                    start : parameter.start,
                    length : parameter.end - parameter.start,
                });
                pushIfUnique({
                    filename : item.filename,
                    start : item.macro.content.start + item.src.start,
                    length : item.src.end - item.src.start,
                });
            } else {
                pushIfUnique({
                    filename : item.filename,
                    start : item.macro.content.start + item.src.start,
                    length : item.src.end - item.src.start,
                });
            }
        }

        if ("macroIdentifier" in item) {
            if (item.macroIdentifier == undefined) {
                //TODO?
            } else {
                pushIfUnique({
                    filename : item.filename,
                    start : item.macroIdentifier.fileSrc.start,
                    length : item.macroIdentifier.fileSrc.end - item.macroIdentifier.fileSrc.start,
                });
            }
        }

        if ("value" in item) {
            pushIfUnique({
                filename : item.filename,
                start : item.fileSrc.start,
                length : item.fileSrc.end - item.fileSrc.start,
            });
        }
    }
    return relatedRanges;
}

export function traceDiagnostic (
    filename : string,
    diagnostic : Diagnostic,
    expandedContent : ExpandedContent,
    getExpandedContent : (filename : string) => ExpandedContent,
) : Diagnostic {
    const path = getExpansionPath(
        filename,
        diagnostic,
        expandedContent,
        getExpandedContent
    );
    const relatedRanges = pathToRelatedRanges(path);
    const firstRelatedRange = relatedRanges.shift();

    const newDiagnostic : Diagnostic = (
        firstRelatedRange == undefined ?
        (
            isLength(path, 1) ?
            diagnostic :
            "macroIdentifier" in path[1] ?
            {
                ...diagnostic,
                start : diagnostic.start - path[1].resultDst.start + path[1].src.start,
                length : diagnostic.length,
            } :
            diagnostic
        ) :
        {
            ...diagnostic,
            start : firstRelatedRange.start,
            length : firstRelatedRange.length,
        }
    );

    return {
        ...newDiagnostic,
        relatedRanges : (
            diagnostic.relatedRanges == undefined || diagnostic.relatedRanges.length == 0 ?
            relatedRanges :
            [
                ...relatedRanges,
                ...diagnostic.relatedRanges
                    .map(relatedRange => {
                        const path = getExpansionPath(
                            filename,
                            relatedRange,
                            expandedContent,
                            getExpandedContent
                        );
                        const relatedRanges = pathToRelatedRanges(path);
                        return relatedRanges;
                    })
                    .flat(1),
            ]
        ),
    };
}
