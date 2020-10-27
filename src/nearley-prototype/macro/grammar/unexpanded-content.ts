import {Diagnostic} from "../../../diagnostic";
import {TextRange} from "../../../parser-node";
import {makeCustomRule, oneOrMore, zeroOrMore, union} from "../../nearley-util"
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

const NonEmptyNonMacroCall = makeCustomRule("NonEmptyNonMacroCall")
    .addSubstitution(
        [
            oneOrMore(NonPound)
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
    syntacticErrors? : Diagnostic[],
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

            if (unexpandedContent.length == 0) {
                const trailingWhitespace : NonMacroCallNode = {
                    start : 0,
                    end : this.sourceText.length,
                    value : this.sourceText,
                };
                unexpandedContent.push(trailingWhitespace);
            } else {
                const trailingWhitespace : NonMacroCallNode = {
                    start : unexpandedContent[unexpandedContent.length-1].end,
                    end : this.sourceText.length,
                    value : this.sourceText.substring(
                        unexpandedContent[unexpandedContent.length-1].end,
                        this.sourceText.length
                    ),
                };
                unexpandedContent.push(trailingWhitespace);
            }

            return {
                ...getTextRange(data),
                unexpandedContent,
            };
        }
    );

makeCustomRule<UnexpandedContentNode>("NonEmptyUnexpandedContent")
    .addSubstitution(
        [
            union(
                [
                    NonEmptyNonMacroCall,
                    zeroOrMore([
                        MacroCall,
                        NonMacroCall,
                    ] as const)
                ] as const,
                [
                    NonMacroCall,
                    oneOrMore([
                        MacroCall,
                        NonMacroCall,
                    ] as const)
                ] as const,
            ),
        ] as const,
        function (data) : UnexpandedContentNode {
            const [firstPart, trailingParts] = data[0][0];
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

            if (unexpandedContent.length == 0) {
                const trailingWhitespace : NonMacroCallNode = {
                    start : 0,
                    end : this.sourceText.length,
                    value : this.sourceText,
                };
                unexpandedContent.push(trailingWhitespace);
            } else {
                const trailingWhitespace : NonMacroCallNode = {
                    start : unexpandedContent[unexpandedContent.length-1].end,
                    end : this.sourceText.length,
                    value : this.sourceText.substring(
                        unexpandedContent[unexpandedContent.length-1].end,
                        this.sourceText.length
                    ),
                };
                unexpandedContent.push(trailingWhitespace);
            }

            return {
                ...getTextRange(data),
                unexpandedContent,
            };
        }
    )
