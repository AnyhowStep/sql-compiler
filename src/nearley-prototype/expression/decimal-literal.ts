import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {
    makeRule,
} from "../nearley-util";
import {getTextRange} from "../parse-util";

makeRule(SyntaxKind.DecimalLiteral)
    .addSubstitution(
        [TokenKind.DecimalLiteral] as const,
        (data) => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.DecimalLiteral,
                value : data[0].value,
            };
        }
    );
