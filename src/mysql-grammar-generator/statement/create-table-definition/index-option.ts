import {SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional, zeroOrMore} from "../../../nearley-wrapper";
import {createDefaultIndexOption, getTextRange} from "../../parse-util";
import {IndexOption, IndexOptions} from "../../custom-data";

makeCustomRule(CustomSyntaxKind.IndexOption)
    .addSubstitution(
        [TokenKind.KEY_BLOCK_SIZE, optional(TokenKind.Equal), SyntaxKind.IntegerLiteral] as const,
        (data) : IndexOption => {
            return {
                ...getTextRange(data),
                keyBlockSize : data[2],
            };
        }
    )
    .addSubstitution(
        [CustomSyntaxKind.IndexType] as const,
        (data) : IndexOption => {
            return {
                ...getTextRange(data),
                indexType : data[0].indexType,
            };
        }
    )
    .addSubstitution(
        [TokenKind.WITH, TokenKind.PARSER, SyntaxKind.Identifier] as const,
        (data) : IndexOption => {
            return {
                ...getTextRange(data),
                withParser : data[2],
            };
        }
    )
    .addSubstitution(
        [CustomSyntaxKind.Comment] as const,
        (data) : IndexOption => {
            return {
                ...getTextRange(data),
                comment : data[0],
            };
        }
    )

makeCustomRule(CustomSyntaxKind.IndexOptions)
    .addSubstitution(
        [
            zeroOrMore(CustomSyntaxKind.IndexOption),
        ] as const,
        (data) : IndexOptions => {
            let indexOption = createDefaultIndexOption();

            for (const item of data[0]) {
                for (const k of Object.keys(item)) {
                    if (k in indexOption) {
                        (indexOption as any)[k] = (item as any)[k];
                        break;
                    }
                }
            }

            return {
                ...getTextRange(data),
                ...indexOption,
            };
        }
    );
