import {Identifier, StringLiteral, SyntaxKind} from "../../parser-node";
import {CharacterDataTypeModifier} from "../custom-data";
import {DiagnosticMessages} from "../diagnostic-messages";
import {pushSyntacticErrorAtNode} from "./syntactic-error";
import {getTextRange} from "./text-range";

export function processCharacterDataTypeModifier (
    current : CharacterDataTypeModifier,
    next : {
        readonly characterSet : Identifier|StringLiteral|undefined;
        readonly collate : Identifier|StringLiteral|undefined;
    }
) : CharacterDataTypeModifier {
    let {
        characterSet,
        collate,
    } = current;

    if (next.characterSet != undefined) {
        const newCharacterSet = next.characterSet;
        if (characterSet == undefined) {
            characterSet = newCharacterSet;
        } else {
            const characterSetIdentifier = (
                characterSet.syntaxKind == SyntaxKind.Identifier ?
                characterSet.identifier :
                characterSet.value
            );
            const newCharacterSetIdentifier = (
                newCharacterSet.syntaxKind == SyntaxKind.Identifier ?
                newCharacterSet.identifier :
                newCharacterSet.value
            );

            if (characterSetIdentifier != newCharacterSetIdentifier) {
                pushSyntacticErrorAtNode(
                    characterSet,
                    [],
                    DiagnosticMessages.ConflictingDeclarations,
                    `CHARACTER SET ${characterSetIdentifier}`,
                    `CHARACTER SET ${newCharacterSetIdentifier}`
                );
            }
        }
    }

    if (next.collate != undefined) {
        const newCollateIdentifier = (
            next.collate.syntaxKind == SyntaxKind.Identifier ?
            next.collate.identifier.toLowerCase() :
            next.collate.value.toLowerCase()
        );
        const newCollate : Identifier|StringLiteral = (
            next.collate.syntaxKind == SyntaxKind.Identifier ?
            {
                ...next.collate,
                identifier : newCollateIdentifier,
            } :
            {
                ...next.collate,
                value : newCollateIdentifier,
            }
        );

        if (collate == undefined) {
            collate = newCollate;

            /**
             * The binary character set only has one collation,
             * the binary collation.
             */
            const characterSetEnd = (
                newCollateIdentifier == "binary" ?
                newCollateIdentifier.length :
                newCollateIdentifier.indexOf("_")
            );
            if (characterSetEnd >= 0) {
                const newCharacterSet = newCollateIdentifier.substring(0, characterSetEnd);
                if (characterSet == undefined) {
                    characterSet = {
                        start : collate.start,
                        end : collate.start + characterSetEnd,
                        syntaxKind : SyntaxKind.Identifier,
                        identifier : newCharacterSet,
                        quoted : false,
                    };
                } else {
                    const characterSetIdentifier = (
                        characterSet.syntaxKind == SyntaxKind.Identifier ?
                        characterSet.identifier :
                        characterSet.value
                    );
                    if (characterSetIdentifier.toLowerCase() != newCharacterSet) {
                        pushSyntacticErrorAtNode(
                            characterSet,
                            [],
                            DiagnosticMessages.ConflictingDeclarations,
                            `CHARACTER SET ${characterSetIdentifier}`,
                            `CHARACTER SET ${newCharacterSet}`
                        );
                    }
                }
            } else {
                pushSyntacticErrorAtNode(
                    collate,
                    [],
                    DiagnosticMessages.UnknownCollation,
                    newCollateIdentifier
                );
            }
        } else {
            const collateIdentifier = (
                collate.syntaxKind == SyntaxKind.Identifier ?
                collate.identifier :
                collate.value
            );
            if (collateIdentifier != newCollateIdentifier) {
                pushSyntacticErrorAtNode(
                    collate,
                    [],
                    DiagnosticMessages.ConflictingDeclarations,
                    `COLLATE ${collateIdentifier}`,
                    `COLLATE ${newCollateIdentifier}`
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
