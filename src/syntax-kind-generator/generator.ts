import * as fs from "fs";
import {syntaxKinds} from "./syntax-kind";

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
import {Rule} from "../grammar-builder";

export interface MySqlRuleCollection {
    ${syntaxKinds.map(syntaxKind => `${syntaxKind} : Rule`).join(",\n    ")}
}
export interface MySqlGrammar {
    tokens : string[];
    extras : string[];

    inline : string[];
    start : string;
    rules : MySqlRuleCollection;
}
`
);
