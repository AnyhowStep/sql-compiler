import {Scanner} from "../../scanner";
import {parseHelper} from "../parse-helper";
import {ParserSettings} from "../parser-settings";
import {UnexpandedContentNode} from "./grammar";
import * as grammar from "./grammar/grammar.generated";

export function parseUnexpandedContent (
    filename : string,
    scanner : Scanner,
    settings : ParserSettings
) : UnexpandedContentNode {
    const {
        partialParses : results,
        syntacticErrors,
    } = parseHelper<UnexpandedContentNode>(
        filename,
        scanner,
        settings,
        grammar,
        () => []
    );

    if (results.length == 0) {
        const textRange = {
            start : 0,
            end : scanner.getText().length,
        };
        return {
            ...textRange,
            unexpandedContent : [],
            syntacticErrors,
        };
    }

    const textRange = {
        start : results[0].start,
        end : results[results.length-1].end,
    };
    return {
        ...textRange,
        unexpandedContent : results.map(r => r.unexpandedContent).flat(1),
        syntacticErrors,
    };
}
