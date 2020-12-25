import {Expression, isSyntaxKind, RangePartitionDefinition, SyntaxKind, ValueNode} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {getTextRange, toNodeArray} from "../../parse-util";
import {oneOrMore, optional} from "../../../nearley-wrapper";

makeCustomRule(CustomSyntaxKind.NonSingletonRangePartitionDefinition)
    .addSubstitution(
        [
            TokenKind.PARTITION,
            SyntaxKind.Identifier,
            TokenKind.VALUES,
            TokenKind.LESS,
            TokenKind.THAN,
            TokenKind.OpenParentheses,
            /**
             * May be an `Identifier` with the value `MAXVALUE`
             */
            CustomSyntaxKind.Expression,
            oneOrMore([
                TokenKind.Comma,
                /**
                 * May be an `Identifier` with the value `MAXVALUE`
                 */
                CustomSyntaxKind.Expression,
            ] as const),
            TokenKind.CloseParentheses,
            SyntaxKind.PartitionDefinitionOptions,
            optional(SyntaxKind.SubPartitionDefinitionList),
        ] as const,
        (data) : RangePartitionDefinition => {
            const exprOrMaxValueArray = [data[6], ...data[7]]
                .flat(2)
                .filter((item) : item is Expression => {
                    return "syntaxKind" in item;
                })
                .map((exprOrMaxValue) : Expression|ValueNode<"MAXVALUE"> => {
                    return (
                        !("syntaxKind" in exprOrMaxValue) ||
                        (
                            isSyntaxKind(exprOrMaxValue, SyntaxKind.Identifier) &&
                            !exprOrMaxValue.quoted &&
                            exprOrMaxValue.identifier.toUpperCase() == "MAXVALUE"

                        )
                    ) ?
                    {
                        ...getTextRange(exprOrMaxValue),
                        syntaxKind : SyntaxKind.Value,
                        value : "MAXVALUE"
                    } :
                    exprOrMaxValue;
                });
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.RangePartitionDefinition,
                partitionName : data[1],
                partitionValues : toNodeArray(
                    exprOrMaxValueArray,
                    SyntaxKind.ExpressionOrMaxValueList,
                    getTextRange(exprOrMaxValueArray)
                ),
                partitionDefinitionOptions : data[9],
                subPartitionDefinitions : (
                    data[10] == undefined ?
                    undefined :
                    data[10]
                ),
            }
        }
    )
