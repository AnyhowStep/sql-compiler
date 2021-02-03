import {CharacterDataType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {optional, union} from "../../nearley-wrapper";
import {getTextRange, pushSyntacticErrorAt} from "../parse-util";
import {DiagnosticMessages} from "../diagnostic-messages";
import {CustomSyntaxKind, makeCustomRule} from "../factory";
import {CharacterDataTypeStart} from "../custom-data";

makeCustomRule(CustomSyntaxKind.CharacterDataTypeStart)
    .addSubstitution(
        [
            TokenKind.NATIONAL,
            union(
                TokenKind.VARCHAR,
                TokenKind.VARCHARACTER,
                [TokenKind.CHAR, TokenKind.VARYING] as const,
                [TokenKind.CHARACTER, TokenKind.VARYING] as const,
            ),
        ] as const,
        function (data) : CharacterDataTypeStart {
            return {
                ...getTextRange(data),
                variableLength : true,
                nationalCharacterSet : {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.Identifier,
                    identifier : this.settings.nationalCharacterSet,
                    quoted : false,
                },
            }
        }
    )
    .addSubstitution(
        [
            TokenKind.NCHAR,
            union(
                TokenKind.VARYING,
                TokenKind.VARCHAR
            ),
        ] as const,
        function (data) : CharacterDataTypeStart {
            return {
                ...getTextRange(data),
                variableLength : true,
                nationalCharacterSet : {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.Identifier,
                    identifier : this.settings.nationalCharacterSet,
                    quoted : false,
                },
            }
        }
    )
    .addSubstitution(
        [
            TokenKind.NVARCHAR,
        ] as const,
        function (data) : CharacterDataTypeStart {
            return {
                ...getTextRange(data),
                variableLength : true,
                nationalCharacterSet : {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.Identifier,
                    identifier : this.settings.nationalCharacterSet,
                    quoted : false,
                },
            }
        }
    )
    .addSubstitution(
        [
            union(
                TokenKind.CHAR,
                TokenKind.CHARACTER,
            ),
            TokenKind.VARYING
        ] as const,
        (data) : CharacterDataTypeStart => {
            return {
                ...getTextRange(data),
                variableLength : true,
                nationalCharacterSet : undefined,
            }
        }
    )
    .addSubstitution(
        [
            union(
                TokenKind.VARCHAR,
                TokenKind.VARCHARACTER,
            ),
        ] as const,
        (data) : CharacterDataTypeStart => {
            return {
                ...getTextRange(data),
                variableLength : true,
                nationalCharacterSet : undefined,
            }
        }
    )


makeCustomRule(CustomSyntaxKind.CharacterDataTypeStart)
    .addSubstitution(
        [
            TokenKind.NATIONAL,
            union(
                TokenKind.CHAR,
                TokenKind.CHARACTER,
            ),
        ] as const,
        function (data) : CharacterDataTypeStart {
            return {
                ...getTextRange(data),
                variableLength : false,
                nationalCharacterSet : {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.Identifier,
                    identifier : this.settings.nationalCharacterSet,
                    quoted : false,
                },
            }
        }
    )
    .addSubstitution(
        [
            TokenKind.NCHAR,
        ] as const,
        function (data) : CharacterDataTypeStart {
            return {
                ...getTextRange(data),
                variableLength : false,
                nationalCharacterSet : {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.Identifier,
                    identifier : this.settings.nationalCharacterSet,
                    quoted : false,
                },
            }
        }
    )
    .addSubstitution(
        [
            union(
                TokenKind.CHAR,
                TokenKind.CHARACTER,
            ),
        ] as const,
        (data) : CharacterDataTypeStart => {
            return {
                ...getTextRange(data),
                variableLength : false,
                nationalCharacterSet : undefined,
            }
        }
    )

makeCustomRule(SyntaxKind.CharacterDataType)
    .addSubstitution(
        [
            CustomSyntaxKind.CharacterDataTypeStart,
            optional(SyntaxKind.FieldLength),
            CustomSyntaxKind.CharacterDataTypeModifier,
        ] as const,
        (data) => {
            const [char, maxLength, modifier] = data;

            if (
                char.nationalCharacterSet != undefined &&
                modifier.characterSet != undefined
            ) {
                pushSyntacticErrorAt(
                    char.nationalCharacterSet,
                    modifier.characterSet.start,
                    modifier.characterSet.end,
                    [char.nationalCharacterSet],
                    DiagnosticMessages.NationalCharacterDataTypeCannotSpecifyCharacterSet
                );
            }

            const result : CharacterDataType = {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CharacterDataType,
                variableLength : char.variableLength,
                maxLength : (
                    maxLength == undefined ?
                    {
                        start : char.end,
                        end : char.end,
                        syntaxKind : SyntaxKind.FieldLength,
                        length : {
                            start : char.end,
                            end : char.end,
                            syntaxKind : SyntaxKind.IntegerLiteral,
                            value : BigInt(1),
                        },
                    } :
                    maxLength
                ),
                characterSet : (
                    char.nationalCharacterSet ??
                    modifier.characterSet
                ),
                collate : modifier.collate,
                binary : modifier.binary,
            };

            if (
                char.variableLength &&
                maxLength == undefined
            ) {
                pushSyntacticErrorAt(
                    result,
                    char.end,
                    char.end,
                    [char],
                    DiagnosticMessages.VariableLengthCharacterDataTypeMustSpecifyFieldLength
                );
            }

            return result;
        }
    );
