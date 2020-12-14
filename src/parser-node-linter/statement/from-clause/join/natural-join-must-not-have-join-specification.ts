import {SyntaxKind, Join} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";
import {JoinType} from "../../../../parser-node/statement";

export const NaturalJoinMustNotHaveJoinSpecification : LintRule<Join> = {
    syntaxKind : SyntaxKind.Join,
    onEnter : (node, lintResult) => {
        if (node.joinType.value != JoinType.NATURAL_INNER) {
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
