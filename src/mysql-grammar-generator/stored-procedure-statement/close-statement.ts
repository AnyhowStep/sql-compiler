import {CloseStatement, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {getTextRange} from "../parse-util";
import {makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.CloseStatement)
    .addSubstitution(
        [
            TokenKind.CLOSE,
            SyntaxKind.Identifier,
        ] as const,
        (data) : CloseStatement => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CloseStatement,
                cursorName : data[1],
            };
        }
    )
