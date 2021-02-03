import {optional, union} from "../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {CurrentTimestamp, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.CurrentTimestamp)
    .addSubstitution(
        [
            CustomSyntaxKind["%NowToken"],
            TokenKind.OpenParentheses,
            TokenKind.CloseParentheses,
        ] as const,
        (data) : CurrentTimestamp => {
            const textRange = getTextRange(data)
            return {
                ...textRange,
                syntaxKind : SyntaxKind.CurrentTimestamp,
                fractionalSecondPrecision : {
                    ...textRange,
                    syntaxKind : SyntaxKind.FieldLength,
                    length : {
                        ...textRange,
                        syntaxKind : SyntaxKind.IntegerLiteral,
                        value : BigInt(0),
                    },
                },
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.CURRENT_TIMESTAMP,
            optional([
                TokenKind.OpenParentheses,
                TokenKind.CloseParentheses,
            ] as const)
        ] as const,
        (data) : CurrentTimestamp => {
            const textRange = getTextRange(data)
            return {
                ...textRange,
                syntaxKind : SyntaxKind.CurrentTimestamp,
                fractionalSecondPrecision : {
                    ...textRange,
                    syntaxKind : SyntaxKind.FieldLength,
                    length : {
                        ...textRange,
                        syntaxKind : SyntaxKind.IntegerLiteral,
                        value : BigInt(0),
                    },
                },
            };
        }
    )
    .addSubstitution(
        [
            union(
                TokenKind.CURRENT_TIMESTAMP,
                CustomSyntaxKind["%NowToken"],
            ),
            SyntaxKind.FieldLength
        ] as const,
        (data) : CurrentTimestamp => {
            const [, fractionalSecondPrecision] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CurrentTimestamp,
                fractionalSecondPrecision,
            };
        }
    );
