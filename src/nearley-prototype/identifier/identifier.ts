import {Identifier, SyntaxKind} from "../../parser-node";
import {isNonReserved, ReverseTokenKind, TokenKind} from "../../scanner";
import {DiagnosticMessages} from "../diagnostic-messages";
import {
    makeCustomRule,
    makeRule,
    TokenObj,
} from "../nearley-util";
import {getTextRange, pushSyntacticErrorAtNode} from "../parse-util";

/**
 * This is a hack, this does not actually exist as a rule but as a token
 */
const KeywordOrIdentifier = makeCustomRule<TokenObj<TokenKind>>("%KeywordOrIdentifier");

makeRule(SyntaxKind.Identifier)
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

            if (isNonReserved(tokenObj.tokenKind)) {
                return {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.Identifier,
                    identifier : tokenObj.value,
                    quoted : false,
                };
            }

            const result : Identifier = {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.Identifier,
                identifier : tokenObj.value,
                quoted : false,
            };
            pushSyntacticErrorAtNode(
                this,
                result,
                DiagnosticMessages.CannotUseReservedKeywordAsIdentifier,
                ReverseTokenKind[tokenObj.tokenKind]
            );

            return result;
        }
    );

export const IdentifierAllowReservedRule = makeCustomRule("IdentifierAllowReserved")
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
