import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {
    makeRule,
} from "../nearley-util";

makeRule(SyntaxKind.Identifier)
    .addSubstitution(
        [TokenKind.Identifier] as const,
        ([identifier]) => {
            return {
                start : identifier.start,
                end : identifier.end,
                syntaxKind : SyntaxKind.Identifier,
                identifier : identifier.value,
                quoted : false,
            };
        }
    );
