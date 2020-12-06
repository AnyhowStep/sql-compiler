import {HashSubPartition, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";

makeCustomRule(SyntaxKind.HashSubPartition)
    .addSubstitution(
        [
            TokenKind.SUBPARTITION,
            TokenKind.BY,
            optional(TokenKind.LINEAR),
            TokenKind.HASH,
            TokenKind.OpenParentheses,
            CustomSyntaxKind.Expression,
            TokenKind.CloseParentheses,
            optional([
                TokenKind.SUBPARTITIONS,
                SyntaxKind.IntegerLiteral,
            ] as const),
        ] as const,
        (data) : HashSubPartition => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.HashSubPartition,
                linear : data[2] != undefined,
                subPartitionExpr : data[5],
                subPartitionCount : (
                    data[7] == undefined ?
                    undefined :
                    data[7][1]
                ),
            };
        }
    )
