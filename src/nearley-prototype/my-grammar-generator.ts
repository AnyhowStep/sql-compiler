import * as fs from "fs";

let lastImport : string = "";
const importPaths : string[] = [];

function readRecursive (path : string)  {
    if (fs.statSync(path).isDirectory()) {
        const fileNames = fs.readdirSync(path);
        for (const fileName of fileNames) {
            readRecursive(`${path}/${fileName}`);
        }
        return;
    }

    const importPath = (
        "./" +
        path
            .replace(`${__dirname}/`, "")
            .replace(".ts", "")
    );

    if (importPath.endsWith("/source-file-lite")) {
        lastImport = importPath;
    } else {
        importPaths.push(importPath);
    }
}

readRecursive(`${__dirname}/data-type`);
readRecursive(`${__dirname}/expression`);
readRecursive(`${__dirname}/identifier`);
readRecursive(`${__dirname}/misc`);
readRecursive(`${__dirname}/statement`);

const output = [...importPaths, lastImport]
    .map(importPath => `import ${JSON.stringify(importPath)};`)
    .join("\n");

fs.writeFileSync(
    `${__dirname}/my-grammar.generated.ts`,
    output
);
