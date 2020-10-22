import {IndexClass, IndexDefinition, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {makeRule, union, optional} from "../../nearley-util";
import {IndexTypeRule} from "./index-type";
import {IndexPartListRule} from "./index-part";
import {IndexOptionRule} from "./index-option";
import {getTextRange} from "../../parse-util";
import {ConstraintRule} from "../../misc/constraint";

makeRule(SyntaxKind.IndexDefinition)
    .addSubstitution(
        [
            ConstraintRule,
            TokenKind.UNIQUE,
            union(TokenKind.INDEX, TokenKind.KEY),
            optional(SyntaxKind.Identifier),
            optional(IndexTypeRule),
            IndexPartListRule,
            IndexOptionRule,
        ] as const,
        function (data) : IndexDefinition {
            const [constraintName, , , indexName, indexType, indexParts, rawIndexOption] = data;

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
                ...getTextRange(data),
                syntaxKind : SyntaxKind.IndexDefinition,
                constraintName : (
                    "syntaxKind" in constraintName ?
                    constraintName :
                    undefined
                ),
                indexClass : IndexClass.UNIQUE,
                indexName : indexName ?? undefined,
                indexParts,
                ...indexOption,
            }
        }
    )
