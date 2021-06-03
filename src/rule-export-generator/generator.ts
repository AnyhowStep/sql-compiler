import * as fs from "fs";

function getFilesRecursive (directory : string, result : string[]) : string[] {
    const paths = fs.readdirSync(directory);
    for (const path of paths) {
        const fullPath = directory + "/" + path;
        if (path.endsWith(".ts")) {
            result.push(fullPath);
        } else if (fs.statSync(fullPath).isDirectory()) {
            getFilesRecursive(fullPath, result);
        }
    }
    return result;
}

const root = `${__dirname}/../mysql-grammar-2`;
const directoryPaths = [
    "data-type",
    "expression",
    "identifier",
    "misc",
    "statement",
];

const filePaths : string[] = [];

for (const directoryPath of directoryPaths) {
    getFilesRecursive(root + "/" + directoryPath, filePaths);
}

const code = filePaths
    .map(path => path
        .replace(root, ".")
        .replace(".ts", "")
    )
    .map(path => `export * from "${path}";`)
    .join("\n") + "\n";

fs.writeFileSync(root + "/rules.generated.ts", code);
