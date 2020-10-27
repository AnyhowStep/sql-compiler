import {YearDataType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {DiagnosticMessages} from "../diagnostic-messages";
import {
    makeRule, optional,
} from "../nearley-util";
import {getTextRange, pushSyntacticErrorAt} from "../parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6566
 *
 * TODO: Implement support for `SIGNED, UNSIGNED, ZEROFILL`, even though they have no effect?
 */
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