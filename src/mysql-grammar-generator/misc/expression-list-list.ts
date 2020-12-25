import {ExpressionListList, ExpressionList, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {makeCustomRule} from "../factory";
import {zeroOrMore} from "../../nearley-wrapper";
import {getTextRange, toNodeArray} from "../parse-util";

makeCustomRule(SyntaxKind.ExpressionListList)
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            SyntaxKind.ExpressionList,
            zeroOrMore([
                TokenKind.Comma,
                SyntaxKind.ExpressionList,
            ] as const),
            TokenKind.CloseParentheses,
        ] as const,
        (data) : ExpressionListList => {
            const [, first, more] = data;
            const arr = more
                .flat(1)
                .filter((x) : x is ExpressionList => {
                    return "syntaxKind" in x;
                });
            return toNodeArray(
                [first, ...arr],
                SyntaxKind.ExpressionListList,
                getTextRange(data)
            );
        }
    )
