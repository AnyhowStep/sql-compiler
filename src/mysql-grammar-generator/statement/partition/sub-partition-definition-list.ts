import {NodeArray, SubPartitionDefinition, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {zeroOrMore} from "../../../nearley-wrapper";
import {getTextRange, toNodeArray} from "../../parse-util";

makeCustomRule(CustomSyntaxKind.SubPartitionDefinitionList)
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            SyntaxKind.SubPartitionDefinition,
            zeroOrMore([
                TokenKind.Comma,
                SyntaxKind.SubPartitionDefinition,
            ] as const),
            TokenKind.CloseParentheses,
        ] as const,
        (data) : NodeArray<SubPartitionDefinition> => {
            const [, first, more] = data;
            const arr = more
                .flat(1)
                .filter((x) : x is SubPartitionDefinition => {
                    return "syntaxKind" in x;
                });
            return toNodeArray(
                [first, ...arr],
                SyntaxKind.SubPartitionDefinitionList,
                getTextRange(data)
            );
        }
    )
