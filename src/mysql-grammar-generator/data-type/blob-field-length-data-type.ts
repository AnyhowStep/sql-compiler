import {BlobDataType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {DiagnosticMessages} from "../diagnostic-messages";
import {getTextRange, pushSyntacticErrorAt} from "../parse-util";
import {makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.BlobDataType)
    .addSubstitution(
        [
            TokenKind.BLOB,
            SyntaxKind.FieldLength
        ] as const,
        (data) => {
            const [, fieldLength] = data;
            const result : BlobDataType = {
                syntaxKind : SyntaxKind.BlobDataType,
                lengthBytes : (
                    fieldLength.length.value < (1n << 8n) ?
                    8 :
                    fieldLength.length.value < (1n << 16n) ?
                    16 :
                    fieldLength.length.value < (1n << 24n) ?
                    24 :
                    32
                ),
                ...getTextRange(data),
            };

            if (fieldLength.length.value >= (1n << 32n)) {
                pushSyntacticErrorAt(
                    result,
                    fieldLength.length.start,
                    fieldLength.length.end,
                    [],
                    DiagnosticMessages.InvalidBlobDataTypeBytes
                );
            }

            return result;
        }
    );
