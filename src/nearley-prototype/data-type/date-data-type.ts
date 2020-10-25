import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {
    makeRule,
} from "../nearley-util";
import {getTextRange} from "../parse-util";

makeRule(SyntaxKind.DateDataType)
    .addSubstitution(
        [TokenKind.DATE] as const,
        (data) => {
            return {
                syntaxKind : SyntaxKind.DateDataType,
                ...getTextRange(data),
            };
        }
    );
