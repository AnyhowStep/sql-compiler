import {BitDataType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {
    makeRule,
    optional,
} from "../nearley-util";
import {getTextRange} from "../parse-util";

makeRule(SyntaxKind.BitDataType)
    .addSubstitution(
        [
            TokenKind.BIT,
            optional(SyntaxKind.FieldLength),
        ] as const,
        (data) : BitDataType => {
            const [dataType, bits] = data;

            return {
                syntaxKind : SyntaxKind.BitDataType,
                bits : (
                    bits == undefined ?
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
                    } :
                    bits
                ),
                ...getTextRange(data),
            };
        }
    );
