import {BitLiteral, HexLiteral, StringList, StringLiteral, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../factory";
import {zeroOrMore} from "../../nearley-wrapper";
import {getTextRange, toNodeArray} from "../parse-util";

makeCustomRule(SyntaxKind.StringList)
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            CustomSyntaxKind.TextString,
            zeroOrMore([
                TokenKind.Comma,
                CustomSyntaxKind.TextString,
            ] as const),
            TokenKind.CloseParentheses,
        ] as const,
        (data) : StringList => {
            const [, first, more] = data;
            const arr = more
                .flat(1)
                .filter((x) : x is StringLiteral|HexLiteral|BitLiteral => {
                    return "syntaxKind" in x;
                });
            return toNodeArray(
                [first, ...arr],
                SyntaxKind.StringList,
                getTextRange(data)
            );
        }
    )
