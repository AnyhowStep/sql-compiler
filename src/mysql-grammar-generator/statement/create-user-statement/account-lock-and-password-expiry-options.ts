import {AccountLockAndPasswordExpiryOptions, PartialAccountLockAndPasswordExpiryOptions, Node, SyntaxKind} from "../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {zeroOrMore} from "../../../nearley-wrapper";
import {getTextRange, toValueNode} from "../../parse-util";
import {Diagnostic} from "../../../diagnostic";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7713
 */
makeCustomRule(SyntaxKind.AccountLockAndPasswordExpiryOptions)
    .addSubstitution(
        [
            zeroOrMore(CustomSyntaxKind.AccountLockAndPasswordExpiryOption),
        ] as const,
        (data) : AccountLockAndPasswordExpiryOptions => {
            const arr = data[0];

            const result : Omit<AccountLockAndPasswordExpiryOptions, keyof Node> = {
                accountLocked : false,
                passwordExpiry : toValueNode(
                    "DEFAULT",
                    {
                        start : -1,
                        end : -1,
                    }
                ),
            };

            const syntacticErrors : Diagnostic[] = [];

            for (const item of arr) {
                if (item.syntacticErrors != undefined && item.syntacticErrors.length > 0) {
                    syntacticErrors.push(...item.syntacticErrors);
                }
                for (const k of Object.keys(item)) {
                    if (k in result) {
                        (result as any)[k] = (item as any)[k];
                        break;
                    }
                }
            }

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AccountLockAndPasswordExpiryOptions,
                ...result,
                syntacticErrors : (
                    syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined
                ),
            };
        }
    )

makeCustomRule(SyntaxKind.PartialAccountLockAndPasswordExpiryOptions)
    .addSubstitution(
        [
            zeroOrMore(CustomSyntaxKind.AccountLockAndPasswordExpiryOption),
        ] as const,
        (data) : PartialAccountLockAndPasswordExpiryOptions => {
            const arr = data[0];

            const result : Omit<PartialAccountLockAndPasswordExpiryOptions, keyof Node> = {
                accountLocked : undefined,
                passwordExpiry : undefined,
            };

            const syntacticErrors : Diagnostic[] = [];

            for (const item of arr) {
                if (item.syntacticErrors != undefined && item.syntacticErrors.length > 0) {
                    syntacticErrors.push(...item.syntacticErrors);
                }
                for (const k of Object.keys(item)) {
                    if (k in result) {
                        (result as any)[k] = (item as any)[k];
                        break;
                    }
                }
            }

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.PartialAccountLockAndPasswordExpiryOptions,
                ...result,
                syntacticErrors : (
                    syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined
                ),
            };
        }
    )
