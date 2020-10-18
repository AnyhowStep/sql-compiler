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

readRecursive(`${__dirname}/../parser-node`);

const lines : string[] = [];

lines.push(`import {SyntaxKind} from "./syntax-kind.generated";`);
lines.push(`import {Node} from "./node";`);

for (const [syntaxKind, path] of syntaxKinds) {
    lines.push(`import {${syntaxKind}} from "./${path}";`);
}

lines.push(``);

for (const [syntaxKind] of syntaxKinds) {
    lines.push(
        `export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.${syntaxKind}) : node is ${syntaxKind};`
    );
}

lines.push(
`
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind) : boolean;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind) : boolean {
    return node.syntaxKind == syntaxKind;
}
`
);
lines.push(``);

lines.push(
`
interface SwitchSyntaxKind<ReturnT> {
`);

for (const [syntaxKind] of syntaxKinds) {
    lines.push(
        `    case<ResultT> (syntaxKind : SyntaxKind.${syntaxKind}, callback : (node : ${syntaxKind}) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;`
    );
}

lines.push(
`
    default<ResultT> (callback : () => ResultT) : ResultT|ReturnT;
}

export function switchSyntaxKind (node : Node) : SwitchSyntaxKind<never> {
    let matched = false;
    let returnValue : unknown = undefined;
    const switcher = {
        case : (syntaxKind : SyntaxKind, callback : (node : Node) => unknown) : SwitchSyntaxKind<any> => {
            if (matched) {
                return switcher;
            }

            if (node.syntaxKind == syntaxKind) {
                matched = true;
                returnValue = callback(node);
            }

            return switcher;
        },
        default : (callback : () => unknown) : any => {
            if (matched) {
                return returnValue;
            }

            return callback();
        }
    } as SwitchSyntaxKind<never>;
    return switcher;
}
`
);
lines.push(``);

fs.writeFileSync(`${__dirname}/../parser-node/is-syntax-kind.generated.ts`, lines.join("\n"));
