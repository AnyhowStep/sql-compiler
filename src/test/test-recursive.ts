import * as fs from "fs";

(BigInt.prototype as any).toJSON = function () {
    return this.toString();
}

export interface CallbackArgs {
    fileName : string,
    curPath : string,
    raw : string,
}
export function testRecursive (dir : string, callback : (args : CallbackArgs) => void) {
    const fileNames = fs.readdirSync(dir);

    for (const fileName of fileNames) {
        const curPath = `${dir}/${fileName}`;

        if (curPath.endsWith(".todo")) {
            test.skip(curPath, () => {});
            continue;
        }

        if (fs.lstatSync(curPath).isDirectory()) {
            testRecursive(curPath, callback);
            continue;
        }
        test(curPath, () => {
            const raw = fs.readFileSync(curPath, "utf-8").toString();
            callback({
                fileName,
                curPath,
                raw,
            });
        });
    }
}
