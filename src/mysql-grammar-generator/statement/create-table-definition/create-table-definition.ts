import {CreateTableDefinition, NodeArray, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {union, zeroOrMore} from "../../../nearley-wrapper";
import {getTextRange, toNodeArray} from "../../parse-util";

makeCustomRule(CustomSyntaxKind.CreateTableDefinition)
    .addSubstitution(
        [union(
            SyntaxKind.ColumnDefinition,
            SyntaxKind.IndexDefinition,
        )] as const,
        (data) : CreateTableDefinition => data[0][0]
    );

makeCustomRule(CustomSyntaxKind.CreateTableDefinitionList)
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            CustomSyntaxKind.CreateTableDefinition,
            zeroOrMore([
                TokenKind.Comma,
                CustomSyntaxKind.CreateTableDefinition,
            ] as const),
            TokenKind.CloseParentheses,
        ] as const,
        (data) : NodeArray<CreateTableDefinition> => {
            const [, first, more] = data;
            const arr = more
                .flat(1)
                .filter((x) : x is CreateTableDefinition => {
                    return "syntaxKind" in x;
                });
            return toNodeArray(
                [first, ...arr],
                SyntaxKind.CreateTableDefinitionList,
                getTextRange(data)
            );
        }
    )