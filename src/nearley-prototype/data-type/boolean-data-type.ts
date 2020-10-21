import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {
    makeRule,
} from "../nearley-util";

makeRule(SyntaxKind.BooleanDataType)
    .addSubstitution(
        [TokenKind.BOOL] as const,
        ([token]) => {
            return {
                start : token.start,
                end : token.end,
                syntaxKind : SyntaxKind.BooleanDataType,
            };
        }
    )
    .addSubstitution(
        [TokenKind.BOOLEAN] as const,
        ([token]) => {
            return {
                start : token.start,
                end : token.end,
                syntaxKind : SyntaxKind.BooleanDataType,
            };
        }
    );
