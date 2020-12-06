import {Expression, NodeArray, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../factory";
import {zeroOrMore} from "../../nearley-wrapper";
import {getTextRange, toNodeArray} from "../parse-util";

makeCustomRule(CustomSyntaxKind.ExpressionListList)
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            CustomSyntaxKind.ExpressionList,
            zeroOrMore([
                TokenKind.Comma,
                CustomSyntaxKind.ExpressionList,
            ] as const),
            TokenKind.CloseParentheses,
        ] as const,
        (data) : NodeArray<NodeArray<Expression>> => {
            const [, first, more] = data;
            const arr = more
                .flat(1)
                .filter((x) : x is NodeArray<Expression> => {
                    return "syntaxKind" in x;
                });
            return toNodeArray(
                [first, ...arr],
                SyntaxKind.ExpressionListList,
                getTextRange(data)
            );
        }
    )
