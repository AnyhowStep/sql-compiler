import {SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {getTextRange} from "../../parse-util";
import {RequiredEncryptedConnectionOption} from "../../custom-data";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L14372
 */
makeCustomRule(CustomSyntaxKind.RequiredEncryptedConnectionOption)
    .addSubstitution(
        [
            TokenKind.SUBJECT,
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : RequiredEncryptedConnectionOption => {
            return {
                ...getTextRange(data),
                x509Subject : data[1],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.ISSUER,
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : RequiredEncryptedConnectionOption => {
            return {
                ...getTextRange(data),
                x509Issuer : data[1],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.CIPHER,
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : RequiredEncryptedConnectionOption => {
            return {
                ...getTextRange(data),
                sslCipher : data[1],
            };
        }
    )
