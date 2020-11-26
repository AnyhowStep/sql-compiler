import {Diagnostic, RelatedRange} from "../../diagnostic";
import {ExpandedContent} from "./expand-content";
import {MacroPartType} from "./find-all-macros";
import {ExpansionPath, getExpansionPath} from "./get-expansion-path";

export interface DiagnosticLike {
    readonly start: number;
    readonly length: number;
    readonly relatedRanges? : readonly RelatedRange[];
}

function pathToRelatedRanges (path : ExpansionPath, relatedRanges : RelatedRange[] = []) : RelatedRange[] {
    const pushIfUnique = (relatedRange : RelatedRange) => {
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
        if (item.type == MacroPartType.ParameterReference) {
            if (item.argTrace[0].type == MacroPartType.MacroCall) {
                relatedRanges = pathToRelatedRanges(item.argTrace, relatedRanges);
            }
            pushIfUnique({
                filename : item.filename,
                start : item.start,
                length : item.end - item.start,
            });
        } else {
            pushIfUnique({
                filename : item.filename,
                start : item.start,
                length : item.end - item.start,
            });
        }
    }
    return relatedRanges;
}

export function traceDiagnostic (
    diagnostic : Diagnostic,
    expandedContent : ExpandedContent,
    getExpandedContent : (filename : string) => ExpandedContent,
) : Diagnostic {
    const path = getExpansionPath(
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
