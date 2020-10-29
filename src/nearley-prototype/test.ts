import * as util from "util";
import {parse} from "./parse";

/*
const scanner = new Scanner(`
    CREATE SCHEMA \`Test\`;
    CREATE SCHEMA \`Test2\`
`);
*/
const originalContent = `CREATE TABLE T (
    X CHAR(3.141e0)
);


`;
const sourceFile = parse(
    "file-0",
    originalContent,
    {

    }
);

console.log(util.inspect(
    sourceFile,
    {
        depth : 10,
        maxArrayLength : 100,
        colors : true,
    }
));
