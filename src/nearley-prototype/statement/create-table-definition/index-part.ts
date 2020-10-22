import {IndexPart, NodeArray, SortDirection, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {makeCustomRule, makeRule, optional, union, zeroOrMore} from "../../nearley-util";
import {getTextRange, toNodeArray} from "../../parse-util";

makeRule(SyntaxKind.IndexPart)
    .addSubstitution(
        [
            SyntaxKind.Identifier,
            optional([
                TokenKind.OpenParentheses,
                SyntaxKind.IntegerLiteral,
                TokenKind.CloseParentheses,
            ] as const),
            optional(union(TokenKind.ASC, TokenKind.DESC))
        ] as const,
        (data) : IndexPart => {
            const [columnName, indexLength, sortDirection] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.IndexPart,
                columnName,
                indexLength : (
                    indexLength == undefined ?
                    undefined :
                    indexLength[1]
                ),
                sortDirection : (
                    sortDirection == undefined ?
                    SortDirection.ASC :
                    sortDirection[0].tokenKind == TokenKind.ASC ?
                    SortDirection.ASC :
                    SortDirection.DESC
                ),
            }
        }
    )

export const IndexPartListRule = makeCustomRule<NodeArray<IndexPart>>("IndexPartList")
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            SyntaxKind.IndexPart,
            zeroOrMore([
                TokenKind.Comma,
                SyntaxKind.IndexPart,
            ] as const),
            TokenKind.CloseParentheses,
        ] as const,
        (data) : NodeArray<IndexPart> => {
            const [, first, more] = data;
            const arr = more
                .flat(1)
                //@ts-ignore
                .filter((x) : x is IndexPart => {
                    return "syntaxKind" in x;
                });
            return toNodeArray(
                [first, ...arr],
                SyntaxKind.IndexPartList,
                getTextRange(data)
            );
        }
    )
