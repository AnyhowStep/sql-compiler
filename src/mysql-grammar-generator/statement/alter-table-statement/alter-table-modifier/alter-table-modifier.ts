import {AlterTableModifier, SyntaxKind} from "../../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../../factory";

makeCustomRule(CustomSyntaxKind.AlterTableModifier)
    .addSubstitution(
        [
            SyntaxKind.AlterTableLock,
        ] as const,
        (data) : AlterTableModifier => {
            return data[0];
        }
    )
    .addSubstitution(
        [
            SyntaxKind.AlterTableAlgorithm,
        ] as const,
        (data) : AlterTableModifier => {
            return data[0];
        }
    )
    .addSubstitution(
        [
            SyntaxKind.AlterTableValidation,
        ] as const,
        (data) : AlterTableModifier => {
            return data[0];
        }
    )
