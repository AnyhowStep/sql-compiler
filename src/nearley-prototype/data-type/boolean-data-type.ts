import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {
    getTextRange,
    makeRule,
    union,
} from "../nearley-util";

makeRule(SyntaxKind.BooleanDataType)
    .addSubstitution(
        [union(
            TokenKind.BOOL,
            TokenKind.BOOLEAN,
        )] as const,
        (data) => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.BooleanDataType,
            };
        }
    );
