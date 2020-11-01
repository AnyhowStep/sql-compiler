import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {makeCustomRule} from "../factory";
import {getTextRange} from "../parse-util";

makeCustomRule(SyntaxKind.DecimalLiteral)
    .addSubstitution(
        [TokenKind.DecimalLiteral] as const,
        (data) => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.DecimalLiteral,
                value : data[0].value,
            };
        }
    );
