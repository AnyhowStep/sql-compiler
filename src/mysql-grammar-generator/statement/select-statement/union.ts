import {SyntaxKind, Union} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional, union, oneOrMore} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";

/**
 * Unparenthesized `UNION`
 */
makeCustomRule(SyntaxKind.Union)
    .addSubstitution(
        [
            union(
                SyntaxKind.Select,
                CustomSyntaxKind.ParenthesizedSelect,
            ),
            oneOrMore([
                TokenKind.UNION,
                optional(union(
                    TokenKind.ALL,
                    TokenKind.DISTINCT,
                )),
                union(
                    SyntaxKind.Select,
                    CustomSyntaxKind.ParenthesizedSelect,
                ),
            ] as const),
        ] as const,
        (data) : Union => {
            const first = data[0][0];
            const trailing = data[1].map(item => {
                return {
                    ...getTextRange(item),
                    distinct : (
                        item[1] == undefined ?
                        {
                            start : item[0].end,
                            end : item[0].end,
                            syntaxKind : SyntaxKind.Value,
                            value : true,
                        } as const :
                        {
                            ...getTextRange(item[1][0]),
                            syntaxKind : SyntaxKind.Value,
                            value : item[1][0].tokenKind == TokenKind.DISTINCT,
                        } as const
                    ),
                    rhs : item[2][0],
                };
            });
            const second = trailing.shift()!;

            let result : Union = {
                ...getTextRange([first, second]),
                syntaxKind : SyntaxKind.Union,
                distinct : second.distinct,
                lhs : first,
                rhs : second.rhs,
            };
            for (const item of trailing) {
                result = {
                    ...getTextRange([result, item]),
                    syntaxKind : SyntaxKind.Union,
                    distinct : item.distinct,
                    lhs : result,
                    rhs : item.rhs,
                };
            }

            return result;
        }
    )

/**
 * Parenthesized `UNION`.
 * This is usually not allowed.
 * But it seems to be allowed in derived tables... Why.
 */
makeCustomRule(CustomSyntaxKind.ParenthesizedUnion)
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            CustomSyntaxKind.ParenthesizedUnion,
            TokenKind.CloseParentheses,
        ] as const,
        (data) : Union => {
            return data[1];
        }
    )
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            SyntaxKind.Union,
            TokenKind.CloseParentheses,
        ] as const,
        (data) : Union => {
            return data[1];
        }
    )
