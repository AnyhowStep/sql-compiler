import {SyntaxKind, PrimaryKeyDefinition} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const PrimaryKeyDefinitionUnexpectedWithParserOption : LintRule<PrimaryKeyDefinition> = {
    syntaxKind : SyntaxKind.PrimaryKeyDefinition,
    onEnter : (node, lintResult) => {
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
