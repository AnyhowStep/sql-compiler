import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {makeCustomRule} from "../factory";
import {getTextRange} from "../parse-util";

makeCustomRule(SyntaxKind.ParamMarker)
    .addSubstitution(
        [TokenKind.QuestionMark] as const,
        (data) => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.ParamMarker,
            };
        }
    );
