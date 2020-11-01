import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {getTextRange} from "../parse-util";
import {makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.DateDataType)
    .addSubstitution(
        [TokenKind.DATE] as const,
        (data) => {
            return {
                syntaxKind : SyntaxKind.DateDataType,
                ...getTextRange(data),
            };
        }
    );
