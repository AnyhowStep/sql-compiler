import {SyntaxKind, AlterGrantUser} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const AlterGrantUserIdentifiedByPasswordSyntaxDeprecated : LintRule<AlterGrantUser> = {
    syntaxKind : SyntaxKind.AlterGrantUser,
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
