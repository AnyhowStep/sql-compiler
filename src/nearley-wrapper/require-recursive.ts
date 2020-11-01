import * as fs from "fs";

export function requireRecursive (directories : readonly string[]) {
    const importPaths : string[] = [];

    function readRecursive (path : string)  {
        if (fs.statSync(path).isDirectory()) {
            const fileNames = fs.readdirSync(path);
            for (const fileName of fileNames) {
                readRecursive(`${path}/${fileName}`);
            }
            return;
        }

        const importPath = path
            .replace(".ts", "");

        importPaths.push(importPath);
    }

    for (const directory of directories) {
        readRecursive(directory);
    }

    for (const path of importPaths) {
        require(path);
    }
}
