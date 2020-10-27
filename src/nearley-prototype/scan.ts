import {CharacterCodes, ReverseTokenKind, Scanner, TokenKind} from "../scanner";
import {TokenObj} from "./nearley-util";

export function scanAll (scanner : Scanner) : TokenObj<TokenKind>[] {
    const arr : TokenObj<TokenKind>[] = [];
    while (true) {
        const token = scanner.next();
        if (token == TokenKind.EndOfFile) {
            break;
        }
        const start = scanner.getTokenIndex();
        const end = scanner.getIndex();

        if (token == TokenKind.Identifier) {
            const sourceText = scanner.getTokenSourceText().toUpperCase();
            if (
                sourceText == "DELIMITER" &&
                scanner.charCodeAt(scanner.getIndex()) == CharacterCodes.space
            ) {
                const customDelimiter = scanner.scanDelimiter();
                arr.push({
                    tokenKind : TokenKind.DELIMITER_STATEMENT,
                    value : scanner.getTokenSourceText(),
                    start : scanner.getTokenIndex(),
                    end : scanner.getIndex(),
                    getTokenSourceText : () => {
                        return scanner.getText().substring(start, end);
                    },
                });
                arr.push({
                    tokenKind : TokenKind.CustomDelimiter,
                    value : (
                        customDelimiter == undefined ?
                        ";" :
                        customDelimiter
                    ),
                    start : scanner.getTokenIndex(),
                    end : scanner.getIndex(),
                    getTokenSourceText : () => {
                        return scanner.getText().substring(start, end);
                    },
                });
                continue;
            }
        }
        arr.push({
            tokenKind : token,
            value : (
                token == TokenKind.Identifier ?
                scanner.getTokenValue() :
                token == TokenKind.MacroIdentifier ?
                scanner.getTokenValue() :
                token == TokenKind.CustomDelimiter ?
                scanner.getTokenValue() :
                token == TokenKind.IntegerLiteral ?
                scanner.getTokenValue() :
                token == TokenKind.StringLiteral ?
                scanner.getTokenValue() :
                token == TokenKind.DecimalLiteral ?
                scanner.getTokenValue() :
                token == TokenKind.RealLiteral ?
                scanner.getTokenValue() :
                ReverseTokenKind[token]
            ),
            getTokenSourceText : () => {
                return scanner.getText().substring(start, end);
            },
            start,
            end,
        });
    }

    return arr;
}
