import {CreateUserStatement, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.CreateUserStatement)
    .addSubstitution(
        [
            TokenKind.CREATE,
            TokenKind.USER,
            optional([TokenKind.IF, TokenKind.NOT, TokenKind.EXISTS] as const),
            SyntaxKind.GrantUserList,
            CustomSyntaxKind.RequiredEncryptedConnectionOptions2,
            SyntaxKind.RateLimitOptions,
            SyntaxKind.AccountLockAndPasswordExpiryOptions,
        ] as const,
        (data) : CreateUserStatement => {
            const [
                ,
                ,
                ifNotExists,
                grantUserList,
                requiredEncryptedConnectionOptions,
                rateLimitOptions,
                accountLockAndPasswordExpiryOptions,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CreateUserStatement,
                ifNotExists : ifNotExists != undefined,
                grantUserList,
                requiredEncryptedConnectionOptions,
                rateLimitOptions,
                accountLockAndPasswordExpiryOptions,
            }
        }
    )
