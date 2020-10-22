import {Identifier, SyntaxKind, TextRange} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {getTextRange, makeCustomRule, optional} from "../nearley-util";

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
        ([characterSet, collate]) : CharacterDataTypeModifier => {
            return {
                ...getTextRange([characterSet, collate]),
                characterSet : characterSet?.[2],
                collate : collate?.[1],
            };
        }
    );
