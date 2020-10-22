import {Scanner} from "../scanner";
import * as util from "util";
import {parse} from "./parse";

/*
const scanner = new Scanner(`
    CREATE SCHEMA \`Test\`;
    CREATE SCHEMA \`Test2\`
`);
*/
const scanner = new Scanner(`
    CREATE SCHEMA \`Test\`;
    CREATE SCHEMA \`Test2\`;
    DELIMITER $$
    CREATE SCHEMA \`Test\`;$$
    CREATE SCHEMA \`Test2\`;
    DELIMITER ;
    CREATE SCHEMA \`Test\`;
    CREATE SCHEMA \`Test2\`;
    CREATE TABLE T (
        X BOOL,
        Y BOOL,
        Z CHAR(3) CHARACTER SET utf8mb4 COLLATE \`binary\`,
        W BOOL AUTO_INCREMENT KEY STORAGE DISK
    );
    CREATE TABLE KEY (X BOOL);
    CREATE TABLE test.KEY (X BOOL);
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
