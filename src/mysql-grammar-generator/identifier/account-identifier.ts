import {AccountIdentifier, AccountIdentifierOrCurrentUser, SyntaxKind} from "../../parser-node";
import {optional, union} from "../../nearley-wrapper";
import {getTextRange, toValueNode} from "../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../factory";
import {TokenKind} from "../../scanner";

/**
 * These are OK,
 * ```sql
 *  CREATE DEFINER=root @localhost FUNCTION FOO () RETURNS BOOLEAN RETURN TRUE;
 *  CREATE DEFINER=root @`localhost` FUNCTION FOO () RETURNS BOOLEAN RETURN TRUE;
 *  CREATE DEFINER=root @'localhost' FUNCTION FOO () RETURNS BOOLEAN RETURN TRUE;
 *
 *  CREATE DEFINER=root @ FUNCTION FOO () RETURNS BOOLEAN RETURN TRUE;
 *  CREATE DEFINER=root @`` FUNCTION FOO () RETURNS BOOLEAN RETURN TRUE;
 * ```
 *
 * These are NOT OK,
 * ```sql
 *  CREATE DEFINER=root @ localhost FUNCTION FOO () RETURNS BOOLEAN RETURN TRUE;
 *  CREATE DEFINER=root @ `localhost` FUNCTION FOO () RETURNS BOOLEAN RETURN TRUE;
 *  CREATE DEFINER=root @ 'localhost' FUNCTION FOO () RETURNS BOOLEAN RETURN TRUE;
 *
 *  CREATE DEFINER=root @ `` FUNCTION FOO () RETURNS BOOLEAN RETURN TRUE;
 * ```
 *
 */
makeCustomRule(SyntaxKind.AccountIdentifier)
    .addSubstitution(
        [
            union(SyntaxKind.Identifier, SyntaxKind.StringLiteral),
            optional(SyntaxKind.UserVariableIdentifier),
        ] as const,
        (data) : AccountIdentifier => {
            const [userName, hostName] = data;
            if (hostName == null) {
                return {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.AccountIdentifier,
                    userName : userName[0],
                    hostName : {
                        start : userName[0].end,
                        end : userName[0].end,
                        syntaxKind : SyntaxKind.UserVariableIdentifier,
                        identifier : "%",
                        sourceText : "@'%'",
                    },
                };
            } else {
                return {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.AccountIdentifier,
                    userName : userName[0],
                    hostName : hostName,
                };
            }
        }
    );

makeCustomRule(CustomSyntaxKind.AccountIdentifierOrCurrentUser)
    .addSubstitution(
        [SyntaxKind.AccountIdentifier] as const,
        (data) : AccountIdentifierOrCurrentUser => {
            return data[0];
        }
    )
    .addSubstitution(
        [
            TokenKind.CURRENT_USER,
            optional([
                TokenKind.OpenParentheses,
                TokenKind.CloseParentheses,
            ] as const)
        ] as const,
        (data) : AccountIdentifierOrCurrentUser => {
            return toValueNode(
                "CURRENT_USER",
                getTextRange(data)
            );
        }
    )
