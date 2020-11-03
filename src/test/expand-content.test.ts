import * as assert from "assert";
import {testRecursive} from "./test-recursive";
import {expandContent, findAllMacros} from "../nearley-prototype";

const root = `${__dirname}/../../test-fixture/expand-content`;
suite('Should expand content as expected', () => {
    testRecursive(root, ({
        //fileName,
        curPath,
        raw,
    }) => {
        const [rawInput, output, syntacticErrors] = raw.split("\n-----\n");
        let input = rawInput;

        const macros = findAllMacros(
            "file-0",
            input
        );

        for (let i=macros.length-1; i>=0; --i) {
            const macro = macros[i];
            input = input.substring(0, macro.start) + " ".repeat(macro.end - macro.start) + input.substring(macro.end);
        }

        const expandedContent = expandContent(
            0,
            "file-0",
            macros,
            input
        );

        let errorMessage = JSON.stringify(expandedContent, null, 2);
        errorMessage += (
            "\n" + JSON.stringify({ macros }, null, 2) +
            "\n" + curPath
        );

        /*assert.strictEqual(
            JSON.stringify(
                {
                    ...expandedContent,
                    originalContent : undefined,
                    syntacticErrors : undefined,
                },
                null,
                4
            ) + "\n",
            output,
            errorMessage
        );*/

        assert.strictEqual(
            expandedContent.expandedContent.replace(/^ +$/gm, ""),
            output,
            errorMessage + (
                "\n" + JSON.stringify(rawInput) +
                "\n" + JSON.stringify(expandedContent.expandedContent.replace(/^ +$/gm, "")) +
                "\n" + JSON.stringify(output)
            )
        );

        assert.strictEqual(
            JSON.stringify(
                [
                    ...expandedContent.syntacticErrors,
                ].map(err => {
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
                }),
                null,
                4
            ) + "\n",
            syntacticErrors,
            errorMessage
        );
    });
});
