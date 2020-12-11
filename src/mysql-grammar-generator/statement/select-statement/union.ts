import {SyntaxKind, Union} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional, union, oneOrMore} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";

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
                        true :
                        item[1][0].tokenKind == TokenKind.DISTINCT
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
