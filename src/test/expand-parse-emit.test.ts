import * as assert from "assert";
import {testRecursive} from "./test-recursive";
import {expandContent, findAllMacros, parse} from "../nearley-prototype";
import {emitSourceFile} from "../emitter";

const root = `${__dirname}/../../test-fixture/expand-parse-emit`;
suite('Should expand-parse-emit content as expected', () => {
    testRecursive(root, ({
        //fileName,
        curPath,
        raw,
    }) => {
        const parts = raw.split("\n-----\n");
        const inputLength = Math.floor(parts.length / 3);

        const inputFiles = parts.slice(0, inputLength);
        const expectedOutputs = parts.slice(inputLength, inputLength*2);
        const expectedSyntacticErrors = parts.slice(inputLength*2, inputLength*3);

        const preprocessedFiles = inputFiles
            .map((inputFile, index) => {
                const macros = findAllMacros(
                    `file-${index}`,
                    inputFile
                );

                for (let i=macros.length-1; i>=0; --i) {
                    const macro = macros[i];
                    inputFile = (
                        inputFile.substring(0, macro.start) +
                        " ".repeat(macro.end - macro.start) +
                        inputFile.substring(macro.end)
                    );
                }

                for (const macro of macros) {
                    assert.strictEqual(
                        JSON.stringify(macro.parameterList.syntacticErrors, null, 2),
                        undefined,
                        (
                            JSON.stringify(macro, null, 2) +
                            "\n" +
                            JSON.stringify(macro.parameterList.syntacticErrors, null, 2)
                        )
                    );
                }

                return {
                    macros,
                    inputFile,
                };
            });

        const macros = preprocessedFiles
            .map(({macros}) => macros)
            .flat(1);

        const expandedInputFiles = preprocessedFiles.map(({inputFile}, index) => {
            const result = expandContent(
                `file-${index}`,
                macros,
                inputFile
            );
            assert.strictEqual(
                JSON.stringify(result.syntacticErrors, null, 2),
                "[]",
                JSON.stringify(result, null, 2)
            )
            return result;
        });

        const parsedFiles = expandedInputFiles.map((expanded, index) => {
            return parse(
                `file-${index}`,
                expanded.expandedContent,
                {}
            );
        });

        const emittedFiles = parsedFiles.map((parsed) => {
            return emitSourceFile(parsed.sourceFile).build();
        });

        for (let i=0; i<emittedFiles.length; ++i) {
            const actualOutput = emittedFiles[i];
            const expectedOutput = expectedOutputs[i];
            let errorMessage = JSON.stringify(parsedFiles[i].sourceFile, null, 2);
            errorMessage += "\n" + curPath;

            assert.strictEqual(
                actualOutput,
                expectedOutput,
                errorMessage
            );
            const actualSyntacticErrors = parsedFiles[i].sourceFile.syntacticErrors.map(err => {
                return {
                    category : err.category,
                    messageText : err.messageText,
                    start : err.start,
                    length : err.length,
                    relatedRanges : (
                        err.relatedRanges == undefined || err.relatedRanges.length == 0 ?
                        undefined :
                        err.relatedRanges
                    ),
                };
            });
            assert.strictEqual(
                JSON.stringify(actualSyntacticErrors, null, 2) + "\n",
                expectedSyntacticErrors[i],
                errorMessage
            );
        }
    });
});
