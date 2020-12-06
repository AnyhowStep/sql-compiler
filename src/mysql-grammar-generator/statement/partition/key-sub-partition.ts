import {KeySubPartition, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";

makeCustomRule(SyntaxKind.KeySubPartition)
    .addSubstitution(
        [
            TokenKind.SUBPARTITION,
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
                TokenKind.SUBPARTITIONS,
                SyntaxKind.IntegerLiteral,
            ] as const),
        ] as const,
        (data) : KeySubPartition => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.KeySubPartition,
                linear : data[2] != undefined,
                algorithm : (
                    data[4] == undefined ?
                    undefined :
                    data[4][2]
                ),
                subPartitionColumns : data[5],
                subPartitionCount : (
                    data[6] == undefined ?
                    undefined :
                    data[6][1]
                ),
            };
        }
    )
