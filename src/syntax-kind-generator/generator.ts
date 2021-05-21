import * as fs from "fs";
import {syntaxKinds} from "./syntax-kind";

//import * as builder from "../grammar-builder";
//import {compiledGrammar} from "../mysql-grammar-2";

//const typeScriptDeclarations = builder.generateTypeScriptDeclarations(compiledGrammar);
/*
fs.writeFileSync(
    `${__dirname}/../mysql-grammar-2/syntax-node.generated.ts`,
    typeScriptDeclarations
);
*/
fs.writeFileSync(
    `${__dirname}/../mysql-grammar-2/syntax-kind.generated.ts`,
    `
export enum SyntaxKind {
    ${syntaxKinds.map(syntaxKind => `${syntaxKind} = ${JSON.stringify(syntaxKind)}`).join(",\n    ")}
}
`
);

fs.writeFileSync(
    `${__dirname}/../mysql-grammar-2/mysql-grammar.generated.ts`,
    `
import {Rule, TopLevelRuleModifier, GrammarConfig} from "../grammar-builder";

export interface MySqlRuleCollection {
    ${syntaxKinds.map(syntaxKind => `${syntaxKind} : Rule|TopLevelRuleModifier`).join(",\n    ")}
}
export interface MySqlGrammar extends GrammarConfig {
    rules : MySqlRuleCollection;
}
`
);
