import {SelectStatement, SyntaxKind} from "../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {union} from "../../../nearley-wrapper";

makeCustomRule(CustomSyntaxKind.SelectStatement)
    .addSubstitution(
        [
            union(
                SyntaxKind.Select,
                CustomSyntaxKind.ParenthesizedSelect,
                SyntaxKind.Union,
                SyntaxKind.UnionOrderLimit,
            ),
        ] as const,
        (data) : SelectStatement => {
            return data[0][0];
        }
    )
