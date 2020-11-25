import {Diagnostic, RelatedRange} from "../../diagnostic";
import {ExpandedContent} from "./expand-content";
import {ExpansionPath, getExpansionPath} from "./get-expansion-path";

export interface DiagnosticLike {
    readonly start: number;
    readonly length: number;
    readonly relatedRanges? : readonly RelatedRange[];
}

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
        item.filename
        pushIfUnique({
            filename : item.filename,
            start : item.start,
            length : item.end - item.start,
        });
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
        expandedContent
    );
    const relatedRanges = pathToRelatedRanges(path);
    const firstRelatedRange = relatedRanges.shift();

    if (firstRelatedRange == undefined) {
        throw new Error(`relatedRanges should not be empty`);
    }

    const newDiagnostic : Diagnostic = {
        ...diagnostic,
        start : firstRelatedRange.start,
        length : firstRelatedRange.length,
    };

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
                            relatedRange.filename,
                            relatedRange,
                            getExpandedContent(relatedRange.filename),
                        );
                        const relatedRanges = pathToRelatedRanges(path);
                        return relatedRanges;
                    })
                    .flat(1),
            ]
        ),
    };
}
