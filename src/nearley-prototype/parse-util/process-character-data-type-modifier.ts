import {Identifier, SyntaxKind} from "../../parser-node";
import {CharacterDataTypeModifier} from "../data-type/character-data-type-modifier";
import {DiagnosticMessages} from "../diagnostic-messages";
import {ParserState} from "../parser-state";
import {pushSyntacticErrorAtNode} from "./syntactic-error";
import {getTextRange} from "./text-range";

export function processCharacterDataTypeModifier (
    state : ParserState,
    current : CharacterDataTypeModifier,
    next : {
        readonly characterSet : Identifier|undefined;
        readonly collate : Identifier|undefined;
    }
) : CharacterDataTypeModifier {
    let {
        characterSet,
        collate,
    } = current;

    if (next.characterSet != undefined) {
        const newCharacterSet = {
            ...next.characterSet,
            identifier : next.characterSet.identifier.toLowerCase(),
        };
        if (characterSet == undefined) {
            characterSet = newCharacterSet;
        } else {
            if (characterSet.identifier != newCharacterSet.identifier) {
                pushSyntacticErrorAtNode(
                    state,
                    characterSet,
                    [],
                    DiagnosticMessages.ConflictingDeclarations,
                    `CHARACTER SET ${characterSet.identifier}`,
                    `CHARACTER SET ${newCharacterSet.identifier}`
                );
            }
        }
    }

    if (next.collate != undefined) {
        const newCollate = {
            ...next.collate,
            identifier : next.collate.identifier.toLowerCase(),
        };

        if (collate == undefined) {
            collate = newCollate;

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
                const newCharacterSet = collate.identifier.substring(0, characterSetEnd);
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
                        pushSyntacticErrorAtNode(
                            state,
                            characterSet,
                            [],
                            DiagnosticMessages.ConflictingDeclarations,
                            `CHARACTER SET ${characterSet.identifier}`,
                            `CHARACTER SET ${newCharacterSet}`
                        );
                    }
                }
            } else {
                pushSyntacticErrorAtNode(
                    state,
                    collate,
                    [],
                    DiagnosticMessages.UnknownCollation,
                    collate.identifier
                );
            }
        } else {
            if (collate.identifier != newCollate.identifier) {
                pushSyntacticErrorAtNode(
                    state,
                    collate,
                    [],
                    DiagnosticMessages.ConflictingDeclarations,
                    `COLLATE ${collate.identifier}`,
                    `COLLATE ${newCollate.identifier}`
                );
            }
        }
    }

    return {
        ...getTextRange([characterSet, collate]),
        characterSet,
        collate,
    };
}
