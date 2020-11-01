import {BinaryDataType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {DiagnosticMessages} from "../diagnostic-messages";
import {optional, union} from "../../nearley-wrapper";
import {getTextRange, pushSyntacticErrorAt} from "../parse-util";
import {makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.BinaryDataType)
    .addSubstitution(
        [
            union(
                TokenKind.BINARY,
                TokenKind.VARBINARY
            ),
            optional(SyntaxKind.FieldLength)
        ] as const,
        (data) : BinaryDataType => {
            const [[dataType], maxLength] = data;
            const result : BinaryDataType = {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.BinaryDataType,
                variableLength : dataType.tokenKind == TokenKind.VARBINARY,
                maxLength : (
                    maxLength ??
                    {
                        start : dataType.end,
                        end : dataType.end,
                        syntaxKind : SyntaxKind.FieldLength,
                        length : {
                            start : dataType.end,
                            end : dataType.end,
                            syntaxKind : SyntaxKind.IntegerLiteral,
                            value : BigInt(1),
                        },
                    }
                ),
            };

            if (
                result.variableLength &&
                maxLength == undefined
            ) {
                pushSyntacticErrorAt(
                    result,
                    dataType.end,
                    dataType.end,
                    [dataType],
                    DiagnosticMessages.VariableLengthBinaryDataTypeMustSpecifyFieldLength
                );
            }

            return result;
        }
    );
