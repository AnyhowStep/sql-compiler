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
                    fieldLength.length.value < (BigInt(1) << BigInt(8)) ?
                    8 :
                    fieldLength.length.value < (BigInt(1) << BigInt(16)) ?
                    16 :
                    fieldLength.length.value < (BigInt(1) << BigInt(24)) ?
                    24 :
                    32
                ),
                ...getTextRange(data),
            };

            if (fieldLength.length.value >= (BigInt(1) << BigInt(32))) {
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
