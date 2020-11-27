import * as assert from "assert";
import {testRecursive} from "./test-recursive";
import {emitSourceFile} from "../emitter";
import {parse} from "../mysql-grammar";
import {MacroPartType} from "../macro-definition-node";
import {findAllMacros} from "../macro-definition-grammar";
import {expandStringContent, getExpansionPath, ExpansionPath} from "../macro";

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
            const result = expandStringContent(
                `file-${index}`,
                macros,
                inputFile
            );
            assert.strictEqual(
                JSON.stringify(result.bindErrors, null, 4),
                "[]",
                JSON.stringify(result, null, 4)
            )
            return result;
        });

        const parsedFiles = expandedInputFiles.map((expanded, index) => {
            return parse(
                `file-${index}`,
                expanded.expandedText,
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
                function processExpansionPath (path : ExpansionPath) : {}[] {
                    return path
                        .map(item => {
                            if (item.type == MacroPartType.ParameterReference) {
                                return [
                                    ...(
                                        item.argTrace[0].type == MacroPartType.MacroCall ?
                                        processExpansionPath(item.argTrace) :
                                        []
                                    ),
                                    {
                                        filename : item.filename,
                                        src : {
                                            start : item.start,
                                            end : item.end,
                                        },
                                        parameterName : item.expandedPart.expandedPart.filePart.parameterName,
                                    },
                                ];
                            }

                            if (item.expandedPart.expandedPart.type == MacroPartType.MacroCall) {
                                return {
                                    filename : item.filename,
                                    src : {
                                        start : item.start,
                                        end : item.end,
                                    },
                                    macroIdentifier : item.expandedPart.expandedPart.expandedMacro.macro.identifier.macroName,
                                };
                            }

                            return {
                                filename : item.filename,
                                src : {
                                    start : item.start,
                                    end : item.end,
                                },
                            };
                        })
                        .flat(1);
                }
                const expansionPath = processExpansionPath(getExpansionPath(
                        err,
                        expandedInputFiles[i],
                    ),
                );
                return [
                    {
                        category : err.category,
                        messageText : err.messageText,
                        start : err.start,
                        length : err.length,
                        relatedRanges : (
                            err.relatedRanges == undefined || err.relatedRanges.length == 0 ?
                            undefined :
                            err.relatedRanges.map(r => {
                                return {
                                    ...r,
                                    messageText : undefined,
                                }
                            })
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
