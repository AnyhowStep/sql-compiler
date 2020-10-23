import {Scanner} from "../scanner";
import * as util from "util";
import {parse} from "./parse";

/*
const scanner = new Scanner(`
    CREATE SCHEMA \`Test\`;
    CREATE SCHEMA \`Test2\`
`);
*/
const scanner = new Scanner(`CREATE TABLE T (
    X INT UNIQUE KEY
);

`);
const sourceFile = parse(
    "file-0",
    scanner,
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
