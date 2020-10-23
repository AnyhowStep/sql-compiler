import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {
    makeRule,
    union,
} from "../nearley-util";
import {getTextRange} from "../parse-util";

makeRule(SyntaxKind.BooleanDataType)
    .addSubstitution(
        [union(
            TokenKind.BOOL,
            TokenKind.BOOLEAN,
        )] as const,
        (data) => {
            return {
                syntaxKind : SyntaxKind.BooleanDataType,
                ...getTextRange(data),
            };
        }
    );
