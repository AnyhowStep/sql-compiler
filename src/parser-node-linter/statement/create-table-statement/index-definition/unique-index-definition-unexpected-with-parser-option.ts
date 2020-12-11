import {SyntaxKind} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";
import {IndexClass, IndexDefinition} from "../../../../parser-node/statement";

export const UniqueIndexDefinitionUnexpectedWithParserOption : LintRule<IndexDefinition> = {
    syntaxKind : SyntaxKind.IndexDefinition,
    onEnter : (node, lintResult) => {
        if (node.indexClass != IndexClass.UNIQUE) {
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
