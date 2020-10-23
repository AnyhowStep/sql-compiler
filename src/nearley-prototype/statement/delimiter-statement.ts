import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {
    makeRule,
} from "../nearley-util";

makeRule(SyntaxKind.DelimiterStatement)
    .addSubstitution(
        [TokenKind.DELIMITER_STATEMENT, TokenKind.CustomDelimiter] as const,
        (data) => {
            const [identifier, customDelimiter] = data;
            return {
                start : identifier.start,
                end : customDelimiter.end,
                syntaxKind : SyntaxKind.DelimiterStatement,
                customDelimiter : customDelimiter.value,
            };
        }
    );
