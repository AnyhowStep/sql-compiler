import {Identifier, SyntaxKind, TextRange} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {makeCustomRule, optional} from "../nearley-util";
import {getTextRange, processCharacterDataTypeModifier} from "../parse-util";

export interface CharacterDataTypeModifier extends TextRange {
    readonly characterSet : Identifier|undefined;
    readonly collate : Identifier|undefined;
}

export const CharacterDataTypeModifier = makeCustomRule("CharacterDataTypeModifier")
    .addSubstitution(
        [
            optional([
                TokenKind.CHARACTER,
                TokenKind.SET,
                SyntaxKind.Identifier
            ] as const),
            optional([
                TokenKind.COLLATE,
                SyntaxKind.Identifier
            ] as const),
        ] as const,
        function ([characterSet, collate]) : CharacterDataTypeModifier {
            return processCharacterDataTypeModifier(
                this,
                {
                    ...getTextRange([characterSet, collate]),
                    characterSet : undefined,
                    collate : undefined,
                },
                {
                    characterSet : characterSet?.[2],
                    collate : collate?.[1],
                }
            );
        }
    );
