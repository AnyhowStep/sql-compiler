import * as assert from "assert";
import {testRecursive} from "./test-recursive";
import {expandContent, findAllMacros, parse, getExpansionPath} from "../nearley-prototype";
import {emitSourceFile} from "../emitter";

let root = `${__dirname}/../../test-fixture/expand-parse-emit-get-expansion-path`;
if (process.env.EXPAND_PARSE_EMIT_GET_EXPANSION_PATH_FILE) {
    root += "/" + process.env.EXPAND_PARSE_EMIT_GET_EXPANSION_PATH_FILE;
}
suite('Should expand-parse-emit-get-expansion-path content as expected', () => {
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
                        JSON.stringify(macro.parameterList.syntacticErrors, null, 4),
                        undefined,
                        (
                            JSON.stringify(macro, null, 4) +
                            "\n" +
                            JSON.stringify(macro.parameterList.syntacticErrors, null, 4)
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
                0,
                `file-${index}`,
                macros,
                inputFile
            );
            assert.strictEqual(
                JSON.stringify(result.syntacticErrors, null, 4),
                "[]",
                JSON.stringify(result, null, 4)
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
            let errorMessage = JSON.stringify(parsedFiles[i].sourceFile, null, 4);
            errorMessage += "\n" + curPath;

            assert.strictEqual(
                actualOutput,
                expectedOutput,
                errorMessage
            );
            const rawSyntacticErrors = parsedFiles[i].sourceFile.syntacticErrors;
            const tracedSyntacticErrors = rawSyntacticErrors.map(err => {
                const expansionPath = [
                    ...getExpansionPath(
                        `file-${i}`,
                        err,
                        expandedInputFiles[i],
                        (filename) => {
                            const match = /^file-(\d+)$/.exec(filename);
                            if (match == undefined) {
                                assert.strictEqual(
                                    match,
                                    "defined",
                                    filename
                                );
                                throw new Error(`match not found`);
                            }
                            return expandedInputFiles[parseInt(match[1], 10)];
                        }
                    ),
                ].map(item => {
                    if ("macro" in item) {
                        return {
                            filename : item.filename,
                            src : {
                                start : item.macro.content.start + item.src.start,
                                end : item.macro.content.start + item.src.end,
                                parameterName : item.src.parameterName,
                            },
                        };
                    }

                    if ("macroIdentifier" in item) {
                        return {
                            filename : item.filename,
                            src : item.src,
                            macroIdentifier : item.macroIdentifier,
                        };
                    }

                    if ("value" in item) {
                        return {
                            filename : item.filename,
                            src : {
                                start : item.start,
                                end : item.end,
                            },
                            fileSrc : item.fileSrc,
                        }
                    }

                    if (typeof item.expandedContent == "string") {
                        return {
                            filename : item.filename,
                            expandedContent : item.expandedContent
                        };
                    }

                    item;
                    return undefined;
                });
                return [
                    {
                        category : err.category,
                        messageText : err.messageText,
                        start : err.start,
                        length : err.length,
                        relatedRanges : (
                            err.relatedRanges == undefined || err.relatedRanges.length == 0 ?
                            undefined :
                            err.relatedRanges
                        ),
                    },
                    ...expansionPath,
                ];
            });
            const actualSyntacticErrors = tracedSyntacticErrors;
            assert.strictEqual(
                JSON.stringify(actualSyntacticErrors, null, 4) + "\n",
                expectedSyntacticErrors[i],
                errorMessage
            );
        }
    });
});
