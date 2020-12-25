import * as fs from "fs";

const syntaxKinds = new Map<string, string>();

function readRecursive (path : string) {
    if (fs.statSync(path).isDirectory()) {
        const names = fs.readdirSync(path);
        for (const name of names) {
            readRecursive(`${path}/${name}`);
        }
        return;
    }

    if (!path.endsWith(".ts")) {
        return;
    }
    const raw = fs.readFileSync(path, "utf-8").toString();

    {
        const regex = /export\s+interface\s+\w+\s+.+?\{[^}]+?syntaxKind\s*\:\s*SyntaxKind\.(\w+)(?:.|\n)+?\}/gm;

        while (true) {
            const m = regex.exec(raw);
            if (m == undefined) {
                break;
            }
            syntaxKinds.set(
                m[1],
                path
                    .replace(`${__dirname}/../parser-node/`, "")
                    .replace(/\.ts$/, "")
            );
        }
    }

    {
        const regex = /export\s+interface\s+\w+\s+extends\s+NodeArray2<\s*SyntaxKind\.(\w+)/gm;

        while (true) {
            const m = regex.exec(raw);
            if (m == undefined) {
                break;
            }
            syntaxKinds.set(
                m[1],
                path
                    .replace(`${__dirname}/../parser-node/`, "")
                    .replace(/\.ts$/, "")
            );
        }
    }
}

readRecursive(`${__dirname}/../parser-node`);

const imports = [...syntaxKinds.keys()]
    .map((syntaxKind) => `    ${syntaxKind},`)
    .join("\n");

const elements = [...syntaxKinds.keys()]
    .map((syntaxKind) => `    [SyntaxKind.${syntaxKind}] : ${syntaxKind};`)
    .join("\n");

fs.writeFileSync(
    `${__dirname}/../mysql-grammar-generator/syntax-kind-to-node.generated.ts`,
    `
import {
    SyntaxKind,
${imports}
} from "../parser-node";

export type SyntaxKindToNode = {
${elements}
} & Record<SyntaxKind, unknown>;
`
);

fs.writeFileSync(
    `${__dirname}/../mysql-grammar-generator/syntax-kind-to-node.generated.ts`,
    `
import {
    SyntaxKind,
${imports}
} from "../parser-node";

export type SyntaxKindToNode = {
${elements}
} & Record<SyntaxKind, unknown>;
`
);
