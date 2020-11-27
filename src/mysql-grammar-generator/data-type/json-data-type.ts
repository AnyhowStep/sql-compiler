import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {getTextRange} from "../parse-util";
import {makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.JsonDataType)
    .addSubstitution(
        [TokenKind.JSON] as const,
        (data) => {
            return {
                syntaxKind : SyntaxKind.JsonDataType,
                ...getTextRange(data),
            };
        }
    );
