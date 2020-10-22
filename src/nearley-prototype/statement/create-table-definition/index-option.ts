import {SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CommentRule} from "../../misc/comment";
import {makeCustomRule, union, optional, zeroOrMore} from "../../nearley-util";
import {createDefaultIndexOption, getTextRange, IndexOption, processIndexOption} from "../../parse-util";
import {IndexTypeRule} from "./index-type";

const IndexOptionElementRule = makeCustomRule("IndexOptionElement")
    .addSubstitution(
        [
            union(
                [TokenKind.KEY_BLOCK_SIZE, optional(TokenKind.Equal), SyntaxKind.IntegerLiteral] as const,
                IndexTypeRule,
                [TokenKind.WITH, TokenKind.PARSER, SyntaxKind.Identifier] as const,
                CommentRule,
            )
        ] as const,
        (data) => {
            return {
                ...getTextRange(data),
                data : data[0][0],
            };
        }
    )

export const IndexOptionRule = makeCustomRule<IndexOption>("IndexOption")
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
