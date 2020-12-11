import * as rules from "./rules";
import {Linter, LintRule} from "./linter";
import {Node} from "../parser-node";

export function registerAllRules (
    linter : Linter
) {
    const arr : LintRule<Node>[] = Object.values(rules);
    for (const lintRule of arr) {
        linter.register(lintRule);
    }
}
