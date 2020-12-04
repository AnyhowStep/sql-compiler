import {DecimalDataType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {DiagnosticMessages} from "../diagnostic-messages";
import {getTextRange, pushSyntacticErrorAt} from "../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../factory";
import {union} from "../../nearley-wrapper";

makeCustomRule(SyntaxKind.DecimalDataType)
    .addSubstitution(
        [
            union(
                TokenKind.DECIMAL,
                TokenKind.DEC,
                TokenKind.NUMERIC,
                TokenKind.FIXED,
            ),
            SyntaxKind.FieldLength,
            CustomSyntaxKind.IntegerDataTypeModifier,
        ] as const,
        function (data) : DecimalDataType {
            const [, fieldLength, modifier] = data;

            const result : DecimalDataType = {
                syntaxKind : SyntaxKind.DecimalDataType,
                precision : {
                    syntaxKind : SyntaxKind.Precision,
                    start : fieldLength.start,
                    end : fieldLength.end,
                    precision : fieldLength.length,
                    scale : {
                        syntaxKind : SyntaxKind.IntegerLiteral,
                        start : fieldLength.length.end,
                        end : fieldLength.length.end,
                        value : BigInt(0),
                    },
                },
                ...modifier,
                ...getTextRange(data),
            };

            if (fieldLength.length.value > BigInt(65)) {
                pushSyntacticErrorAt(
                    result,
                    fieldLength.length.start,
                    fieldLength.length.end,
                    [],
                    DiagnosticMessages.DecimalPrecisionTooHigh
                );
            }

            return result;
        }
    )
    .addSubstitution(
        [
            union(
                TokenKind.DECIMAL,
                TokenKind.DEC,
                TokenKind.NUMERIC,
                TokenKind.FIXED,
            ),
            CustomSyntaxKind.DecimalPrecision,
            CustomSyntaxKind.IntegerDataTypeModifier,
        ] as const,
        function (data) : DecimalDataType {
            const [, precision, modifier] = data;

            const result : DecimalDataType = {
                syntaxKind : SyntaxKind.DecimalDataType,
                precision,
                ...modifier,
                ...getTextRange(data),
            };

            return result;
        }
    )
    .addSubstitution(
        [
            union(
                TokenKind.DECIMAL,
                TokenKind.DEC,
                TokenKind.NUMERIC,
                TokenKind.FIXED,
            ),
            CustomSyntaxKind.IntegerDataTypeModifier,
        ] as const,
        function (data) : DecimalDataType {
            const [, modifier] = data;

            const dataTextRange = getTextRange(data);

            const result : DecimalDataType = {
                syntaxKind : SyntaxKind.DecimalDataType,
                precision : {
                    syntaxKind : SyntaxKind.Precision,
                    start : dataTextRange.end,
                    end : dataTextRange.end,
                    /**
                     * https://dev.mysql.com/doc/refman/5.7/en/fixed-point-types.html
                     *
                     * the syntax DECIMAL is equivalent to DECIMAL(M,0),
                     * where the implementation is permitted to decide the value of M.
                     * MySQL supports both of these variant forms of DECIMAL syntax.
                     * The default value of M is 10.
                     */
                    precision : {
                        syntaxKind : SyntaxKind.IntegerLiteral,
                        start : dataTextRange.end,
                        end : dataTextRange.end,
                        value : BigInt(10),
                    },
                    scale : {
                        syntaxKind : SyntaxKind.IntegerLiteral,
                        start : dataTextRange.end,
                        end : dataTextRange.end,
                        value : BigInt(0),
                    },
                },
                ...modifier,
                ...getTextRange(data),
            };

            return result;
        }
    );
