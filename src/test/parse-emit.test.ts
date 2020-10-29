import * as assert from "assert";
import {emitSourceFile} from "../emitter";
import {testRecursive} from "./test-recursive";
import {parse} from "../nearley-prototype";

const root = `${__dirname}/../../test-fixture/parse-emit`;
suite('Should parse-emit as expected', () => {
    testRecursive(root, ({
        //fileName,
        curPath,
        raw,
    }) => {
        const [input, output, syntacticErrors] = raw.split("\n-----\n");

        const preprocessed = input;//preprocess(input, {});
        const {
            scanner,
            sourceFile : file,
        } = parse(
            "file-0",
            preprocessed,
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
