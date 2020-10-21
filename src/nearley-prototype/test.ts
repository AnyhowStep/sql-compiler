import {CharacterCodes, ReverseTokenKind, Scanner, TokenKind} from "../scanner";
import * as util from "util";
import * as nearley from "nearley";
import grammar from "./my.generated";

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
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
`);
const arr : any[] = [];
while (true) {
    const token = scanner.next();
    if (token == TokenKind.EndOfFile) {
        break;
    }
    if (token == TokenKind.Identifier) {
        const sourceText = scanner.getTokenSourceText().toUpperCase();
        if (
            sourceText == "DELIMITER" &&
            scanner.charCodeAt(scanner.getIndex()) == CharacterCodes.space
        ) {
            const customDelimiter = scanner.scanDelimiter();
            arr.push({
                tokenKind : TokenKind.HackedDelimiterKeyword,
                value : scanner.getTokenSourceText(),
                start : scanner.getTokenIndex(),
                end : scanner.getIndex(),
            });
            arr.push({
                tokenKind : TokenKind.CustomDelimiter,
                value : (
                    customDelimiter == undefined ?
                    ";" :
                    customDelimiter
                ),
                start : scanner.getTokenIndex(),
                end : scanner.getIndex(),
            });
            continue;
        }
    }
    arr.push({
        tokenKind : token,
        value : (
            token == TokenKind.Identifier ?
            scanner.getTokenValue() :
            token == TokenKind.CustomDelimiter ?
            scanner.getTokenValue() :
            ReverseTokenKind[token]
        ),
        start : scanner.getTokenIndex(),
        end : scanner.getIndex(),
    });
}

parser.feed(arr as any);

console.log(util.inspect(
    parser.results[0],
    {
        depth : 10,
        maxArrayLength : 100,
        colors : true,
    }
));

console.log(parser.results.length, "results");
