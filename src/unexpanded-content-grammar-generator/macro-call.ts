import {TokenKind} from "../scanner";
import {optional, TokenObj, zeroOrMore} from "../nearley-wrapper";
import {getTextRange} from "../parse-util";
import {makeRule} from "./factory";
import {SyntaxKind} from "../parser-node";
import {
    MacroArgumentListNode,
    MacroArgumentNode,
    MacroCallNode,
    MacroIdentifierNode,
    UnexpandedContentNode,
} from "../unexpanded-content-grammar";

export const NonPound = makeRule<TokenObj<TokenKind>>("%NonPound");

const MacroArgument = makeRule("MacroArgument")
    .addSubstitution(
        [
            makeRule<UnexpandedContentNode>("UnexpandedContent")
        ] as const,
        function (data) : MacroArgumentNode {
            return {
                ...getTextRange(data),
                value : "",
            }
        }
    )

const MacroArgumentList = makeRule("MacroArgumentList")
    .addSubstitution(
        [
            zeroOrMore([
                TokenKind.OpenBrace,
                MacroArgument,
                TokenKind.CloseBrace,
            ] as const),
        ] as const,
        function (data) : MacroArgumentListNode {
            return {
                ...getTextRange(data),
                args : data[0].map(([openBrace, _arg, closeBrace]) => {
                    return {
                        start : openBrace.end,
                        end : closeBrace.start,
                        value : this.sourceText.substring(
                            openBrace.end,
                            closeBrace.start,
                        ),
                    }
                })
            }
        }
    )

const MacroIdentifier = makeRule("MacroIdentifier")
    .addSubstitution(
        [
            TokenKind.MacroIdentifier,
            optional([
                TokenKind.Dot,
                SyntaxKind.Identifier,
                optional([
                    TokenKind.Dot,
                    SyntaxKind.Identifier,
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

export const MacroCall = makeRule("MacroCall")
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
