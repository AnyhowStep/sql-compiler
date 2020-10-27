import {SyntacticErrorContainer, TextRange} from "../../parser-node";
import {ReverseTokenKind, Scanner, TokenKind} from "../../scanner";
import {DiagnosticMessages} from "../diagnostic-messages";
import {pushSyntacticErrorAt} from "../parse-util";

export interface MacroIdentifier extends TextRange {
    macroName : string
}
export interface MacroParameter extends TextRange {
    parameterName : string,
    /**
     * `TextRange` is within `content.value`
     */
    references : TextRange[],
}
/**
 * `TextRange` is within `content.value`
 */
export interface MacroSubstitution extends TextRange {
    parameterName : string,
}
export interface MacroParameterList extends TextRange, Array<MacroParameter>, SyntacticErrorContainer {

}
export interface MacroContent extends TextRange {
    value : string
}

export interface Macro extends TextRange {
    filename : string,
    identifier : MacroIdentifier,
    parameterList : MacroParameterList,
    /**
     * May contain references to other macros
     */
    content : MacroContent,

    substitutionContent : (MacroContent|MacroSubstitution)[],
}

function computeSubstitutionContent (
    parameterList : MacroParameterList,
    content : MacroContent,
) {
    const substitutions = parameterList
        .map(parameter => {
            return parameter.references.map((ref) : MacroSubstitution => {
                return {
                    start : ref.start,
                    end : ref.end,
                    parameterName : parameter.parameterName,
                };
            });
        })
        .flat(1)
        .sort((a, b) => {
            return a.start - b.start;
        });
    const result : (MacroContent|MacroSubstitution)[] = [];

    let start = 0;
    for (const substitution of substitutions) {
        const prefixContent : MacroContent = {
            start,
            end : substitution.start,
            value : content.value.substring(
                start,
                substitution.start
            ),
        };
        start = substitution.end;
        result.push(prefixContent, substitution);
    }

    const trailingContent : MacroContent = {
        start,
        end : content.value.length,
        value : content.value.substring(
            start,
            content.value.length
        ),
    };
    result.push(trailingContent);

    return result;
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
    content : string
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
                parameter.references.push({
                    start : scanner.getTokenIndex(),
                    end : scanner.getIndex(),
                });
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
            findReferences(parameter, contentStr);
        }

        const content = {
            start : match.index + contentStart,
            end : match.index + contentStart + contentStr.length,
            value : contentStr,
        };

        result.push({
            filename,
            start : match.index,
            end : match.index + match[0].length,
            identifier : {
                start : match.index + macroNameStart,
                end : match.index + macroNameStart + macroName.length,
                macroName : macroName,
            },
            parameterList,
            content,
            substitutionContent : computeSubstitutionContent(
                parameterList,
                content
            ),
        });

        match = macroRegex.exec(sourceText);
    }

    return result;
}
