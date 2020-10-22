import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {
    makeRule, optional,
} from "../nearley-util";

makeRule(SyntaxKind.BinaryDataType)
    .addSubstitution(
        [
            TokenKind.BINARY,
            optional([
                TokenKind.OpenParentheses,
                TokenKind.IntegerLiteral,
                TokenKind.CloseParentheses,
            ] as const)
        ] as const,
        ([binary, maxLengthSpecifier]) => {
            return {
                start : binary.start,
                end : maxLengthSpecifier?.[2].end ?? binary.end,
                syntaxKind : SyntaxKind.BinaryDataType,
                variableLength : false,
                maxLength : (
                    maxLengthSpecifier == undefined ?
                    1 :
                    parseInt(maxLengthSpecifier[1].value, 10)
                ),
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.VARBINARY,
            TokenKind.OpenParentheses,
            TokenKind.IntegerLiteral,
            TokenKind.CloseParentheses
        ] as const,
        ([binary, , maxLengthSpecifier, closeParentheses]) => {
            return {
                start : binary.start,
                end : closeParentheses.end,
                syntaxKind : SyntaxKind.BinaryDataType,
                variableLength : true,
                maxLength : parseInt(maxLengthSpecifier.value, 10),
            };
        }
    );
