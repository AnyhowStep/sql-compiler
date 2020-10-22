import {Identifier, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {
    makeCustomRule,
    makeRule, optional, union,
} from "../nearley-util";
import {CharacterDataTypeModifier} from "./character-data-type-modifier";
import {getTextRange} from "../parse-util";

interface CharacterDataTypePreModifier {
    start : number;
    end : number;
    variableLength : boolean;
    nationalCharacterSet : Identifier|undefined;
}

const VarCharStart = makeCustomRule("VarCharStart")
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
        (data) : CharacterDataTypePreModifier => {
            return {
                ...getTextRange(data),
                variableLength : true,
                nationalCharacterSet : {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.Identifier,
                    identifier : "utf8",
                    quoted : false,
                },
            }
        }
    )
    .addSubstitution(
        [
            TokenKind.NCHAR,
            TokenKind.VARYING,
        ] as const,
        (data) : CharacterDataTypePreModifier => {
            return {
                ...getTextRange(data),
                variableLength : true,
                nationalCharacterSet : {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.Identifier,
                    identifier : "utf8",
                    quoted : false,
                },
            }
        }
    )
    .addSubstitution(
        [
            TokenKind.NVARCHAR,
        ] as const,
        (data) : CharacterDataTypePreModifier => {
            return {
                ...getTextRange(data),
                variableLength : true,
                nationalCharacterSet : {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.Identifier,
                    identifier : "utf8",
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
        (data) : CharacterDataTypePreModifier => {
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
        (data) : CharacterDataTypePreModifier => {
            return {
                ...getTextRange(data),
                variableLength : true,
                nationalCharacterSet : undefined,
            }
        }
    )


const CharStart = makeCustomRule("CharStart")
    .addSubstitution(
        [
            TokenKind.NATIONAL,
            union(
                TokenKind.CHAR,
                TokenKind.CHARACTER,
            ),
        ] as const,
        (data) : CharacterDataTypePreModifier => {
            return {
                ...getTextRange(data),
                variableLength : false,
                nationalCharacterSet : {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.Identifier,
                    identifier : "utf8",
                    quoted : false,
                },
            }
        }
    )
    .addSubstitution(
        [
            TokenKind.NCHAR,
        ] as const,
        (data) : CharacterDataTypePreModifier => {
            return {
                ...getTextRange(data),
                variableLength : false,
                nationalCharacterSet : {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.Identifier,
                    identifier : "utf8",
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
        (data) : CharacterDataTypePreModifier => {
            return {
                ...getTextRange(data),
                variableLength : false,
                nationalCharacterSet : undefined,
            }
        }
    )

makeRule(SyntaxKind.CharacterDataType)
    .addSubstitution(
        [
            CharStart,
            optional([
                TokenKind.OpenParentheses,
                SyntaxKind.IntegerLiteral,
                TokenKind.CloseParentheses,
            ] as const),
            CharacterDataTypeModifier,
        ] as const,
        (data) => {
            const [char, maxLength, modifier] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CharacterDataType,
                nationalCharacterSet : char.nationalCharacterSet,
                variableLength : false,
                maxLength : (
                    maxLength == undefined ?
                    {
                        start : char.end,
                        end : char.end,
                        syntaxKind : SyntaxKind.IntegerLiteral,
                        value : BigInt(1),
                    } :
                    maxLength[1]
                ),
                ...modifier,
            };
        }
    )
    .addSubstitution(
        [
            VarCharStart,
            TokenKind.OpenParentheses,
            SyntaxKind.IntegerLiteral,
            TokenKind.CloseParentheses,
            CharacterDataTypeModifier,
        ] as const,
        (data) => {
            const [varChar, , maxLength, , modifier] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CharacterDataType,
                nationalCharacterSet : varChar.nationalCharacterSet,
                variableLength : varChar.variableLength,
                maxLength,
                ...modifier,
            };
        }
    );
