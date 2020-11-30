import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {makeCustomRule} from "../factory";
import {getTextRange} from "../parse-util";

makeCustomRule(SyntaxKind.BitLiteral)
    .addSubstitution(
        [TokenKind.BitLiteral] as const,
        (data) => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.BitLiteral,
                value : data[0].value,
                sourceText : data[0].getTokenSourceText(),
            };
        }
    );
