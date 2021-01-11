import {SyntaxKind, IndexClass, CreateIndexStatement} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const FullTextAndSpatialIndexCannotSpecifyIndexType_CreateIndexStatement : LintRule<CreateIndexStatement> = {
    syntaxKind : SyntaxKind.CreateIndexStatement,
    onEnter : (node, lintResult) => {
        if (node.indexClass != IndexClass.FULLTEXT && node.indexClass != IndexClass.SPATIAL) {
            return;
        }
        if (node.indexType != undefined) {
            pushSyntacticErrorAt(
                lintResult,
                node.indexType.start,
                node.indexType.end,
                [],
                DiagnosticMessages.FullTextAndSpatialIndexCannotSpecifyIndexType
            );
        }
    },
}
