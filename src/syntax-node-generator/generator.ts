import * as fs from "fs";
import * as builder from "../grammar-builder";
import {compiledGrammar} from "../mysql-grammar-2";

console.time("generateTypeScriptDeclarations");
const typeScriptDeclarations = builder.generateTypeScriptDeclarations(compiledGrammar);
console.timeEnd("generateTypeScriptDeclarations");

fs.writeFileSync(
    `${__dirname}/../mysql-grammar-2/syntax-node.generated.ts`,
    typeScriptDeclarations
);
