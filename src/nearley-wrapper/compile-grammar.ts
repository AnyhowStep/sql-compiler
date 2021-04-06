import * as fs from "fs";
import {exec} from "child_process";

function execAndGetString (cmd : string) : Promise<string> {
    return new Promise<string>((resolve, reject) => {
        exec(
            cmd,
            (error, stdout, stderr) => {
                if (error != undefined) {
                    reject(error);
                    return;
                }
                if (stderr != "") {
                    reject(new Error(stderr));
                    return;
                }
                resolve(stdout);
            }
        )
    });
}

export async function compileGrammar (
    outputDirectory : string,
    emitNearleyFile : () => string
) {
    const nearleyStr = emitNearleyFile();

    const grammarNePath = `${outputDirectory}/grammar.generated.ne`;
    const grammarTsPath = `${outputDirectory}/grammar.generated.ts`;
    const grammarHelperTsPath = `${outputDirectory}/grammar.helper.generated.ts`;

    fs.writeFileSync(grammarNePath, nearleyStr);

    const npmBin = (await execAndGetString("npm bin")).trim();
    const nearleyc = `${npmBin}/nearleyc`;

    await execAndGetString(`${nearleyc} ${grammarNePath} -o ${grammarTsPath}`);

    const tsStr = fs.readFileSync(grammarTsPath, "utf-8").toString();
    fs.writeFileSync(
        grammarTsPath,
        [
            `//@ts-nocheck`,
            tsStr
        ].join("\n")
    );

    fs.writeFileSync(
        grammarHelperTsPath,
        `
import * as nearley from "nearley";
import * as grammar from "./grammar.generated";

export function bindGrammar<ParserStateT> (state : ParserStateT) : nearley.Grammar {
    return nearley.Grammar.fromCompiled({
        ...grammar.default,
        ParserRules : grammar.default.ParserRules.map(rule => {
            return {
                ...rule,
                postprocess : (
                    rule.postprocess == undefined ?
                    undefined :
                    rule.postprocess.bind(state)
                ),
            }
        }),
    });
}
        `
    );

}
