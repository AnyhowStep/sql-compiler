import {IndexClass, IndexDefinition, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {union, optional} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.IndexDefinition)
    .addSubstitution(
        [
            union(TokenKind.FULLTEXT, TokenKind.SPATIAL),
            optional(union(
                /**
                 * Can be unquoted `INDEX`/`KEY` or an identifier.
                 */
                [SyntaxKind.Identifier] as const,
                [union(TokenKind.INDEX, TokenKind.KEY), SyntaxKind.Identifier] as const,
            )),
            //optional(union(TokenKind.INDEX, TokenKind.KEY)),
            //optional(SyntaxKind.Identifier),
            CustomSyntaxKind.IndexPartList,
            CustomSyntaxKind.IndexOption,
        ] as const,
        function (data) : IndexDefinition {
            const [indexClass, rawIndexName, indexParts, indexOption] = data;

            const indexName = (
                rawIndexName == undefined ?
                undefined :
                rawIndexName[0].length == 2 ?
                rawIndexName[0][1] :
                rawIndexName[0][0].quoted ?
                rawIndexName[0][0] :
                (
                    rawIndexName[0][0].identifier.toUpperCase() == "INDEX" ||
                    rawIndexName[0][0].identifier.toUpperCase() == "KEY"
                ) ?
                undefined :
                rawIndexName[0][0]
            );

            const result : IndexDefinition = {
                syntaxKind : SyntaxKind.IndexDefinition,
                constraintName : undefined,
                indexClass : (
                    indexClass[0].tokenKind == TokenKind.FULLTEXT ?
                    IndexClass.FULLTEXT :
                    IndexClass.SPATIAL
                ),
                indexName,
                indexParts,
                ...indexOption,
                ...getTextRange(data),
            };

            return result;
        }
    )
