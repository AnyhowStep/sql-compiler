import {IndexPart, NodeArray, SortDirection, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional, union, zeroOrMore} from "../../../nearley-wrapper";
import {getTextRange, getEnd, toNodeArray} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.IndexPart)
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
            const [columnName, indexLength, rawSortDirection] = data;
            const sortDirection = (
                rawSortDirection == undefined ?
                SortDirection.ASC :
                rawSortDirection[0].tokenKind == TokenKind.ASC ?
                SortDirection.ASC :
                SortDirection.DESC
            );

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.IndexPart,
                columnName,
                indexLength : (
                    indexLength == undefined ?
                    undefined :
                    indexLength[1]
                ),
                sortDirection : {
                    ...(
                        rawSortDirection == undefined ?
                        {
                            start : getEnd(data),
                            end : getEnd(data),
                        } :
                        getTextRange(rawSortDirection)
                    ),
                    syntaxKind : SyntaxKind.Value,
                    value : sortDirection,
                },
            }
        }
    )

makeCustomRule(CustomSyntaxKind.IndexPartList)
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
