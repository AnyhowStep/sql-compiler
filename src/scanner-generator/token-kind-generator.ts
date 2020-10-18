import * as fs from "fs";
import {tokenKinds} from "./token-kind";

const enumElements = tokenKinds
    .map((key, index) => `${key} = ${index},`);

const keywordsStr = [
    `${__dirname}/non-reserved-keyword.ts`,
    `${__dirname}/reserved-keyword.ts`,
]
    .map(path => {
        return fs
            .readFileSync(
                path,
                "utf-8"
            )
            .toString()
    })
    .join("\n");

const tokenKindsStr = fs
    .readFileSync(
        `${__dirname}/token-kind.ts`,
        "utf-8"
    )
    .toString()
    .split("\n")
    .filter((_line, index) => index >= 2)
    .join("\n");

fs.writeFileSync(
    `${__dirname}/../scanner/token-kind.generated.ts`,
    `export enum TokenKind {
    ${enumElements.join("\n    ")}
}

${keywordsStr}

${tokenKindsStr}
`
);
