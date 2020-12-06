import {Identifier, NodeArray, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../factory";
import {oneOrMore, zeroOrMore} from "../../nearley-wrapper";
import {getTextRange, toNodeArray} from "../parse-util";

makeCustomRule(CustomSyntaxKind.IdentifierList)
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            SyntaxKind.Identifier,
            zeroOrMore([
                TokenKind.Comma,
                SyntaxKind.Identifier,
            ] as const),
            TokenKind.CloseParentheses,
        ] as const,
        (data) : NodeArray<Identifier> => {
            const [, first, more] = data;
            const arr = more
                .flat(1)
                .filter((x) : x is Identifier => {
                    return "syntaxKind" in x;
                });
            return toNodeArray(
                [first, ...arr],
                SyntaxKind.IdentifierList,
                getTextRange(data)
            );
        }
    )

makeCustomRule(CustomSyntaxKind.IdentifierList_2OrMore)
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            SyntaxKind.Identifier,
            oneOrMore([
                TokenKind.Comma,
                SyntaxKind.Identifier,
            ] as const),
            TokenKind.CloseParentheses,
        ] as const,
        (data) : NodeArray<Identifier> => {
            const [, first, more] = data;
            const arr = more
                .flat(1)
                .filter((x) : x is Identifier => {
                    return "syntaxKind" in x;
                });
            return toNodeArray(
                [first, ...arr],
                SyntaxKind.IdentifierList,
                getTextRange(data)
            );
        }
    )
