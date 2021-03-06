import {TextDataType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {DiagnosticMessages} from "../diagnostic-messages";
import {CustomSyntaxKind, makeCustomRule} from "../factory";
import {getTextRange, pushSyntacticErrorAt} from "../parse-util";

makeCustomRule(SyntaxKind.TextDataType)
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6667
     */
    .addSubstitution(
        [
            TokenKind.TEXT,
            SyntaxKind.FieldLength,
            CustomSyntaxKind.CharacterDataTypeModifier,
        ] as const,
        (data) => {
            const [, fieldLength, modifier] = data;
            const result : TextDataType = {
                syntaxKind : SyntaxKind.TextDataType,
                lengthBytes : (
                    fieldLength.length.value < (BigInt(1) << BigInt(8)) ?
                    8 :
                    fieldLength.length.value < (BigInt(1) << BigInt(16)) ?
                    16 :
                    fieldLength.length.value < (BigInt(1) << BigInt(24)) ?
                    24 :
                    32
                ),
                characterSet : modifier.characterSet,
                collate : modifier.collate,
                binary : modifier.binary,
                ...getTextRange(data),
            };

            if (fieldLength.length.value >= (BigInt(1) << BigInt(32))) {
                pushSyntacticErrorAt(
                    result,
                    fieldLength.length.start,
                    fieldLength.length.end,
                    [],
                    DiagnosticMessages.InvalidTextDataTypeBytes
                );
            }

            return result;
        }
    );
