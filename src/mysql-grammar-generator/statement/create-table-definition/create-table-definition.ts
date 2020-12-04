import {CreateTableDefinition, NodeArray, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {union, zeroOrMore} from "../../../nearley-wrapper";
import {getTextRange, toNodeArray} from "../../parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6247
 */
makeCustomRule(CustomSyntaxKind.CreateTableDefinition)
    .addSubstitution(
        [union(
            SyntaxKind.ColumnDefinition,
            SyntaxKind.IndexDefinition,
            SyntaxKind.CheckDefinition,
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
