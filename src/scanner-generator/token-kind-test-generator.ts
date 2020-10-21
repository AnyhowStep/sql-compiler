import * as fs from "fs";
import {tokenKinds} from "./token-kind";

const testers = tokenKinds
    .map(tokenKind => {
        return `//@ts-ignore\nconst ${tokenKind} : Tester = { test: x => x.tokenKind == TokenKind.${tokenKind} };`
    })
    .join("\n");

fs.writeFileSync(
    `${__dirname}/../nearley-prototype/testers.generated.ts.txt`,
    `
interface Tester {
    test : (x : { tokenKind : TokenKind }) => boolean
}
${testers}
`
);
