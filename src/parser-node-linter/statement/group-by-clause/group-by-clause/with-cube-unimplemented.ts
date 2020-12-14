import {GroupByClause, OlapOption, SyntaxKind} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const WithCubeUnimplemented : LintRule<GroupByClause> = {
    syntaxKind : SyntaxKind.GroupByClause,
    onEnter : (node, lintResult) => {
        if (node.olapOption != undefined && node.olapOption.value == OlapOption.WITH_CUBE) {
            pushSyntacticErrorAt(
                lintResult,
                node.olapOption.start,
                node.olapOption.end,
                [],
                DiagnosticMessages.WithCubeUnimplemented
            );
        }
    },
}
