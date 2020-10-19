import {DiagnosticMessages} from "../diagnostic-messages";
import {CreateSchemaStatement, Identifier, UnknownStatement} from "../../parser-node";
import {SyntaxKind} from "../../parser-node";
import {tryParseIdentifier} from "../parse-identifier";
import {ParserState} from "../parser-state";
import {parseUnknownStatement, pushSyntacticError, tryConsumeToken, tryConsumeTokenOneOf, tryConsumeTokens} from "../util";
import {TokenKind} from "../../scanner";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/create-database.html
 */
export function parseCreateSchemaStatement (state : ParserState, start : number) : CreateSchemaStatement|UnknownStatement {
    const ifNotExists = tryConsumeTokens(state, TokenKind.IF, TokenKind.NOT, TokenKind.EXISTS);

    const schemaName = tryParseIdentifier(state, false, true);
    if (schemaName == undefined) {
        return parseUnknownStatement(state, start);
    }

    let collate : Identifier|undefined = undefined;
    let characterSet : Identifier|undefined = undefined;

    function shouldEnd () {
        const peekedToken = state.scanner.clone().next();
        return (
            peekedToken == TokenKind.EndOfFile ||
            peekedToken == TokenKind.SemiColon ||
            peekedToken == TokenKind.CustomDelimiter
        );
    }
    while (!shouldEnd()) {
        tryConsumeToken(state, TokenKind.DEFAULT, false);

        if (!tryConsumeTokenOneOf(state, true, TokenKind.COLLATE, TokenKind.CHARACTER)) {
            parseUnknownStatement(state, state.scanner.getIndex());
            break;
        }

        const token = state.scanner.current();

        if (token == TokenKind.COLLATE) {
            tryConsumeToken(state, TokenKind.Equal, false);
            let newCollate = tryParseIdentifier(state, false, true);
            if (newCollate == undefined) {
                parseUnknownStatement(state, start);
                break;
            }
            newCollate = {
                ...newCollate,
                identifier : newCollate.identifier.toLowerCase(),
            };

            if (collate == undefined) {
                collate = newCollate;

                const characterSetEnd = collate.identifier.indexOf("_");
                if (characterSetEnd >= 0) {
                    const newCharacterSet = collate.identifier.substring(0, collate.identifier.indexOf("_"));
                    if (characterSet == undefined) {
                        characterSet = {
                            start,
                            end : collate.start + characterSetEnd,
                            syntaxKind : SyntaxKind.Identifier,
                            identifier : newCharacterSet,
                            quoted : false,
                        };
                    } else {
                        if (characterSet.identifier != newCharacterSet) {
                            pushSyntacticError(
                                state,
                                DiagnosticMessages.ConflictingDeclarations,
                                `CHARACTER SET ${characterSet.identifier}`,
                                `CHARACTER SET ${newCharacterSet}`
                            );
                        }
                    }
                } else {
                    pushSyntacticError(state, DiagnosticMessages.UnknownCollation, collate.identifier);
                }
            } else {
                if (collate != newCollate) {
                    pushSyntacticError(state, DiagnosticMessages.ConflictingDeclarations, `COLLATE ${collate}`, `COLLATE ${newCollate}`);
                }
            }
        } else {
            tryConsumeToken(state, TokenKind.SET, true);
            tryConsumeToken(state, TokenKind.Equal, false);
            let newCharacterSet = tryParseIdentifier(state, false, true);
            if (newCharacterSet == undefined) {
                parseUnknownStatement(state, start);
                break;
            }
            newCharacterSet = {
                ...newCharacterSet,
                identifier : newCharacterSet.identifier.toLowerCase(),
            };
            if (characterSet == undefined) {
                characterSet = newCharacterSet;
            } else {
                if (characterSet.identifier != newCharacterSet.identifier) {
                    pushSyntacticError(
                        state,
                        DiagnosticMessages.ConflictingDeclarations,
                        `CHARACTER SET ${characterSet}`,
                        `CHARACTER SET ${newCharacterSet}`
                    );
                }
            }
        }
    }

    return {
        start,
        end : state.scanner.getIndex(),
        syntaxKind : SyntaxKind.CreateSchemaStatement,
        ifNotExists,
        schemaName,
        collate,
        characterSet,
    };
}
