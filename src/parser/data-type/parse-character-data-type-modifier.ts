import {Identifier, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {DiagnosticMessages} from "../diagnostic-messages";
import {tryParseIdentifier} from "../parse-identifier";
import {ParserState} from "../parser-state";
import {pushSyntacticError, tryConsumeToken} from "../util";

export interface CharacterDataTypeModifier {
    readonly characterSet : Identifier|undefined;
    readonly collate : Identifier|undefined;
}

export function parseCharacterDataTypeModifier (state : ParserState, forceCharacterSet : Identifier|undefined = undefined) : CharacterDataTypeModifier {
    let characterSet : Identifier|undefined = forceCharacterSet;
    let collate : Identifier|undefined = undefined;

    if (tryConsumeToken(state, TokenKind.CHARACTER, false)) {
        tryConsumeToken(state, TokenKind.SET, true);
        let newCharacterSet = tryParseIdentifier(state, false, true);
        if (newCharacterSet == undefined) {
            return {
                characterSet,
                collate,
            };
        }
        if (forceCharacterSet == undefined) {
            characterSet = {
                ...newCharacterSet,
                identifier : newCharacterSet.identifier.toLowerCase(),
            };
        } else {
            pushSyntacticError(
                state,
                DiagnosticMessages.CannotSpecifyCharacterSet
            );
        }
    }

    if (tryConsumeToken(state, TokenKind.COLLATE, false)) {
        let newCollate = tryParseIdentifier(state, false, true);
        if (newCollate == undefined) {
            return {
                characterSet,
                collate,
            };
        }
        collate = {
            ...newCollate,
            identifier : newCollate.identifier.toLowerCase(),
        };

        /**
         * The binary character set only has one collation,
         * the binary collation.
         */
        const characterSetEnd = (
            collate.identifier == "binary" ?
            collate.identifier.length :
            collate.identifier.indexOf("_")
        );
        if (characterSetEnd >= 0) {
            const newCharacterSet = collate.identifier.substring(0, collate.identifier.indexOf("_"));
            if (characterSet == undefined) {
                characterSet = {
                    start : collate.start,
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
    }

    return {
        characterSet,
        collate,
    };
}
