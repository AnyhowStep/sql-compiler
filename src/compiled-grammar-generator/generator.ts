import * as fs from "fs";
import {mySqlGrammar} from "../mysql-grammar-2/grammar";
import {buildGrammar, Grammar} from "../grammar-builder";

const root = `${__dirname}/../mysql-grammar-2`;

const compiledGrammar = buildGrammar(mySqlGrammar as unknown as Grammar);
fs.writeFileSync(
    root + "/compiled-grammar.generated.ts",
    `
import {CompiledGrammar} from "../compiled-grammar";

export const compiledGrammar : CompiledGrammar = ${JSON.stringify(compiledGrammar, null, 4)};
`
);
