import {Diagnostic, RelatedRange} from "../../diagnostic";
import {ExpandedContent} from "./expand-content";
import {ExpansionPath, getExpansionPath} from "./get-expansion-path";

function pathToRelatedRanges (path : ExpansionPath) : RelatedRange[] {
    const relatedRanges : RelatedRange[] = [];
    for (const item of path) {
        if ("macro" in item) {
            const parameter = item.macro.parameterList.find(parameter => {
                return parameter.parameterName == item.src.parameterName;
            });
            if (parameter != undefined) {
                relatedRanges.push({
                    filename : item.filename,
                    start : parameter.start,
                    length : parameter.end - parameter.start,
                });
                relatedRanges.push({
                    filename : item.filename,
                    start : item.macro.content.start + item.src.start,
                    length : item.src.end - item.src.start,
                });
            } else {
                relatedRanges.push({
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
                relatedRanges.push({
                    filename : item.filename,
                    start : item.macroIdentifier.fileSrc.start,
                    length : item.macroIdentifier.fileSrc.end - item.macroIdentifier.fileSrc.start,
                });
            }
        }

        if ("value" in item) {
            relatedRanges.push({
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
        diagnostic :
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
