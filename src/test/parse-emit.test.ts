import * as assert from "assert";
import {emitSourceFile} from "../emitter";
import {parse} from "../parser";
import {Scanner} from "../scanner";
import {testRecursive} from "./test-recursive";

const root = `${__dirname}/../../test-fixture/parse-emit`;
suite('Should parse-emit as expected', () => {
    testRecursive(root, ({
        fileName,
        curPath,
        raw,
    }) => {
        const [input, output, syntacticErrors] = raw.split("\n-----\n");

        const preprocessed = input;//preprocess(input, {});
        const scanner = new Scanner(preprocessed);
        const file = parse(
            fileName,
            scanner,
            {}
        );

        let errorMessage = JSON.stringify(file, null, 2);
        errorMessage += (
            "\n" + curPath
        );

        //removeUnnecessaryParenthesesRecursively(file);

        assert.strictEqual(emitSourceFile(file).build(), output, errorMessage);

        assert.strictEqual(
            JSON.stringify(
                [
                    ...file.syntacticErrors,
                    ...scanner.getSyntacticErrors(),
                ].map(err => {
                    return {
                        category : err.category,
                        messageText : err.messageText,
                        start : err.start,
                        length : err.length,
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
