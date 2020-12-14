import {JoinType, SyntaxKind, Join} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const NaturalJoinMustNotHaveJoinSpecification : LintRule<Join> = {
    syntaxKind : SyntaxKind.Join,
    onEnter : (node, lintResult) => {
        if (
            node.joinType.value != JoinType.NATURAL_INNER &&
            node.joinType.value != JoinType.NATURAL_LEFT &&
            node.joinType.value != JoinType.NATURAL_RIGHT
        ) {
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
                DiagnosticMessages.NaturalJoinMustNotHaveJoinSpecification,
            );
        }
    },
}
