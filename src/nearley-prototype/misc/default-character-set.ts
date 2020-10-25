import {DefaultCharacterSet, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {CharacterSetNameRule} from "../identifier/character-set-name";
import {makeRule, optional, union} from "../nearley-util";
import {getTextRange} from "../parse-util";

makeRule(SyntaxKind.DefaultCharacterSet)
    .addSubstitution(
        [
            optional(TokenKind.DEFAULT),
            union(
                [
                    TokenKind.CHARACTER,
                    TokenKind.SET,
                ] as const,
                TokenKind.CHARSET
            ),
            optional(TokenKind.Equal),
            CharacterSetNameRule
        ] as const,
        (data) : DefaultCharacterSet => {
            let [, , , characterSetName] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.DefaultCharacterSet,
                characterSetName : (
                    characterSetName.quoted ?
                    characterSetName :
                    characterSetName.identifier.toUpperCase() == "DEFAULT" ?
                    undefined :
                    characterSetName
                ),
            };
        }
    );
