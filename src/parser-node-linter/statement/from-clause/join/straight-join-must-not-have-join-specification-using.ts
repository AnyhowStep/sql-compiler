import {JoinType, SyntaxKind, Join} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const StraightJoinMustNotHaveJoinSpecificationUsing : LintRule<Join> = {
    syntaxKind : SyntaxKind.Join,
    onEnter : (node, lintResult) => {
        if (node.joinType.value != JoinType.STRAIGHT) {
            return;
        }
        if (
            node.joinSpecification != undefined &&
            node.joinSpecification.syntaxKind == SyntaxKind.JoinSpecificationUsing
        ) {
            pushSyntacticErrorAt(
                lintResult,
                node.joinSpecification.start,
                node.joinSpecification.end,
                [
                    node.joinType
                ],
                DiagnosticMessages.StraightJoinMustNotHaveJoinSpecificationUsing,
            );
        }
    },
}
