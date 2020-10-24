import {RealDataType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {DiagnosticMessages} from "../diagnostic-messages";
import {RealPrecisionRule} from "../misc/precision";
import {
    makeRule,
} from "../nearley-util";
import {getTextRange, pushSyntacticErrorAt} from "../parse-util";
import {IntegerDataTypeModifierRule} from "./integer-data-type-modifier";

makeRule(SyntaxKind.RealDataType)
    .addSubstitution(
        [
            TokenKind.FLOAT,
            SyntaxKind.FieldLength,
            IntegerDataTypeModifierRule,
        ] as const,
        function (data) : RealDataType {
            const [, fieldLength, modifier] = data;
            const bytes = (
                fieldLength.length.value <= 24n ?
                4 :
                fieldLength.length.value <= 53n ?
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
            RealPrecisionRule,
            IntegerDataTypeModifierRule,
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
            IntegerDataTypeModifierRule,
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
