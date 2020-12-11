import {SyntaxKind, IndexClass, IndexDefinition} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const UniqueIndexDefinitionUnexpectedWithParserOption : LintRule<IndexDefinition> = {
    syntaxKind : SyntaxKind.IndexDefinition,
    onEnter : (node, lintResult) => {
        if (node.indexClass == IndexClass.FULLTEXT) {
            return;
        }
        if (node.withParser != undefined) {
            pushSyntacticErrorAt(
                lintResult,
                node.withParser.start,
                node.withParser.end,
                [],
                DiagnosticMessages.UnexpectedSyntaxKind,
                "WITH PARSER"
            );
        }
    },
}
