import {TimeDataType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {optional} from "../../nearley-wrapper";
import {getTextRange} from "../parse-util";
import {makeCustomRule} from "../factory";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6584
 */
makeCustomRule(SyntaxKind.TimeDataType)
    .addSubstitution(
        [
            TokenKind.TIME,
            optional(SyntaxKind.FieldLength)
        ] as const,
        (data) : TimeDataType => {
            const [dataType, fractionalSecondPrecision] = data;
            const result : TimeDataType = {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.TimeDataType,
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
