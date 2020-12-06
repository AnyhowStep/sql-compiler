import {SyntaxKind} from "../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(CustomSyntaxKind.Partition)
    .addSubstitution(
        [SyntaxKind.HashPartition] as const,
        data => data[0]
    )
    .addSubstitution(
        [SyntaxKind.KeyPartition] as const,
        data => data[0]
    )
    .addSubstitution(
        [SyntaxKind.ListPartition] as const,
        data => data[0]
    )
    .addSubstitution(
        [SyntaxKind.RangePartition] as const,
        data => data[0]
    )
