import * as fs from "fs";
import * as builder from "../grammar-builder";
import {compiledGrammar} from "../mysql-grammar-2";

const typeScriptDeclarations = builder.generateTypeScriptDeclarations(compiledGrammar);

fs.writeFileSync(
    `${__dirname}/../mysql-grammar-2/syntax-node.generated.ts`,
    typeScriptDeclarations
);
