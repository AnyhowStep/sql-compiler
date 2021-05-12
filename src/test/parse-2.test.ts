import * as assert from "assert";
import {TestCase, testRecursive2} from "./test-recursive";

import * as runtime from "../grammar-runtime-3";
import {compiledGrammar} from "../mysql-grammar-2";
import {scanAll} from "../scanner-2";

const grammar = runtime.loadGrammar(compiledGrammar);

const root = process.env.PARSE ?? `${__dirname}/../../test-fixture/parse-2`;
suite("Should parse as expected", () => {
    testRecursive2(
        root,
        ({
            //fileName,
            //curPath,
            raw,
        }) => {
            const result : TestCase[] = [];
            const arr = raw.split("\n-----\n");

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
