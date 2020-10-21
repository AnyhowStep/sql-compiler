import * as fs from "fs";
import {syntaxKinds} from "./syntax-kind";

const enumElements = syntaxKinds
    .map((key, index) => `${key} = ${index + 1000},`);

const syntaxKindsStr = fs
    .readFileSync(
        `${__dirname}/syntax-kind.ts`,
        "utf-8"
    )
    .toString();

fs.writeFileSync(
    `${__dirname}/../parser-node/syntax-kind.generated.ts`,
    `export enum SyntaxKind {
    ${enumElements.join("\n    ")}
}

${syntaxKindsStr}
`
);
