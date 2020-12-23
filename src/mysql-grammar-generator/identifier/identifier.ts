import {Identifier, SyntaxKind} from "../../parser-node";
import {isNonReserved, ReverseTokenKind, TokenKind} from "../../scanner";
import {DiagnosticMessages} from "../diagnostic-messages";
import {TokenObj} from "../../nearley-wrapper";
import {makeRule, makeCustomRule} from "../factory";
import {getTextRange, pushSyntacticErrorAtNode} from "../parse-util";

/**
 * This is a hack, this does not actually exist as a rule but as a token
 */
const KeywordOrIdentifier = makeRule<TokenObj<TokenKind>>("%KeywordOrIdentifier");

makeCustomRule(SyntaxKind.Identifier)
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
                    identifier : tokenObj.getTokenSourceText(),
                    quoted : false,
                };
            }

            const result : Identifier = {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.Identifier,
                identifier : tokenObj.getTokenSourceText(),
                quoted : false,
            };
            pushSyntacticErrorAtNode(
                result,
                [],
                DiagnosticMessages.CannotUseReservedKeywordAsIdentifier,
                ReverseTokenKind[tokenObj.tokenKind]
            );

            return result;
        }
    );

export const IdentifierAllowReservedRule = makeRule("IdentifierAllowReserved")
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
                identifier : tokenObj.getTokenSourceText(),
                quoted : false,
            };
        }
    );
