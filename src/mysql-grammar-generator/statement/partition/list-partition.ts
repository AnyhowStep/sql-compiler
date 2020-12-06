import {ListPartition, ListPartitionDefinition, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional, zeroOrMore} from "../../../nearley-wrapper";
import {getTextRange, toNodeArray} from "../../parse-util";

makeCustomRule(SyntaxKind.ListPartition)
    .addSubstitution(
        [
            TokenKind.PARTITION,
            TokenKind.BY,
            TokenKind.LIST,
            TokenKind.OpenParentheses,
            /**
             * @todo make this `bit_expr` as in,
             * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9399
             * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5408
             */
            CustomSyntaxKind.Expression,
            TokenKind.CloseParentheses,
            optional([
                TokenKind.PARTITIONS,
                SyntaxKind.IntegerLiteral,
            ] as const),
            optional(CustomSyntaxKind.SubPartition),
            TokenKind.OpenParentheses,
            CustomSyntaxKind.SingletonListPartitionDefinition,
            zeroOrMore([
                TokenKind.Comma,
                CustomSyntaxKind.SingletonListPartitionDefinition,
            ] as const),
            TokenKind.CloseParentheses,
        ] as const,
        (data) : ListPartition => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.ListPartition,
                partitionExprOrColumns : data[4],
                partitionCount : (
                    data[6] == undefined ?
                    undefined :
                    data[6][1]
                ),
                subPartition : (
                    data[7] == undefined ?
                    undefined :
                    data[7]
                ),
                partitionDefinitions : toNodeArray(
                    [
                        data[9],
                        ...data[10].flat(1).filter((item) : item is ListPartitionDefinition => {
                            return "syntaxKind" in item;
                        })
                    ],
                    SyntaxKind.ListPartitionDefinitionList,
                    getTextRange(data)
                ),
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.PARTITION,
            TokenKind.BY,
            TokenKind.LIST,
            TokenKind.COLUMNS,
            TokenKind.OpenParentheses,
            SyntaxKind.Identifier,
            TokenKind.CloseParentheses,
            optional([
                TokenKind.PARTITIONS,
                SyntaxKind.IntegerLiteral,
            ] as const),
            optional(CustomSyntaxKind.SubPartition),
            TokenKind.OpenParentheses,
            CustomSyntaxKind.SingletonListPartitionDefinition,
            zeroOrMore([
                TokenKind.Comma,
                CustomSyntaxKind.SingletonListPartitionDefinition,
            ] as const),
            TokenKind.CloseParentheses,
        ] as const,
        (data) : ListPartition => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.ListPartition,
                partitionExprOrColumns : toNodeArray(
                    [data[5]],
                    SyntaxKind.IdentifierList,
                    data[5]
                ),
                partitionCount : (
                    data[7] == undefined ?
                    undefined :
                    data[7][1]
                ),
                subPartition : (
                    data[8] == undefined ?
                    undefined :
                    data[8]
                ),
                partitionDefinitions : toNodeArray(
                    [
                        data[10],
                        ...data[11].flat(1).filter((item) : item is ListPartitionDefinition => {
                            return "syntaxKind" in item;
                        })
                    ],
                    SyntaxKind.ListPartitionDefinitionList,
                    getTextRange(data)
                ),
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.PARTITION,
            TokenKind.BY,
            TokenKind.LIST,
            TokenKind.COLUMNS,
            CustomSyntaxKind.IdentifierList_2OrMore,
            optional([
                TokenKind.PARTITIONS,
                SyntaxKind.IntegerLiteral,
            ] as const),
            optional(CustomSyntaxKind.SubPartition),
            TokenKind.OpenParentheses,
            CustomSyntaxKind.NonSingletonListPartitionDefinition,
            zeroOrMore([
                TokenKind.Comma,
                CustomSyntaxKind.NonSingletonListPartitionDefinition,
            ] as const),
            TokenKind.CloseParentheses,
        ] as const,
        (data) : ListPartition => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.ListPartition,
                partitionExprOrColumns : data[4],
                partitionCount : (
                    data[5] == undefined ?
                    undefined :
                    data[5][1]
                ),
                subPartition : (
                    data[6] == undefined ?
                    undefined :
                    data[6]
                ),
                partitionDefinitions : toNodeArray(
                    [
                        data[8],
                        ...data[9].flat(1).filter((item) : item is ListPartitionDefinition => {
                            return "syntaxKind" in item;
                        })
                    ],
                    SyntaxKind.ListPartitionDefinitionList,
                    getTextRange(data)
                ),
            };
        }
    )
