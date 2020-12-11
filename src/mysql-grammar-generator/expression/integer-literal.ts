import {BigIntUnsignedMaxValue} from "../../mysql-grammar/constants";
import {DecimalLiteral, IntegerLiteral, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../factory";
import {getTextRange} from "../parse-util";

makeCustomRule(CustomSyntaxKind.IntegerLiteralOrDecimalLiteral)
    .addSubstitution(
        [TokenKind.IntegerLiteral] as const,
        (data) : IntegerLiteral|DecimalLiteral => {
            const value = BigInt(data[0].value);
            if (value > BigIntUnsignedMaxValue) {
                return {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.DecimalLiteral,
                    value : data[0].value,
                }
            }
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.IntegerLiteral,
                value,
            };
        }
    );

makeCustomRule(SyntaxKind.IntegerLiteral)
    .addSubstitution(
        [TokenKind.IntegerLiteral] as const,
        (data) : IntegerLiteral => {
            const value = BigInt(data[0].value);
            const result : IntegerLiteral = {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.IntegerLiteral,
                value,
            };
            return result;
        }
    );
