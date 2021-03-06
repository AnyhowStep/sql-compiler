import type {Scanner} from "../scanner";
import {parseHelper} from "../fault-tolerant-parser";
import * as grammar from "./grammar.generated";
import {UnexpandedContentNode} from "./node";

export function parseUnexpandedContent (
    filename : string,
    scanner : Scanner
) : UnexpandedContentNode {
    const {
        partialParses : results,
        syntacticErrors,
    } = parseHelper<UnexpandedContentNode>({
        state : {
            sourceText : scanner.getText(),
        },
        filename,
        scanner,
        grammar : grammar.default,
        findAllSyntacticErrors : () => [],
    });

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
