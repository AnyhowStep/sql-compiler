import * as fs from "fs";
import {emitNearleyGrammar} from "./factory";
import {compileGrammar, requireRecursive} from "../nearley-wrapper";

requireRecursive([
    `${__dirname}/data-type`,
    `${__dirname}/expression`,
    `${__dirname}/identifier`,
    `${__dirname}/misc`,
    `${__dirname}/statement`,
]);

const testers = fs
    .readFileSync(
        `${__dirname}/../scanner-generator/testers.generated.ts.txt`,
        "utf-8"
    )
    .toString();

const output = `@preprocessor typescript

@{%
import {TokenKind, isKeyword} from "../scanner";
const scanner_1 = require("../scanner");
const parser_node_1 = require("../parser-node");
const diagnostic_messages_1 = require("./diagnostic-messages");
const parse_util_1 = require("./parse-util");
const constants_1 = require("./constants");

const KeywordOrIdentifier : Tester = {
    test: x => x.tokenKind == TokenKind.Identifier || isKeyword(x.tokenKind),
    //Even though this could be a keyword, the intention is to use it as an identifier
    type : "Identifier",
};

const NowToken : Tester = {
    test: x => x.tokenKind == TokenKind.Identifier && x.getTokenSourceText().toUpperCase() == "NOW",
    type : "NOW",
};

${testers}
%}

${emitNearleyGrammar("SourceFileLite")}
`;

compileGrammar(
    `${__dirname}/../mysql-grammar`,
    () => output
);
