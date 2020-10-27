import {CharacterCodes} from "./character-code";
import {TokenKind} from "./token-kind.generated";

const characterCodeToTokenKind : Record<number, TokenKind> = {
    [CharacterCodes.openParen] : TokenKind.OpenParentheses,
    [CharacterCodes.closeParen] : TokenKind.CloseParentheses,
    [CharacterCodes.caret] : TokenKind.Caret,
    [CharacterCodes.asterisk] : TokenKind.Asterisk,
    [CharacterCodes.minus] : TokenKind.Minus,
    [CharacterCodes.plus] : TokenKind.Plus,
    [CharacterCodes.comma] : TokenKind.Comma,
    [CharacterCodes.bar] : TokenKind.Bar,
    [CharacterCodes.equals] : TokenKind.Equal,
    [CharacterCodes.semicolon] : TokenKind.SemiColon,
    [CharacterCodes.dot] : TokenKind.Dot,
    [CharacterCodes.pound] : TokenKind.Pound,
};

export function tryGetCharacterCodeTokenKind (ch : number) : TokenKind|undefined {
    if (Object.prototype.hasOwnProperty.call(characterCodeToTokenKind, ch)) {
        return characterCodeToTokenKind[ch];
    }
    return undefined;
}
