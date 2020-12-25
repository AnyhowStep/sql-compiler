import {ListPartitionDefinition, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {getTextRange, toNodeArray} from "../../parse-util";
import {optional} from "../../../nearley-wrapper";

makeCustomRule(CustomSyntaxKind.SingletonListPartitionDefinition)
    .addSubstitution(
        [
            TokenKind.PARTITION,
            SyntaxKind.Identifier,
            TokenKind.VALUES,
            TokenKind.IN,
            SyntaxKind.ExpressionList,
            SyntaxKind.PartitionDefinitionOptions,
            optional(SyntaxKind.SubPartitionDefinitionList),
        ] as const,
        (data) : ListPartitionDefinition => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.ListPartitionDefinition,
                partitionName : data[1],
                partitionValues : toNodeArray(
                    data[4].map(expression => {
                        return toNodeArray(
                            [expression],
                            SyntaxKind.ExpressionList,
                            getTextRange(expression)
                        )
                    }),
                    SyntaxKind.ExpressionListList,
                    getTextRange(data[4])
                ),
                partitionDefinitionOptions : data[5],
                subPartitionDefinitions : (
                    data[6] == undefined ?
                    undefined :
                    data[6]
                ),
            }
        }
    )
