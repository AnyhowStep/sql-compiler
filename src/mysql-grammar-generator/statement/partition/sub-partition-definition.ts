import {SubPartitionDefinition, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {makeCustomRule} from "../../factory";
import {getTextRange} from "../../parse-util";
import {union} from "../../../nearley-wrapper";

makeCustomRule(SyntaxKind.SubPartitionDefinition)
    .addSubstitution(
        [
            TokenKind.SUBPARTITION,
            union(SyntaxKind.Identifier, SyntaxKind.StringLiteral),
            SyntaxKind.PartitionDefinitionOptions,
        ] as const,
        (data) : SubPartitionDefinition => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.SubPartitionDefinition,
                subPartitionName : data[1][0],
                partitionDefinitionOptions : data[2],
            }
        }
    )
