import {RealDataType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {DiagnosticMessages} from "../diagnostic-messages";
import {getTextRange, pushSyntacticErrorAt} from "../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.RealDataType)
    .addSubstitution(
        [
            TokenKind.FLOAT,
            SyntaxKind.FieldLength,
            CustomSyntaxKind.IntegerDataTypeModifier,
        ] as const,
        function (data) : RealDataType {
            const [, fieldLength, modifier] = data;
            const bytes = (
                fieldLength.length.value <= BigInt(24) ?
                4 :
                fieldLength.length.value <= BigInt(53) ?
                8 :
                undefined
            );

            const result : RealDataType = {
                syntaxKind : SyntaxKind.RealDataType,
                bytes : bytes ?? 8,
                precision : undefined,
                ...modifier,
                ...getTextRange(data),
            };

            if (bytes == undefined) {
                pushSyntacticErrorAt(
                    result,
                    fieldLength.length.start,
                    fieldLength.length.end,
                    [],
                    DiagnosticMessages.InvalidRealDataTypePrecisionBits
                );
            }

            return result;
        }
    )
    .addSubstitution(
        [
            TokenKind.FLOAT,
            CustomSyntaxKind.RealPrecision,
            CustomSyntaxKind.IntegerDataTypeModifier,
        ] as const,
        function (data) : RealDataType {
            const [, precision, modifier] = data;

            const result : RealDataType = {
                syntaxKind : SyntaxKind.RealDataType,
                bytes : 4,
                precision,
                ...modifier,
                ...getTextRange(data),
            };

            return result;
        }
    )
    .addSubstitution(
        [
            TokenKind.FLOAT,
            CustomSyntaxKind.IntegerDataTypeModifier,
        ] as const,
        function (data) : RealDataType {
            const [, modifier] = data;

            const result : RealDataType = {
                syntaxKind : SyntaxKind.RealDataType,
                bytes : 4,
                precision : undefined,
                ...modifier,
                ...getTextRange(data),
            };

            return result;
        }
    );
