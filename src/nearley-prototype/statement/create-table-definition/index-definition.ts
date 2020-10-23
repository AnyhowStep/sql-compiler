import {IndexClass, IndexDefinition, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {makeRule, union, optional} from "../../nearley-util";
import {IndexTypeRule} from "./index-type";
import {IndexPartListRule} from "./index-part";
import {IndexOptionRule} from "./index-option";
import {getTextRange} from "../../parse-util";

makeRule(SyntaxKind.IndexDefinition)
    .addSubstitution(
        [
            union(TokenKind.INDEX, TokenKind.KEY),
            optional(SyntaxKind.Identifier),
            optional(IndexTypeRule),
            IndexPartListRule,
            IndexOptionRule,
        ] as const,
        function (data) : IndexDefinition {
            const [, indexName, indexType, indexParts, rawIndexOption] = data;

            const indexOption = (
                indexType == undefined ?
                rawIndexOption :
                rawIndexOption.indexType == undefined ?
                {
                    ...rawIndexOption,
                    indexType : indexType.indexType,
                } :
                rawIndexOption
            );

            return {
                syntaxKind : SyntaxKind.IndexDefinition,
                constraintName : undefined,
                indexClass : IndexClass.INDEX,
                indexName : indexName ?? undefined,
                indexParts,
                ...indexOption,
                ...getTextRange(data),
            }
        }
    )
