import {CharacterDataType, Identifier, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {DiagnosticMessages} from "../diagnostic-messages";
import {ParserState} from "../parser-state";
import {pushSyntacticError, tryConsumeToken, tryConsumeTokenOneOf} from "../util";
import {parseCharacterDataTypeModifier} from "./parse-character-data-type-modifier";

interface CharacterDataTypePreModifier {
    start : number;
    variableLength : boolean;
    nationalCharacterSet : Identifier|undefined;
}
/**
 * CHAR
 * CHARACTER
 *
 * NCHAR
 *
 * NATIONAL CHAR
 * NATIONAL CHARACTER
 *
 * -----
 *
 * CHAR VARYING
 * CHARACTER VARYING
 *
 * NCHAR VARYING
 *
 * NATIONAL CHAR VARYING
 * NATIONAL CHARACTER VARYING
 *
 * -----
 *
 * VARCHAR
 * VARCHARACTER
 *
 * NVARCHAR
 *
 * NATIONAL VARCHAR
 * NATIONAL VARCHARACTER
 *
 * -----
 *
 * @todo Better name
 */
function tryParseCharacterDataTypePreModifier (state : ParserState) : CharacterDataTypePreModifier|undefined {
    if (tryConsumeToken(state, TokenKind.NATIONAL, false)) {
        const start = state.scanner.getTokenIndex();

        if (!tryConsumeTokenOneOf(
            state,
            true,
            TokenKind.CHAR,
            TokenKind.CHARACTER,
            TokenKind.VARCHAR,
            TokenKind.VARCHARACTER
        )) {
            return undefined;
        }

        const token = state.scanner.current();
        if (token == TokenKind.VARCHAR || token == TokenKind.VARCHARACTER) {
            return {
                start,
                variableLength : true,
                nationalCharacterSet : {
                    start,
                    end : state.scanner.getIndex(),
                    syntaxKind : SyntaxKind.Identifier,
                    identifier : "utf8",
                    quoted : false,
                },
            };
        }

        if (tryConsumeToken(state, TokenKind.VARYING, false)) {
            return {
                start,
                variableLength : true,
                nationalCharacterSet : {
                    start,
                    end : state.scanner.getIndex(),
                    syntaxKind : SyntaxKind.Identifier,
                    identifier : "utf8",
                    quoted : false,
                },
            };
        } else {
            return {
                start,
                variableLength : false,
                nationalCharacterSet : {
                    start,
                    end : state.scanner.getIndex(),
                    syntaxKind : SyntaxKind.Identifier,
                    identifier : "utf8",
                    quoted : false,
                },
            };
        }
    }

    if (tryConsumeToken(state, TokenKind.NCHAR, false)) {
        const start = state.scanner.getTokenIndex();
        if (tryConsumeToken(state, TokenKind.VARYING, false)) {
            return {
                start,
                variableLength : true,
                nationalCharacterSet : {
                    start,
                    end : state.scanner.getIndex(),
                    syntaxKind : SyntaxKind.Identifier,
                    identifier : "utf8",
                    quoted : false,
                },
            };
        } else {
            return {
                start,
                variableLength : false,
                nationalCharacterSet : {
                    start,
                    end : state.scanner.getIndex(),
                    syntaxKind : SyntaxKind.Identifier,
                    identifier : "utf8",
                    quoted : false,
                },
            };
        }
    }

    if (tryConsumeToken(state, TokenKind.NVARCHAR, false)) {
        const start = state.scanner.getTokenIndex();
        return {
            start,
            variableLength : true,
            nationalCharacterSet : {
                start,
                end : state.scanner.getIndex(),
                syntaxKind : SyntaxKind.Identifier,
                identifier : "utf8",
                quoted : false,
            },
        };
    }

    if (tryConsumeTokenOneOf(state, false, TokenKind.CHAR, TokenKind.CHARACTER)) {
        const start = state.scanner.getTokenIndex();
        if (tryConsumeToken(state, TokenKind.VARYING, false)) {
            return {
                start,
                variableLength : true,
                nationalCharacterSet : undefined,
            };
        } else {
            return {
                start,
                variableLength : false,
                nationalCharacterSet : undefined,
            };
        }
    }


    if (tryConsumeTokenOneOf(state, false, TokenKind.VARCHAR, TokenKind.VARCHARACTER)) {
        const start = state.scanner.getTokenIndex();
        return {
            start,
            variableLength : true,
            nationalCharacterSet : undefined,
        };
    }

    return undefined;
}
export function tryParseCharacterDataType (state : ParserState) : CharacterDataType|undefined {
    const preModifier = tryParseCharacterDataTypePreModifier(state);

    if (preModifier == undefined) {
        return undefined;
    }

    let maxLength : number = 1;
    if (tryConsumeToken(state, TokenKind.OpenParentheses, /*reportError*/preModifier.variableLength)) {

        if (tryConsumeToken(state, TokenKind.IntegerLiteral, true)) {
            maxLength = parseInt(state.scanner.getTokenValue(), 10);

            const maxMaxLength = preModifier.variableLength ? 65535 : 255;
            if (maxLength > maxMaxLength) {
                pushSyntacticError(
                    state,
                    DiagnosticMessages.DataTypeMaxLengthTooHigh,
                    (
                        preModifier.variableLength ?
                        "VARCHAR" :
                        "CHAR"
                    ),
                    maxMaxLength
                );
            }
        }

        tryConsumeToken(state, TokenKind.CloseParentheses, true);
    }

    const modifier = parseCharacterDataTypeModifier(
        state,
        /*forceCharacterSet*/preModifier.nationalCharacterSet
    );
    return {
        start : preModifier.start,
        end : state.scanner.getIndex(),
        syntaxKind : SyntaxKind.CharacterDataType,
        variableLength : preModifier.variableLength,
        maxLength,
        ...modifier,
    };
}
