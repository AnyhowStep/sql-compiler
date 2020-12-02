import {optional, union, TokenObj} from "../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {CurrentTimestamp, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {makeRule, makeCustomRule} from "../factory";

/**
 * This is a hack, this does not actually exist as a rule but as a token
 */
const NowToken = makeRule<TokenObj<TokenKind>>("%NowToken");

makeCustomRule(SyntaxKind.CurrentTimestamp)
    .addSubstitution(
        [
            NowToken,
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
                        value : 0n,
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
                        value : 0n,
                    },
                },
            };
        }
    )
    .addSubstitution(
        [
            union(
                TokenKind.CURRENT_TIMESTAMP,
                NowToken
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
