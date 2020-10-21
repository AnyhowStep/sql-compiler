import * as fs from "fs";
import {emitNearleyGrammar} from "./nearley-util"

import "./my-grammar.generated";

const testers = fs
    .readFileSync(
        `${__dirname}/testers.generated.ts.txt`,
        "utf-8"
    )
    .toString();

const output = `@preprocessor typescript

@{%
import {TokenKind} from "../scanner";
//import * as util from "util";
//import {SyntaxKind, Node, NodeArray} from "../parser-node";
const parser_node_1 = require("../parser-node");
const nearley_util_1 = require("./nearley-util");

${testers}
%}

${emitNearleyGrammar()}
`;

fs.writeFileSync(
    `${__dirname}/my.generated.ne`,
    output
);
