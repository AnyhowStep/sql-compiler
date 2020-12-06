import {KeyPartition, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";

makeCustomRule(SyntaxKind.KeyPartition)
    .addSubstitution(
        [
            TokenKind.PARTITION,
            TokenKind.BY,
            optional(TokenKind.LINEAR),
            TokenKind.KEY,
            optional([
                TokenKind.ALGORITHM,
                TokenKind.Equal,
                SyntaxKind.IntegerLiteral,
            ] as const),
            CustomSyntaxKind.IdentifierList,
            optional([
                TokenKind.PARTITIONS,
                SyntaxKind.IntegerLiteral,
            ] as const),
        ] as const,
        (data) : KeyPartition => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.KeyPartition,
                linear : data[2] != undefined,
                algorithm : (
                    data[4] == undefined ?
                    undefined :
                    data[4][2]
                ),
                partitionColumns : data[5],
                partitionCount : (
                    data[6] == undefined ?
                    undefined :
                    data[6][1]
                ),
            };
        }
    )
