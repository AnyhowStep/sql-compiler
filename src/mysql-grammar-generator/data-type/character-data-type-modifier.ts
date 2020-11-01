import {Identifier, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {optional, union} from "../../nearley-wrapper";
import {getTextRange, processCharacterDataTypeModifier} from "../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../factory";
import {CharacterDataTypeModifier} from "../custom-data";

makeCustomRule(CustomSyntaxKind.CharacterDataTypeModifier)
    .addSubstitution(
        [
            optional([
                union(
                    [
                        TokenKind.CHARACTER,
                        TokenKind.SET,
                    ] as const,
                    TokenKind.CHARSET
                ),
                CustomSyntaxKind.CharacterSetName
            ] as const),
            optional([
                TokenKind.COLLATE,
                SyntaxKind.Identifier
            ] as const),
        ] as const,
        function ([characterSet, collate]) : CharacterDataTypeModifier {
            return processCharacterDataTypeModifier(
                {
                    characterSet : undefined,
                    collate : undefined,
                    ...getTextRange([characterSet, collate]),
                },
                {
                    characterSet : characterSet?.[1],
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
    )
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7128
     */
    .addSubstitution(
        [
            TokenKind.BYTE,
        ] as const,
        function (data) : CharacterDataTypeModifier {
            return {
                ...getTextRange(data),
                characterSet : {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.Identifier,
                    identifier : this.settings.binaryCharacterSet,
                    quoted : false,
                },
                collate : {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.Identifier,
                    identifier : this.settings.binaryCollation,
                    quoted : false,
                },
            };
        }
    )
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7138
     */
    .addSubstitution(
        [
            TokenKind.BINARY,
        ] as const,
        function (data) : CharacterDataTypeModifier {
            return {
                ...getTextRange(data),
                characterSet : undefined,
                collate : undefined,
                binary : getTextRange(data),
            };
        }
    )
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7133
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7143
     */
    .addSubstitution(
        [
            union(
                [
                    TokenKind.BINARY,
                    union(
                        [
                            TokenKind.CHARACTER,
                            TokenKind.SET,
                        ] as const,
                        TokenKind.CHARSET
                    ),
                    CustomSyntaxKind.CharacterSetName,
                ] as const,
                [
                    union(
                        [
                            TokenKind.CHARACTER,
                            TokenKind.SET,
                        ] as const,
                        TokenKind.CHARSET
                    ),
                    CustomSyntaxKind.CharacterSetName,
                    TokenKind.BINARY,
                ] as const
            )
        ] as const,
        function (data) : CharacterDataTypeModifier {
            const x = data[0][0].filter((item) : item is Identifier => "syntaxKind" in item);
            const characterSet = x[0];

            return {
                ...getTextRange(data),
                characterSet,
                collate : {
                    ...getTextRange(characterSet),
                    syntaxKind : SyntaxKind.Identifier,
                    identifier : this.settings.characterSetToBinaryCollation(characterSet.identifier),
                    quoted : false,
                },
            };
        }
    );
