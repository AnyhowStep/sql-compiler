import {RealLiteral, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {makeCustomRule} from "../factory";
import {getTextRange} from "../parse-util";

makeCustomRule(SyntaxKind.RealLiteral)
    .addSubstitution(
        [TokenKind.RealLiteral] as const,
        (data) => {
            const result : RealLiteral = {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.RealLiteral,
                value : parseFloat(data[0].value),
                sourceText : data[0].value,
            };
            return result;
        }
    );
