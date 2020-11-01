import {SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule, makeRule} from "../../factory";
import {union, optional, zeroOrMore} from "../../../nearley-wrapper";
import {createDefaultIndexOption, getTextRange, processIndexOption} from "../../parse-util";
import {IndexOption} from "../../custom-data";

const IndexOptionElementRule = makeRule("IndexOptionElement")
    .addSubstitution(
        [
            union(
                [TokenKind.KEY_BLOCK_SIZE, optional(TokenKind.Equal), SyntaxKind.IntegerLiteral] as const,
                CustomSyntaxKind.IndexType,
                [TokenKind.WITH, TokenKind.PARSER, SyntaxKind.Identifier] as const,
                CustomSyntaxKind.Comment,
            )
        ] as const,
        (data) => {
            return {
                ...getTextRange(data),
                data : data[0][0],
            };
        }
    )

makeCustomRule(CustomSyntaxKind.IndexOption)
    .addSubstitution(
        [
            zeroOrMore(IndexOptionElementRule),
        ] as const,
        (data) : IndexOption => {
            let indexOption = createDefaultIndexOption();

            for (const ele of data[0]) {
                indexOption = processIndexOption(
                    indexOption,
                    ele.data
                );
            }

            return indexOption;
        }
    );
