import {Identifier, SyntaxKind, TextRange} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {makeCustomRule, optional, union} from "../nearley-util";
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
                    characterSet : undefined,
                    collate : undefined,
                    ...getTextRange([characterSet, collate]),
                },
                {
                    characterSet : characterSet?.[2],
                    collate : collate?.[1],
                }
            );
        }
    )
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7085
     */
    .addSubstitution(
        [
            TokenKind.ASCII,
        ] as const,
        function (data) : CharacterDataTypeModifier {
            return {
                ...getTextRange(data),
                characterSet : {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.Identifier,
                    identifier : this.settings.asciiCharacterSet,
                    quoted : false,
                },
                collate : undefined,
            };
        }
    )
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7085
     */
    .addSubstitution(
        [
            union(
                [TokenKind.ASCII, TokenKind.BINARY] as const,
                [TokenKind.BINARY, TokenKind.ASCII] as const,
            ),
        ] as const,
        function (data) : CharacterDataTypeModifier {
            return {
                ...getTextRange(data),
                characterSet : {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.Identifier,
                    identifier : this.settings.asciiCharacterSet,
                    quoted : false,
                },
                collate : {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.Identifier,
                    identifier : this.settings.asciiBinaryCollation,
                    quoted : false,
                },
            };
        }
    )
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7091
     */
    .addSubstitution(
        [
            TokenKind.UNICODE,
        ] as const,
        function (data) : CharacterDataTypeModifier {
            return {
                ...getTextRange(data),
                characterSet : {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.Identifier,
                    identifier : this.settings.unicodeCharacterSet,
                    quoted : false,
                },
                collate : undefined,
            };
        }
    )
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7091
     */
    .addSubstitution(
        [
            union(
                [TokenKind.UNICODE, TokenKind.BINARY] as const,
                [TokenKind.BINARY, TokenKind.UNICODE] as const,
            ),
        ] as const,
        function (data) : CharacterDataTypeModifier {
            return {
                ...getTextRange(data),
                characterSet : {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.Identifier,
                    identifier : this.settings.unicodeCharacterSet,
                    quoted : false,
                },
                collate : {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.Identifier,
                    identifier : this.settings.unicodeBinaryCollation,
                    quoted : false,
                },
            };
        }
    );
