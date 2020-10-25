import {TimestampDataType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {
    makeRule, optional,
} from "../nearley-util";
import {getTextRange} from "../parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6589
 */
makeRule(SyntaxKind.TimestampDataType)
    .addSubstitution(
        [
            TokenKind.TIMESTAMP,
            optional(SyntaxKind.FieldLength)
        ] as const,
        (data) : TimestampDataType => {
            const [dataType, fractionalSecondPrecision] = data;
            const result : TimestampDataType = {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.TimestampDataType,
                fractionalSecondPrecision : (
                    fractionalSecondPrecision ??
                    {
                        start : dataType.end,
                        end : dataType.end,
                        syntaxKind : SyntaxKind.FieldLength,
                        length : {
                            start : dataType.end,
                            end : dataType.end,
                            syntaxKind : SyntaxKind.IntegerLiteral,
                            value : BigInt(0),
                        },
                    }
                ),
            };

            return result;
        }
    );
