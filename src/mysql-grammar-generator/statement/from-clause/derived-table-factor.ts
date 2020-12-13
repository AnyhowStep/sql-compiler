import {DerivedTableFactor, SyntaxKind} from "../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {getTextRange} from "../../../parse-util";
import {TokenKind} from "../../../scanner";

makeCustomRule(SyntaxKind.DerivedTableFactor)
    .addSubstitution(
        [
            TokenKind.OpenParentheses,
            /**
             * This does not actually parse semi-colons and delimiters.
             */
            CustomSyntaxKind.SelectStatement,
            TokenKind.CloseParentheses,
            CustomSyntaxKind.TableAlias,
        ] as const,
        (data) : DerivedTableFactor => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.DerivedTableFactor,
                select : data[1],
                alias : data[3],
            };
        }
    )
