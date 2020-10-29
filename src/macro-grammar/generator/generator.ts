/**
 * Import these files so they add rules to the grammar.
 */
import "./identifier";
import "./unexpanded-content";
import "./macro-call";

import * as fs from "fs";
import {emitNearleyGrammar} from "./factory";
import {compileGrammar} from "../../nearley-wrapper";

const testers = fs
    .readFileSync(
        `${__dirname}/../../scanner-generator/testers.generated.ts.txt`,
        "utf-8"
    )
    .toString();

const output = `@preprocessor typescript

@{%
import {TokenKind, isKeyword} from "../scanner";
const scanner_1 = require("../scanner");
const parser_node_1 = require("../parser-node");
const diagnostic_messages_1 = require("../diagnostic-messages");
const parse_util_1 = require("../parse-util");

const NonPound : Tester = {
    test: x => (
        x.tokenKind != TokenKind.OpenBrace &&
        x.tokenKind != TokenKind.CloseBrace &&
        x.tokenKind != TokenKind.MacroIdentifier
    ),
    type : "NonPound",
};

const KeywordOrIdentifier : Tester = {
    test: x => x.tokenKind == TokenKind.Identifier || isKeyword(x.tokenKind),
    //Even though this could be a keyword, the intention is to use it as an identifier
    type : "Identifier",
};

${testers}
%}

${emitNearleyGrammar("UnexpandedContent")}
`;

compileGrammar(
    `${__dirname}/..`,
    () => output
);
