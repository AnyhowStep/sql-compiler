import {HashPartition, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";

makeCustomRule(SyntaxKind.HashPartition)
    .addSubstitution(
        [
            TokenKind.PARTITION,
            TokenKind.BY,
            optional(TokenKind.LINEAR),
            TokenKind.HASH,
            TokenKind.OpenParentheses,
            CustomSyntaxKind.Expression,
            TokenKind.CloseParentheses,
            optional([
                TokenKind.PARTITIONS,
                SyntaxKind.IntegerLiteral,
            ] as const),
        ] as const,
        (data) : HashPartition => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.HashPartition,
                linear : data[2] != undefined,
                partitionExpr : data[5],
                partitionCount : (
                    data[7] == undefined ?
                    undefined :
                    data[7][1]
                ),
            };
        }
    )
