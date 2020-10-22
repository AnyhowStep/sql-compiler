import * as assert from "assert";
import {Scanner} from "../scanner";
import {testRecursive} from "./test-recursive";
import {parse} from "../nearley-prototype";

const root = `${__dirname}/../../test-fixture/parse`;
suite('Should parse as expected', () => {
    testRecursive(root, ({
        fileName,
        curPath,
        raw,
    }) => {
        const [input, syntacticErrors] = raw.split("\n-----\n");

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
