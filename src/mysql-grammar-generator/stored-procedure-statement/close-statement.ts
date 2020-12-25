import {CloseStatement, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {getTextRange} from "../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.CloseStatement)
    .addSubstitution(
        [
            TokenKind.CLOSE,
            CustomSyntaxKind.LabelIdentifier,
        ] as const,
        (data) : CloseStatement => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CloseStatement,
                cursorName : data[1],
            };
        }
    )
