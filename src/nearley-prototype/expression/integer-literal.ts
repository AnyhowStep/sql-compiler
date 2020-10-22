import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {
    makeRule,
} from "../nearley-util";
import {getTextRange} from "../parse-util";

makeRule(SyntaxKind.IntegerLiteral)
    .addSubstitution(
        [TokenKind.IntegerLiteral] as const,
        (data) => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.IntegerLiteral,
                value : BigInt(data[0].value),
            };
        }
    );
