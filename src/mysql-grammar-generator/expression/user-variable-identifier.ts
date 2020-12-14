import {UserVariableIdentifier, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {makeCustomRule} from "../factory";
import {getTextRange} from "../parse-util";

makeCustomRule(SyntaxKind.UserVariableIdentifier)
    .addSubstitution(
        [TokenKind.UserVariableIdentifier] as const,
        (data) => {
            const result : UserVariableIdentifier = {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.UserVariableIdentifier,
                identifier : data[0].value,
                sourceText : data[0].getTokenSourceText(),
            };
            return result;
        }
    );
