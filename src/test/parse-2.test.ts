import * as fs from "fs";
import * as assert from "assert";
import {TestCase, testRecursive2} from "./test-recursive";

import * as runtime from "../grammar-runtime-3";
import {compiledGrammar} from "../mysql-grammar-2";
import {scanAll} from "../scanner-2";
import {CompiledRule} from "../compiled-grammar";

const grammar = runtime.loadGrammar(compiledGrammar);

const root = process.env.PARSE ?? `${__dirname}/../../test-fixture/parse-2`;
suite("Should parse as expected", () => {
    const coverage = new Map<number, number>();

    function addCoverage (ruleRunTimeId : number) {
        const count = coverage.get(ruleRunTimeId);
        if (count == undefined) {
            coverage.set(ruleRunTimeId, 1);
        } else {
            coverage.set(ruleRunTimeId, count + 1);
        }
    }

    function calculateCoverage (state : runtime.MyState, countState : boolean=true) {
        if (countState) {
            addCoverage(state.rule.runTimeId);
        }
        for (const [pushEdge, completeEdges] of state.pushEdge) {
            calculateCoverage(pushEdge, false);
            for (const completeEdge of completeEdges) {
                calculateCoverage(completeEdge, true);
            }
        }
    }

    suiteTeardown(() => {
        const coveredRules : {
            rule : CompiledRule,
            coverageCount : number,
        }[] = [];

        const uncoveredRules : CompiledRule[] = [];

        for (let i=0; i<compiledGrammar.rules.length; ++i) {
            const rule = compiledGrammar.rules[i];
            const ruleRunTimeId = i+1;
            const coverageCount = coverage.get(ruleRunTimeId) ?? 0;

            if (coverageCount > 0) {
                coveredRules.push({
                    rule,
                    coverageCount,
                });
            } else {
                uncoveredRules.push(rule);
            }
        }

        const report = {
            coveredCount : coveredRules.length,
            uncoveredCount : uncoveredRules.length,
            totalCount : compiledGrammar.rules.length,
            coveredRatio : coveredRules.length/compiledGrammar.rules.length,
            uncoveredRatio : uncoveredRules.length/compiledGrammar.rules.length,

            uncoveredRules,
            coveredRules,
        };
        fs.writeFileSync(
            `${__dirname}/../../rule-coverage.json`,
            JSON.stringify(report, null, 2)
        );
    });

    testRecursive2(
        root,
        ({
            //fileName,
            curPath,
            raw,
        }) => {
            const result : TestCase[] = [];
            const arr = raw.split("\n-----\n");
            if (arr.length%2 != 0) {
                console.error(curPath);
            }

            let line = 1;

            for (let i=0; i<arr.length; i+=2) {
                line += 2;
                line += arr[i].match(/\n/g)?.length ?? 0;
                result.push({
                    input : arr[i],
                    expected : arr[i+1],
                    line,
                });
                line += 2;
                line += arr[i+1].match(/\n/g)?.length ?? 0;
            }

            return result;
        },
        ({input, expected}) => {
            if (input.startsWith("`")) {
                input = input
                    .split("\n")
                    .map(line => line.substring(1, line.length-1))
                    .join("\n");
            }
            const tokens = scanAll({}, input)
                /*.filter(t => ![
                    "WhiteSpace",
                    "SingleLineComment",
                    "MultiLineComment",
                    "ExecutionComment",
                    "LineBreak",
                ].includes(t.tokenKind))*/;

            const resultStates = runtime.parse(grammar, tokens);
            for (const state of resultStates) {
                calculateCoverage(state);
            }
            const results = resultStates.map(state => state.data);
            // const results = [runtime.parse(grammar, tokens)]
            //     .map(state => state.data);

            const actual = results
                .map(result => runtime.toString2(result))
                .join("\n\n") + "\n";

            if (expected.startsWith("`")) {
                assert.strictEqual(
                    results.length,
                    1,
                    [
                        "",
                        actual,
                    ].join("\n")
                );

                const actual0 = runtime.toString2(results[0]) + "\n";

                const expectedLines = expected
                    .split("\n")
                    .map(line => line.substring(1, line.length-1));

                for (const expectedLine of expectedLines) {
                    assert.strictEqual(
                        actual0.includes(expectedLine),
                        true,
                        [
                            "",
                            expectedLine,
                            "===",
                            actual,
                        ].join("\n")
                    );
                }
            } else {
                assert.strictEqual(
                    actual,
                    expected,
                    [
                        "",
                        actual,
                    ].join("\n")
                );
            }
        }
    );
});
