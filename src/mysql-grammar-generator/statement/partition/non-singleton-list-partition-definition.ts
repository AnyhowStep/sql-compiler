import {ListPartitionDefinition, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {getTextRange} from "../../parse-util";
import {optional} from "../../../nearley-wrapper";

makeCustomRule(CustomSyntaxKind.NonSingletonListPartitionDefinition)
    .addSubstitution(
        [
            TokenKind.PARTITION,
            SyntaxKind.Identifier,
            TokenKind.VALUES,
            TokenKind.IN,
            CustomSyntaxKind.ExpressionListList,
            SyntaxKind.PartitionDefinitionOptions,
            optional(CustomSyntaxKind.SubPartitionDefinitionList),
        ] as const,
        (data) : ListPartitionDefinition => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.ListPartitionDefinition,
                partitionName : data[1],
                partitionValues : data[4],
                partitionDefinitionOptions : data[5],
                subPartitionDefinitions : (
                    data[6] == undefined ?
                    undefined :
                    data[6]
                ),
            }
        }
    )
