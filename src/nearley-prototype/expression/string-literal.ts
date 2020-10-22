import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {
    makeRule,
} from "../nearley-util";
import {getTextRange} from "../parse-util";

makeRule(SyntaxKind.StringLiteral)
    .addSubstitution(
        [TokenKind.StringLiteral] as const,
        (data) => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.StringLiteral,
                value : data[0].value,
                sourceText : data[0].getTokenSourceText(),
            };
        }
    );
