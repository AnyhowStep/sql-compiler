import {JoinType, SyntaxKind, Join} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const InnerJoinShouldHaveJoinSpecification : LintRule<Join> = {
    syntaxKind : SyntaxKind.Join,
    onEnter : (node, lintResult) => {
        if (node.joinType.value != JoinType.INNER) {
            return;
        }
        if (node.joinSpecification == undefined) {
            pushSyntacticErrorAt(
                lintResult,
                node.joinType.start,
                node.joinType.end,
                [],
                DiagnosticMessages.InnerJoinShouldHaveJoinSpecification,
            );
        }
    },
}
