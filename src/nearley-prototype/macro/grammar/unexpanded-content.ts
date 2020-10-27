import {TextRange} from "../../../parser-node";
import {makeCustomRule, zeroOrMore} from "../../nearley-util"
import {getTextRange} from "../../parse-util";
import {MacroCall, MacroCallNode, NonPound} from "./macro-call";

export interface NonMacroCallNode extends TextRange {
    value : string;
}

const NonMacroCall = makeCustomRule("NonMacroCall")
    .addSubstitution(
        [
            zeroOrMore(NonPound)
        ] as const,
        function (data) : NonMacroCallNode {
            return {
                ...getTextRange(data),
                value : "",
            }
        }
    );

export interface UnexpandedContentNode extends TextRange {
    unexpandedContent : (NonMacroCallNode|MacroCallNode)[];
}

export const UnexpandedContent = makeCustomRule<UnexpandedContentNode>("UnexpandedContent")
    .addSubstitution(
        [
            NonMacroCall,
            zeroOrMore([
                MacroCall,
                NonMacroCall,
            ] as const),
        ] as const,
        function (data) : UnexpandedContentNode {
            const [firstPart, trailingParts] = data;
            if (trailingParts.length == 0) {
                return {
                    ...getTextRange(data),
                    unexpandedContent : [firstPart],
                };
            }


            const unexpandedContent : (NonMacroCallNode|MacroCallNode)[] = [];

            const firstPartStart = 0;
            const firstPartEnd = trailingParts[0][0].start;
            unexpandedContent.push({
                start : firstPartStart,
                end : firstPartEnd,
                value : this.sourceText.substring(
                    firstPartStart,
                    firstPartEnd
                ),
            });

            for (let i=0; i<trailingParts.length; ++i) {
                const curPart = trailingParts[i];

                unexpandedContent.push(curPart[0]);

                const nextPart = (
                    i+1 < trailingParts.length ?
                    trailingParts[i+1] :
                    undefined
                );
                const start = curPart[0].end;
                const end = (
                    nextPart == undefined ?
                    curPart[1].end :
                    nextPart[0].start
                );
                unexpandedContent.push({
                    start,
                    end,
                    value : this.sourceText.substring(
                        start,
                        end
                    ),
                });
            }

            return {
                ...getTextRange(data),
                unexpandedContent,
            };
        }
    )
