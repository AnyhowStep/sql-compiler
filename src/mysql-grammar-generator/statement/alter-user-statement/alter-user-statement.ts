import {AlterUserStatement, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.AlterUserStatement)
    .addSubstitution(
        [
            TokenKind.ALTER,
            TokenKind.USER,
            optional([TokenKind.IF, TokenKind.EXISTS] as const),
            SyntaxKind.AlterGrantUserList,
            optional(CustomSyntaxKind.RequiredEncryptedConnectionOptionsNoDefault),
            SyntaxKind.PartialRateLimitOptions,
            SyntaxKind.PartialAccountLockAndPasswordExpiryOptions,
        ] as const,
        (data) : AlterUserStatement => {
            const [
                ,
                ,
                ifExists,
                grantUserList,
                requiredEncryptedConnectionOptions,
                rateLimitOptions,
                accountLockAndPasswordExpiryOptions,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterUserStatement,
                ifExists : ifExists != undefined,
                grantUserList,
                requiredEncryptedConnectionOptions : (requiredEncryptedConnectionOptions ?? undefined),
                rateLimitOptions,
                accountLockAndPasswordExpiryOptions,
            }
        }
    )
