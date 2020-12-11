import {Select, SyntaxKind} from "../../../../parser-node";
import {LintRule} from "../../../linter";
import {pushSyntacticErrorAt} from "../../../../parse-util";
import {DiagnosticMessages} from "../../../diagnostic-messages";

export const AsteriskSelectItemMustBeFirstSelectItem : LintRule<Select> = {
    syntaxKind : SyntaxKind.Select,
    onEnter : (node, lintResult) => {
        for (let i=1; i<node.selectItems.length; ++i) {
            const selectItem = node.selectItems[i];
            if (selectItem.syntaxKind == SyntaxKind.AsteriskSelectItem) {
                pushSyntacticErrorAt(
                    lintResult,
                    selectItem.start,
                    selectItem.end,
                    [],
                    DiagnosticMessages.AsteriskSelectItemMustBeFirstSelectItem
                );
            }
        }
    },
}
