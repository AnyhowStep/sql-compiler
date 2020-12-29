import {SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {getTextRange, toValueNode} from "../../parse-util";
import {AccountLockAndPasswordExpiryOption} from "../../custom-data";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7723
 */
makeCustomRule(CustomSyntaxKind.AccountLockAndPasswordExpiryOption)
    .addSubstitution(
        [
            TokenKind.ACCOUNT,
            TokenKind.UNLOCK,
        ] as const,
        (data) : AccountLockAndPasswordExpiryOption => {
            return {
                ...getTextRange(data),
                accountLocked : false,
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.ACCOUNT,
            TokenKind.LOCK,
        ] as const,
        (data) : AccountLockAndPasswordExpiryOption => {
            return {
                ...getTextRange(data),
                accountLocked : true,
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.PASSWORD,
            TokenKind.EXPIRE,
        ] as const,
        (data) : AccountLockAndPasswordExpiryOption => {
            return {
                ...getTextRange(data),
                passwordExpiry : toValueNode(
                    "ON_FIRST_CONNECT",
                    getTextRange(data)
                ),
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.PASSWORD,
            TokenKind.EXPIRE,
            TokenKind.NEVER,
        ] as const,
        (data) : AccountLockAndPasswordExpiryOption => {
            return {
                ...getTextRange(data),
                passwordExpiry : toValueNode(
                    "NEVER",
                    getTextRange(data)
                ),
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.PASSWORD,
            TokenKind.EXPIRE,
            TokenKind.DEFAULT,
        ] as const,
        (data) : AccountLockAndPasswordExpiryOption => {
            return {
                ...getTextRange(data),
                passwordExpiry : toValueNode(
                    "DEFAULT",
                    getTextRange(data)
                ),
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.PASSWORD,
            TokenKind.EXPIRE,
            TokenKind.INTERVAL,
            SyntaxKind.IntegerLiteral,
            TokenKind.DAY,
        ] as const,
        (data) : AccountLockAndPasswordExpiryOption => {
            return {
                ...getTextRange(data),
                passwordExpiry : data[3],
            };
        }
    )
