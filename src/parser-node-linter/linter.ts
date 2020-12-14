import {SourceFile, Node, SyntaxKind, walk} from "../parser-node";
import {Diagnostic} from "../diagnostic";

export interface LintResult {
    syntacticErrors : Diagnostic[],
}

export interface LintRule<NodeT extends Node> {
    syntaxKind : NodeT["syntaxKind"];
    onEnter? (node : NodeT, lintResult : LintResult) : void;
    onExit? (node : NodeT, lintResult : LintResult) : void;
}

export interface Linter {
    register<NodeT extends Node> (lintRule : LintRule<NodeT>) : Linter;

    run (node : SourceFile) : LintResult;
}

export function makeLinter () : Linter {
    const lintRules = new Map<SyntaxKind, LintRule<Node>[]>();
    const linter : Linter = {
        register : <NodeT extends Node>(lintRule : LintRule<NodeT>) => {
            let arr = lintRules.get(lintRule.syntaxKind);
            if (arr == undefined) {
                arr = [];
                lintRules.set(lintRule.syntaxKind, arr);
            }
            arr.push(lintRule);
            return linter;
        },
        run : (node) : LintResult => {
            const lintResult : LintResult = {
                syntacticErrors : [],
            };
            walk(
                node,
                (node) => {
                    const arr = lintRules.get(node.syntaxKind);
                    if (arr == undefined) {
                        return;
                    }
                    for (const lintRule of arr) {
                        if (lintRule.onEnter != undefined) {
                            lintRule.onEnter(node, lintResult);
                        }
                    }
                },
                (node) => {
                    const arr = lintRules.get(node.syntaxKind);
                    if (arr == undefined) {
                        return;
                    }
                    for (const lintRule of arr) {
                        if (lintRule.onExit != undefined) {
                            lintRule.onExit(node, lintResult);
                        }
                    }
                }
            )

            /**
             * @todo Move to helper function
             */
            const filename = node.filename;
            lintResult.syntacticErrors = lintResult.syntacticErrors
                .sort((a, b) => {
                    if (a.start == b.start) {
                        return a.length - b.length;
                    }
                    return a.start - b.start;
                })
                .map((err) => {
                    if (err.relatedRanges == undefined) {
                        return err;
                    }
                    return {
                        ...err,
                        relatedRanges : err.relatedRanges.map(related => {
                            return {
                                ...related,
                                filename : (
                                    related.filename == undefined || related.filename == "" ?
                                    filename :
                                    related.filename
                                ),
                            };
                        }),
                    };
                });

            return lintResult;
        },
    };
    return linter;
}
