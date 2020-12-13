import {DerivedTableFactor, SelectStatement, SyntaxKind} from "../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {getTextRange} from "../../../parse-util";
import {TokenKind} from "../../../scanner";
import {union} from "../../../nearley-wrapper";

makeCustomRule(CustomSyntaxKind.DerivedTableFactorSelect)
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            CustomSyntaxKind.DerivedTableFactorSelect,
            TokenKind.CloseParentheses,
        ] as const,
        (data) : SelectStatement => {
            return data[1];
        }
    )
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            union(
                SyntaxKind.Select,
                SyntaxKind.Union,
                SyntaxKind.UnionOrderLimit,
                /**
                 * This is usually not allowed.
                 * But it seems to be allowed in derived tables... Why.
                 */
                CustomSyntaxKind.ParenthesizedUnion_UnionOrderLimit,
            ),
            TokenKind.CloseParentheses,
        ] as const,
        (data) : SelectStatement => {
            return data[1][0];
        }
    )

makeCustomRule(SyntaxKind.DerivedTableFactor)
    .addSubstitution(
        [
            CustomSyntaxKind.DerivedTableFactorSelect,
            CustomSyntaxKind.TableAlias,
        ] as const,
        (data) : DerivedTableFactor => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.DerivedTableFactor,
                select : data[0],
                alias : data[1],
            };
        }
    )
