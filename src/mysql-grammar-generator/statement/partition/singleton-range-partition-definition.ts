import {Expression, isSyntaxKind, RangePartitionDefinition, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {getTextRange, toNodeArray} from "../../parse-util";
import {optional, TokenObj, union} from "../../../nearley-wrapper";

makeCustomRule(CustomSyntaxKind.SingletonRangePartitionDefinition)
    .addSubstitution(
        [
            TokenKind.PARTITION,
            SyntaxKind.Identifier,
            TokenKind.VALUES,
            TokenKind.LESS,
            TokenKind.THAN,
            union(
                [
                    TokenKind.OpenParentheses,
                    /**
                     * May be an `Identifier` with the value `MAXVALUE`
                     */
                    CustomSyntaxKind.Expression,
                    TokenKind.CloseParentheses,
                ] as const,
                [
                    TokenKind.MAXVALUE,
                ] as const,
            ),
            SyntaxKind.PartitionDefinitionOptions,
            optional(CustomSyntaxKind.SubPartitionDefinitionList),
        ] as const,
        (data) : RangePartitionDefinition => {
            const exprOrMaxValue = data[5]
                .flat(2)
                .filter((item) : item is Expression|TokenObj<TokenKind.MAXVALUE> => {
                    if ("syntaxKind" in item) {
                        return true;
                    }
                    return item.tokenKind == TokenKind.MAXVALUE;
                });
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.RangePartitionDefinition,
                partitionName : data[1],
                partitionValues : toNodeArray(
                    [
                        (
                            !("syntaxKind" in exprOrMaxValue[0]) ||
                            (
                                isSyntaxKind(exprOrMaxValue[0], SyntaxKind.Identifier) &&
                                !exprOrMaxValue[0].quoted &&
                                exprOrMaxValue[0].identifier.toUpperCase() == "MAXVALUE"

                            )
                        ) ?
                        {
                            ...getTextRange(exprOrMaxValue[0]),
                            syntaxKind : SyntaxKind.Value,
                            value : "MAXVALUE"
                        } :
                        exprOrMaxValue[0]
                    ],
                    SyntaxKind.ExpressionOrMaxValueList,
                    getTextRange(data[5])
                ),
                partitionDefinitionOptions : data[6],
                subPartitionDefinitions : (
                    data[7] == undefined ?
                    undefined :
                    data[7]
                ),
            }
        }
    )
