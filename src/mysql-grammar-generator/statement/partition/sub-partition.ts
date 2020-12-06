import {SyntaxKind} from "../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(CustomSyntaxKind.SubPartition)
    .addSubstitution(
        [SyntaxKind.HashSubPartition] as const,
        data => data[0]
    )
    .addSubstitution(
        [SyntaxKind.KeySubPartition] as const,
        data => data[0]
    )
