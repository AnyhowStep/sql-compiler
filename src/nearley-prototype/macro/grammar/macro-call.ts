import {TextRange} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {IdentifierAllowReservedRule} from "../../identifier/identifier";
import {makeCustomRule, optional, TokenObj, union, zeroOrMore} from "../../nearley-util";
import {getTextRange} from "../../parse-util";
import {UnexpandedContentNode} from "./unexpanded-content";

export const NonPound = makeCustomRule<TokenObj<TokenKind>>("%NonPound");

export interface MacroArgumentNode extends TextRange {
    value : string,
}

const MacroArgument = makeCustomRule("MacroArgument")
    .addSubstitution(
        [
            makeCustomRule<UnexpandedContentNode>("NonEmptyUnexpandedContent")
        ] as const,
        function (data) : MacroArgumentNode {
            return {
                ...getTextRange(data),
                value : "",
            }
        }
    )

export interface MacroArgumentListNode extends TextRange {
    args : MacroArgumentNode[];
}

const MacroArgumentList = makeCustomRule("MacroArgumentList")
    .addSubstitution(
        [
            union(
                [
                    TokenKind.OpenParentheses,
                    TokenKind.CloseParentheses,
                ] as const,
                [
                    TokenKind.OpenParenthesesPound,
                    optional([
                        MacroArgument,
                        zeroOrMore([
                            TokenKind.Pound,
                            MacroArgument,
                        ] as const)
                    ] as const),
                    TokenKind.PoundCloseParentheses,
                ] as const,
            )
        ] as const,
        function (data) : MacroArgumentListNode {
            const rawData = data[0][0];
            if (rawData[0].tokenKind == TokenKind.OpenParentheses) {
                return {
                    ...getTextRange(data),
                    args : [],
                };
            }
            const [openParen, rawArgs, closeParen] = rawData as Exclude<typeof rawData, readonly [TokenObj<TokenKind.OpenParentheses>, ...any[]]>;
            if (rawArgs == undefined) {
                return {
                    ...getTextRange(data),
                    args : [],
                };
            }


            const args : MacroArgumentNode[] = [];

            const firstArgStart = openParen.end;
            const firstArgEnd = (
                rawArgs[1].length == 0 ?
                closeParen.start :
                //The start of the first pound character
                rawArgs[1][0][0].start
            );
            args.push({
                start : firstArgStart,
                end : firstArgEnd,
                value : this.sourceText.substring(
                    firstArgStart,
                    firstArgEnd
                ),
            });

            for (let i=0; i<rawArgs[1].length; ++i) {
                const curArg = rawArgs[1][i];
                const nextArg = (
                    i+1 < rawArgs[1].length ?
                    rawArgs[1][i+1] :
                    undefined
                );
                const start = curArg[0].end;
                const end = (
                    nextArg == undefined ?
                    closeParen.start :
                    nextArg[0].start
                );
                args.push({
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
                args,
            };
        }
    )

export interface MacroIdentifierNode extends TextRange {
    macroName : string;
}

const MacroIdentifier = makeCustomRule("MacroIdentifier")
    .addSubstitution(
        [
            TokenKind.MacroIdentifier,
            optional([
                TokenKind.Dot,
                IdentifierAllowReservedRule,
                optional([
                    TokenKind.Dot,
                    IdentifierAllowReservedRule,
                ] as const),
            ] as const),
        ] as const,
        function (data) : MacroIdentifierNode {
            const nameA = data[0];

            const partB = data[1];
            if (partB == undefined) {
                return {
                    ...getTextRange(data),
                    macroName : nameA.value,
                };
            }

            const nameB = partB[1];

            const partC = partB[2];
            if (partC == undefined) {
                return {
                    ...getTextRange(data),
                    macroName : nameA.value + "." + nameB.identifier,
                };
            }

            const nameC = partC[1];
            return {
                ...getTextRange(data),
                macroName : nameA.value + "." + nameB.identifier + "." + nameC.identifier,
            };
        }
    );

export interface MacroCallNode extends TextRange {
    identifier : MacroIdentifierNode;
    argumentList : MacroArgumentListNode;
}

export const MacroCall = makeCustomRule("MacroCall")
    .addSubstitution(
        [
            MacroIdentifier,
            MacroArgumentList,
        ] as const,
        function (data) : MacroCallNode {
            const [identifier, argumentList] = data;
            return {
                ...getTextRange(data),
                identifier,
                argumentList,
            }
        }
    );
