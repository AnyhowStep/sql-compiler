import {pushSyntacticErrorAt} from "../../parse-util";
import {SyntacticErrorContainer, TextRange} from "../../parser-node";
import {ReverseTokenKind, Scanner, TokenKind} from "../../scanner";
import {DiagnosticMessages} from "../diagnostic-messages";
import {parseUnexpandedContent} from "./parse-unexpanded-content";

export interface MacroIdentifier extends TextRange {
    fileSrc : TextRange,
    macroName : string
}
export interface MacroParameter extends TextRange {
    parameterName : string,
    /**
     * `TextRange` is within `content.value`
     */
    references : (
        & TextRange
        & { fileSrc : TextRange }
    )[],
}

export enum MacroPartType {
    ParameterReference = "ParameterReference",
    PlainText = "PlainText",
    MacroCall = "MacroCall",
}

/**
 * `TextRange` is within `content.value`
 */
export interface ParameterReferencePart extends TextRange {
    filename : string,
    type : MacroPartType.ParameterReference,
    fileSrc : TextRange,
    parameterName : string,
}
export interface MacroParameterList extends TextRange, Array<MacroParameter>, SyntacticErrorContainer {

}
export interface PlainTextPart extends TextRange {
    filename : string,
    type : MacroPartType.PlainText,
    fileSrc : TextRange,
    value : string
}

export interface Argument extends TextRange {
    filename : string,
    fileSrc : TextRange,
    parts : (PlainTextPart|ParameterReferencePart|MacroCallPart)[]
}

export interface ArgumentList extends TextRange, Array<Argument>, SyntacticErrorContainer {

}
export interface MacroCallPart extends TextRange {
    filename : string,
    type : MacroPartType.MacroCall,
    fileSrc : TextRange,
    identifier : MacroIdentifier;
    argumentList : ArgumentList;
}

export interface Macro extends TextRange {
    filename : string,
    identifier : MacroIdentifier,
    parameterList : MacroParameterList,
    /**
     * May contain references to other macros
     */
    content : PlainTextPart,

    parts : (PlainTextPart|ParameterReferencePart|MacroCallPart)[],
}

export function computeSubstitutionContent (
    filename : string,
    parameterList : MacroParameterList,
    originalText : PlainTextPart,
) : (PlainTextPart|ParameterReferencePart|MacroCallPart)[] {
    /**
     * @todo Make this more efficient
     */
    const allParameterReferenceParts = parameterList
        .map(parameter => {
            return parameter.references.map((ref) : ParameterReferencePart => {
                return {
                    start : ref.start,
                    end : ref.end,
                    filename,
                    type : MacroPartType.ParameterReference,
                    fileSrc : ref.fileSrc,
                    parameterName : parameter.parameterName,
                };
            });
        })
        .flat(1)
        .sort((a, b) => {
            return a.start - b.start;
        });

    const parsed = parseUnexpandedContent(
        //@todo
        "",
        new Scanner(originalText.value)
    );

    const partsResult : (PlainTextPart|ParameterReferencePart|MacroCallPart)[] = [];

    for (const node of parsed.unexpandedContent) {
        if ("identifier" in node) {
            const argumentList : ArgumentList = [] as unknown as ArgumentList;
            argumentList.start = node.argumentList.start;
            argumentList.end = node.argumentList.end;

            for (const argNode of node.argumentList.args) {
                argumentList.push({
                    start : argNode.start,
                    end : argNode.end,
                    filename,
                    fileSrc : {
                        start : originalText.fileSrc.start + argNode.start,
                        end : originalText.fileSrc.start + argNode.end,
                    },
                    parts : computeSubstitutionContent(
                        filename,
                        parameterList,
                        {
                            start : argNode.start,
                            end : argNode.end,
                            filename,
                            type : MacroPartType.PlainText,
                            fileSrc : {
                                start : originalText.fileSrc.start + argNode.start,
                                end : originalText.fileSrc.start + argNode.end,
                            },
                            value : argNode.value,
                        }
                    ),
                });
            }

            const part : MacroCallPart = {
                start : node.start,
                end : node.end,

                filename,
                type : MacroPartType.MacroCall,
                fileSrc : {
                    start : originalText.fileSrc.start + node.start,
                    end : originalText.fileSrc.start + node.end,
                },
                identifier : {
                    ...node.identifier,
                    fileSrc : {
                        start : originalText.fileSrc.start + node.identifier.start,
                        end : originalText.fileSrc.start + node.identifier.end,
                    },
                },
                argumentList,
            };
            partsResult.push(part);
        } else {
            const usedParameterReferenceParts = allParameterReferenceParts
                .filter((ref) => {
                    return (
                        ref.fileSrc.start >= originalText.fileSrc.start + node.start &&
                        ref.fileSrc.end <= originalText.fileSrc.start + node.end
                    );
                });

            let start = node.start;
            for (const parameterReferencePart of usedParameterReferenceParts) {
                const prefixText : PlainTextPart = {
                    start,
                    end : parameterReferencePart.fileSrc.start - originalText.fileSrc.start,
                    filename,
                    type : MacroPartType.PlainText,
                    fileSrc : {
                        start : originalText.fileSrc.start + start,
                        end : originalText.fileSrc.start + parameterReferencePart.fileSrc.start - originalText.fileSrc.start,
                    },
                    value : originalText.value.substring(
                        start,
                        parameterReferencePart.fileSrc.start - originalText.fileSrc.start
                    ),
                };
                start = parameterReferencePart.fileSrc.end - originalText.fileSrc.start;

                if (prefixText.start != prefixText.end) {
                    partsResult.push(prefixText);
                }
                partsResult.push({
                    ...parameterReferencePart,
                    start : parameterReferencePart.fileSrc.start - originalText.fileSrc.start,
                    end : parameterReferencePart.fileSrc.end - originalText.fileSrc.start,
                });
            }

            const trailingText : PlainTextPart = {
                start,
                end : node.end,
                filename,
                type : MacroPartType.PlainText,
                fileSrc : {
                    start : originalText.fileSrc.start + start,
                    end : originalText.fileSrc.start + node.end,
                },
                value : originalText.value.substring(
                    start,
                    node.end
                ),
            };
            if (trailingText.start != trailingText.end) {
                partsResult.push(trailingText);
            }
        }
    }

    if (partsResult.length > 0) {
        const lastPart = partsResult[partsResult.length-1];
        if (lastPart.end != originalText.value.length) {
            const start = lastPart.end;
            const end = originalText.value.length;
            const trailingText : PlainTextPart = {
                start,
                end : end,
                filename,
                type : MacroPartType.PlainText,
                fileSrc : {
                    start : originalText.fileSrc.start + start,
                    end : originalText.fileSrc.start + end,
                },
                value : originalText.value.substring(
                    start,
                    end
                ),
            };
            partsResult.push(trailingText);
        }
    }

    return partsResult;
}

function parseParameterList (
    parameterList : MacroParameterList,
    parameterListStr : string,
) {
    const scanner = new Scanner(parameterListStr);

    while (scanner.current() != TokenKind.EndOfFile) {
        let token = scanner.next();

        if (token == TokenKind.EndOfFile) {
            break;
        }

        if (parameterList.length > 0) {
            if (token == TokenKind.Comma) {
                token = scanner.next();
            } else {
                pushSyntacticErrorAt(
                    parameterList,
                    parameterList.start + scanner.getTokenIndex(),
                    parameterList.start + scanner.getTokenIndex(),
                    [],
                    DiagnosticMessages.Expected,
                    ReverseTokenKind[TokenKind.Comma]
                );
                break;
            }
        }

        if (token == TokenKind.Identifier) {
            parameterList.push({
                start : parameterList.start + scanner.getTokenIndex(),
                end : parameterList.start + scanner.getIndex(),
                parameterName : scanner.getTokenValue(),
                references : [],
            })
        } else {
            pushSyntacticErrorAt(
                parameterList,
                parameterList.start + scanner.getTokenIndex(),
                parameterList.start + scanner.getTokenIndex(),
                [],
                DiagnosticMessages.Expected,
                ReverseTokenKind[TokenKind.Identifier]
            );
        }
    }
}

function findReferences (
    parameter : MacroParameter,
    content : string,
    contentStart : number,
) {
    const scanner = new Scanner(content);

    while (scanner.current() != TokenKind.EndOfFile) {
        let token = scanner.next();

        if (token == TokenKind.EndOfFile) {
            break;
        }

        if (token == TokenKind.Identifier) {
            if (scanner.clone().next() == TokenKind.Dot) {
                //We don't want qualified identifiers to reference parameters
                while (scanner.clone().next() == TokenKind.Dot) {
                    scanner.next();
                    scanner.next();
                }
            } else {
                if (scanner.getTokenValue() == parameter.parameterName) {
                    const start = scanner.getTokenIndex();
                    const end = scanner.getIndex();

                    parameter.references.push({
                        start,
                        end,
                        fileSrc : {
                            start : contentStart + start,
                            end : contentStart + end,
                        }
                    });
                }
            }
        }
    }
}

export function findAllMacros (
    filename : string,
    sourceText : string
) : Macro[] {
    let result : Macro[] = [];

    /**
     * [1] = #define
     * [2] = macroName
     * [3] = open parentheses
     * [4] = parameter list
     * [5] = close parentheses
     * [6] = content
     */
    const macroRegex = /(#define\s+)((?:\w+(?:\.\w+(?:\.\w+)?)?))(\s*\(\s*)([^)]*)(\s*\)\s?)((?:.|\n)*?);;/gm;

    let match = macroRegex.exec(sourceText);
    while (match != undefined) {
        const macroName = match[2]
        const macroNameStart = match[1].length;

        const parameterListStr = match[4];
        const parameterListStrStart = (
            match[1].length +
            match[2].length +
            match[3].length
        );

        const contentStr = match[6];
        const contentStart = (
            match[1].length +
            match[2].length +
            match[3].length +
            match[4].length +
            match[5].length
        );

        const parameterList : MacroParameterList = [] as unknown as MacroParameterList;
        parameterList.start = match.index + parameterListStrStart;
        parameterList.end = match.index + parameterListStrStart + parameterListStr.length;

        parseParameterList(
            parameterList,
            parameterListStr
        );

        for (const parameter of parameterList) {
            findReferences(parameter, contentStr, match.index + contentStart);
        }

        const content : PlainTextPart = {
            //start : match.index + contentStart,
            //end : match.index + contentStart + contentStr.length,
            start : 0,
            end : contentStr.length,
            filename,
            type : MacroPartType.PlainText,
            fileSrc : {
                start : match.index + contentStart,
                end : match.index + contentStart + contentStr.length,
            },
            value : contentStr,
        };

        result.push({
            filename,
            start : match.index,
            end : match.index + match[0].length,
            identifier : {
                start : match.index + macroNameStart,
                end : match.index + macroNameStart + macroName.length,
                fileSrc : {
                    start : match.index + macroNameStart,
                    end : match.index + macroNameStart + macroName.length,
                },
                macroName : macroName,
            },
            parameterList,
            content,
            parts : computeSubstitutionContent(
                filename,
                parameterList,
                content
            ),
        });

        match = macroRegex.exec(sourceText);
    }

    return result;
}
