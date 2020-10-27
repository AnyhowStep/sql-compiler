import * as fs from "fs";
import {emitNearleyGrammar} from "../../nearley-util"

import "./unexpanded-content";
import "./macro-call";

const testers = fs
    .readFileSync(
        `${__dirname}/../../testers.generated.ts.txt`,
        "utf-8"
    )
    .toString();

const output = `@preprocessor typescript

@{%
import {TokenKind, isKeyword} from "../../../scanner";
const scanner_1 = require("../../../scanner");
const parser_node_1 = require("../../../parser-node");
const diagnostic_messages_1 = require("../../diagnostic-messages");
const parse_util_1 = require("../../parse-util");

const NonPound : Tester = {
    test: x => x.tokenKind != TokenKind.Pound && x.tokenKind != TokenKind.MacroIdentifier,
    type : "Pound",
};

const KeywordOrIdentifier : Tester = {
    test: x => x.tokenKind == TokenKind.Identifier || isKeyword(x.tokenKind),
    //Even though this could be a keyword, the intention is to use it as an identifier
    type : "Identifier",
};

${testers}
%}

Start ->
    UnexpandedContent {% data => data[0] %}

${emitNearleyGrammar()}
`;

fs.writeFileSync(
    `${__dirname}/grammar.generated.ne`,
    output
);
