import {TokenObj} from "../nearley-wrapper";
import {TokenKind} from "../scanner";
import {Identifier, SyntaxKind} from "../parser-node";
import {makeRule, makeCustomRule} from "./factory";
import {getTextRange} from "../parse-util";
/**
 * This is a hack, this does not actually exist as a rule but as a token
 */
const KeywordOrIdentifier = makeRule<TokenObj<TokenKind>>("%KeywordOrIdentifier");

makeCustomRule<SyntaxKind.Identifier>(SyntaxKind.Identifier)
    .addSubstitution(
        [KeywordOrIdentifier] as const,
        function (data) : Identifier {
            const [tokenObj] = data;
            if (data[0].tokenKind == TokenKind.Identifier) {
                const sourceText = tokenObj.getTokenSourceText();
                return {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.Identifier,
                    identifier : tokenObj.value,
                    quoted : sourceText[0] == "`" || sourceText[0] == "\"",
                };
            }

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.Identifier,
                identifier : tokenObj.value,
                quoted : false,
            };
        }
    );
