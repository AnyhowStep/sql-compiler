import {SyntaxKind, AccountLockAndPasswordExpiryOptions} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const PasswordExpireInterval0DayInvalid : LintRule<AccountLockAndPasswordExpiryOptions> = {
    syntaxKind : SyntaxKind.AccountLockAndPasswordExpiryOptions,
    onEnter : (node, lintResult) => {
        if (node.passwordExpiry.syntaxKind != SyntaxKind.IntegerLiteral) {
            return;
        }
        if (node.passwordExpiry.value == BigInt(0)) {
            pushSyntacticErrorAt(
                lintResult,
                node.passwordExpiry.start,
                node.passwordExpiry.end,
                [],
                DiagnosticMessages.PasswordExpireInterval0DayInvalid,
            );
        }
    },
}
