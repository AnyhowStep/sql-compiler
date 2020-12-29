import {SyntaxKind, RequiredEncryptedConnectionOptions, TextRange} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const RequiredEncryptedConnectionOptionsMustNotRepeatOption : LintRule<RequiredEncryptedConnectionOptions> = {
    syntaxKind : SyntaxKind.RequiredEncryptedConnectionOptions,
    onEnter : (node, lintResult) => {
        const seen = new Map<string, TextRange>();
        for (const location of node.optionLocations) {
            const existing = seen.get(location.value)
            if (existing == undefined) {
                seen.set(location.value, location);
                continue;
            }

            pushSyntacticErrorAt(
                lintResult,
                location.start,
                location.end,
                [existing],
                DiagnosticMessages.MustNotRepeatOption,
            );
        }
    },
}
