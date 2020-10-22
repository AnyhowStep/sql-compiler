import {CreateTableDefinition, NodeArray, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {
    makeCustomRule,
    union,
    zeroOrMore,
} from "../../nearley-util";
import {getTextRange, toNodeArray} from "../../parse-util";

export const CreateTableDefinitionRule = makeCustomRule<CreateTableDefinition>("CreateTableDefinition")
    .addSubstitution(
        [union(
            SyntaxKind.ColumnDefinition,
            SyntaxKind.IndexDefinition,
        )] as const,
        (data) : CreateTableDefinition => data[0][0]
    );

export const CreateTableDefinitionListRule = makeCustomRule<NodeArray<CreateTableDefinition>>("CreateTableDefinitionList")
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            CreateTableDefinitionRule,
            zeroOrMore([
                TokenKind.Comma,
                CreateTableDefinitionRule,
            ] as const),
            TokenKind.CloseParentheses,
        ] as const,
        (data) : NodeArray<CreateTableDefinition> => {
            const [, first, more] = data;
            const arr = more
                .flat(1)
                //@ts-ignore
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
