import {SyntaxKind, UnionOrderLimit} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional, union} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";

makeCustomRule(CustomSyntaxKind.UnionOrderLimit_Helper)
    .addSubstitution(
        [
            SyntaxKind.OrderExprList,
            optional(SyntaxKind.Limit),
        ] as const,
        (data) : Omit<UnionOrderLimit, "select"> => {
            const [
                order,
                limit,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.UnionOrderLimit,
                order,
                limit : limit ?? undefined,
            };
        }
    )
    .addSubstitution(
        [
            SyntaxKind.Limit,
        ] as const,
        (data) : Omit<UnionOrderLimit, "select"> => {
            const [
                limit,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.UnionOrderLimit,
                order : undefined,
                limit,
            };
        }
    );

makeCustomRule(SyntaxKind.UnionOrderLimit)
    .addSubstitution(
        [
            CustomSyntaxKind.ParenthesizedSelect,
            CustomSyntaxKind.UnionOrderLimit_Helper,
        ] as const,
        (data) : UnionOrderLimit => {
            const [
                select,
                helper,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.UnionOrderLimit,
                select,
                order : helper.order,
                limit : helper.limit,
            };
        }
    )
    .addSubstitution(
        [
            union(
                SyntaxKind.Union,
                SyntaxKind.Select,
                CustomSyntaxKind.ParenthesizedSelect,
            ),
            TokenKind.UNION,
            optional(union(
                TokenKind.ALL,
                TokenKind.DISTINCT,
            )),
            CustomSyntaxKind.ParenthesizedSelect,
            CustomSyntaxKind.UnionOrderLimit_Helper,
        ] as const,
        (data) : UnionOrderLimit => {
            const [
                lhs,
                ,
                distinct,
                rhs,
                helper,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.UnionOrderLimit,
                select : {
                    ...getTextRange([lhs, rhs]),
                    syntaxKind : SyntaxKind.Union,
                    distinct : (
                        distinct == undefined ?
                        true :
                        distinct[0].tokenKind == TokenKind.DISTINCT
                    ),
                    lhs : lhs[0],
                    rhs,
                },
                order : helper.order,
                limit : helper.limit,
            };
        }
    )
