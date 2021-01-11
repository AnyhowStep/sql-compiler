import {SyntaxKind, IndexClass, CreateIndexStatement} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const UniqueCreateIndexStatementUnexpectedWithParserOption_CreateIndexStatement : LintRule<CreateIndexStatement> = {
    syntaxKind : SyntaxKind.CreateIndexStatement,
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
