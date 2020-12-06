import {Expression, NodeArray, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../factory";
import {zeroOrMore} from "../../nearley-wrapper";
import {getTextRange, toNodeArray} from "../parse-util";

makeCustomRule(CustomSyntaxKind.ExpressionList)
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            CustomSyntaxKind.Expression,
            zeroOrMore([
                TokenKind.Comma,
                CustomSyntaxKind.Expression,
            ] as const),
            TokenKind.CloseParentheses,
        ] as const,
        (data) : NodeArray<Expression> => {
            const [, first, more] = data;
            const arr = more
                .flat(1)
                .filter((x) : x is Expression => {
                    return "syntaxKind" in x;
                });
            return toNodeArray(
                [first, ...arr],
                SyntaxKind.ExpressionList,
                getTextRange(data)
            );
        }
    )
