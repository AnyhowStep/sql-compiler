import {SyntaxKind, GrantUser} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const IdentifiedByPasswordSyntaxDeprecated : LintRule<GrantUser> = {
    syntaxKind : SyntaxKind.GrantUser,
    onEnter : (node, lintResult) => {
        if (node.identifiedByPasswordToken != undefined) {
            pushSyntacticErrorAt(
                lintResult,
                node.identifiedByPasswordToken.start,
                node.identifiedByPasswordToken.end,
                [],
                DiagnosticMessages.IdentifiedByPasswordSyntaxDeprecated,
            );
        }
    },
}
