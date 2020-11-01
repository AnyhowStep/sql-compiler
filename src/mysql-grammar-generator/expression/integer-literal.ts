import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {makeCustomRule} from "../factory";
import {getTextRange} from "../parse-util";

makeCustomRule(SyntaxKind.IntegerLiteral)
    .addSubstitution(
        [TokenKind.IntegerLiteral] as const,
        (data) => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.IntegerLiteral,
                value : BigInt(data[0].value),
            };
        }
    );
