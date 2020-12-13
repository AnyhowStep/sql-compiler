import {SyntaxKind, IndexHintDefinition} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";
import {IndexHintType} from "../../../../parser-node/statement";

export const ForceIgnoreIndexHintDefinitionMustHaveNonEmptyKeyUsageList : LintRule<IndexHintDefinition> = {
    syntaxKind : SyntaxKind.IndexHintDefinition,
    onEnter : (node, lintResult) => {
        if (node.indexHintType == IndexHintType.USE) {
            return;
        }
        if (node.indexes.length == 0) {
            pushSyntacticErrorAt(
                lintResult,
                node.indexes.start,
                node.indexes.end,
                [],
                DiagnosticMessages.ForceIgnoreIndexHintDefinitionMustHaveNonEmptyKeyUsageList,
            );
        }
    },
}
