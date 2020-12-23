import {BlockStatement, LabelStatement, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {optional, union} from "../../nearley-wrapper";
import {getTextRange} from "../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

makeCustomRule(CustomSyntaxKind.LabelStatement)
    .addSubstitution(
        [
            CustomSyntaxKind.LabelIdentifier,
            TokenKind.Colon,
            union(
                SyntaxKind.BlockStatement,
            ),
            optional(CustomSyntaxKind.LabelIdentifier),
        ] as const,
        (data) : LabelStatement => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.LabelStatement,
                beginLabel : data[0],
                statement : data[2][0],
                endLabel : data[3] ?? undefined,
            };
        }
    )
    .addSubstitution(
        [
            union(
                SyntaxKind.BlockStatement,
            ),
            /**
             * Providing this is actually a syntax error.
             * However, it might be better to just parse it here
             * and catch it with a lint rule?
             *
             * If this creates an ambiguous grammar, we should remove this.
             *
             * @todo Catch with lint rule
             */
            optional(CustomSyntaxKind.LabelIdentifier),
        ] as const,
        (data) : LabelStatement|BlockStatement => {
            if (data[1] == undefined) {
                return data[0][0];
            }
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.LabelStatement,
                beginLabel : undefined,
                statement : data[0][0],
                endLabel : data[1] ?? undefined,
            };
        }
    );
