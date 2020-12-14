import * as fs from "fs";
import * as path from "path";

(BigInt.prototype as any).toJSON = function () {
    return this.toString();
}

export interface CallbackArgs {
    fileName : string,
    curPath : string,
    raw : string,
}
export function testRecursive (dirOrPath : string, callback : (args : CallbackArgs) => void) {
    if (fs.lstatSync(dirOrPath).isDirectory()) {
        const fileNames = fs.readdirSync(dirOrPath);

        for (const fileName of fileNames) {
            const curPath = `${dirOrPath}/${fileName}`;

            if (curPath.endsWith(".todo")) {
                test.skip(curPath, () => {});
                continue;
            }
            testRecursive(curPath, callback);
        }
    } else {
        const curPath = dirOrPath;
        test(curPath, function () {
            const raw = fs.readFileSync(curPath, "utf-8").toString();
            const timeoutMatch = /timeout\s+(\d+)/.exec(raw);
            if (timeoutMatch != undefined) {
                this.timeout(parseInt(timeoutMatch[1]));
            }
            callback({
                fileName : path.basename(dirOrPath),
                curPath,
                raw,
            });
        });
    }
}
