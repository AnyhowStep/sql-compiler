import {Identifier, SyntaxKind} from "../../parser-node";
import {isNonReserved, ReverseTokenKind, TokenKind} from "../../scanner";
import {DiagnosticMessages} from "../diagnostic-messages";
import {CustomSyntaxKind, makeCustomRule} from "../factory";
import {getTextRange, pushSyntacticErrorAtNode} from "../parse-util";

makeCustomRule(SyntaxKind.Identifier)
    .addSubstitution(
        [CustomSyntaxKind["%KeywordOrIdentifier"]] as const,
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

makeCustomRule(CustomSyntaxKind.IdentifierAllowReserved)
    .addSubstitution(
        [CustomSyntaxKind["%KeywordOrIdentifier"]] as const,
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
