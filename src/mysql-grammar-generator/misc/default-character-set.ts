import {DefaultCharacterSet, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../factory";
import {optional, union} from "../../nearley-wrapper";
import {getTextRange} from "../parse-util";

makeCustomRule(SyntaxKind.DefaultCharacterSet)
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
            CustomSyntaxKind.CharacterSetName
        ] as const,
        (data) : DefaultCharacterSet => {
            let [, , , characterSetName] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.DefaultCharacterSet,
                characterSetName : (
                    characterSetName.syntaxKind == SyntaxKind.StringLiteral ?
                    characterSetName :
                    characterSetName.quoted ?
                    characterSetName :
                    characterSetName.identifier.toUpperCase() == "DEFAULT" ?
                    undefined :
                    characterSetName
                ),
            };
        }
    );
