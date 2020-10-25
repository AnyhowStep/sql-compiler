import {YearDataType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {DiagnosticMessages} from "../diagnostic-messages";
import {
    makeRule, optional,
} from "../nearley-util";
import {getTextRange, pushSyntacticErrorAt} from "../parse-util";

makeRule(SyntaxKind.YearDataType)
    .addSubstitution(
        [
            TokenKind.YEAR,
            optional(SyntaxKind.FieldLength)
        ] as const,
        (data) : YearDataType => {
            const [dataType, fieldLength] = data;
            const result : YearDataType = {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.YearDataType,
                fieldLength : (
                    fieldLength ??
                    {
                        start : dataType.end,
                        end : dataType.end,
                        syntaxKind : SyntaxKind.FieldLength,
                        length : {
                            start : dataType.end,
                            end : dataType.end,
                            syntaxKind : SyntaxKind.IntegerLiteral,
                            value : BigInt(4),
                        },
                    }
                ),
            };

            if (
                fieldLength != undefined &&
                fieldLength.length.value != 4n
            ) {
                pushSyntacticErrorAt(
                    result,
                    dataType.end,
                    dataType.end,
                    [dataType],
                    DiagnosticMessages.YearFieldLengthMustBe4
                );
            }

            return result;
        }
    );
