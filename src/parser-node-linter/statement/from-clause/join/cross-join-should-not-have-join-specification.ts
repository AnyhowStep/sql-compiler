import {JoinType, SyntaxKind, Join} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const CrossJoinShouldNotHaveJoinSpecification : LintRule<Join> = {
    syntaxKind : SyntaxKind.Join,
    onEnter : (node, lintResult) => {
        if (node.joinType.value != JoinType.CROSS) {
            return;
        }
        if (node.joinSpecification != undefined) {
            pushSyntacticErrorAt(
                lintResult,
                node.joinSpecification.start,
                node.joinSpecification.end,
                [
                    node.joinType
                ],
                DiagnosticMessages.CrossJoinShouldNotHaveJoinSpecification,
            );
        }
    },
}
