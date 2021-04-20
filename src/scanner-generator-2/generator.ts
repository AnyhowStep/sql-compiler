import * as fs from "fs";
import {tokenKinds} from "./token-kind";
import {reservedKeywords, nonReservedKeywords} from "./keywords";
import {extras} from "./extras";

fs.writeFileSync(
    `${__dirname}/../mysql-grammar-2/token.generated.ts`,
    `
export const tokens = [
    ${tokenKinds.map(tokenKind => JSON.stringify(tokenKind)).join(",\n    ")}
];

export enum TokenKind {
    ${tokenKinds.map(tokenKind => `${tokenKind} = ${JSON.stringify(tokenKind)}`).join(",\n    ")}
}

export const nonReservedKeywords = [
    ${nonReservedKeywords.map(keyword => JSON.stringify(keyword)).join(",\n    ")}
];

export const extras = [
    ${extras.map(extra => `TokenKind.${extra}`).join(",\n    ")}
];
`
);

fs.writeFileSync(
    `${__dirname}/../scanner-2/token.generated.ts`,
    `
export enum TokenKind {
    ${tokenKinds.map(tokenKind => `${tokenKind} = ${JSON.stringify(tokenKind)}`).join(",\n    ")}
}

export enum ReservedKeyword {
    ${reservedKeywords.map(keyword => `${keyword} = ${JSON.stringify(keyword)}`).join(",\n    ")}
}

export enum NonReservedKeyword {
    ${nonReservedKeywords.map(keyword => `${keyword} = ${JSON.stringify(keyword)}`).join(",\n    ")}
}

export enum Extras {
    ${extras.map(extra => `${extra} = ${JSON.stringify(extra)}`).join(",\n    ")}
}
`
);
