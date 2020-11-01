import {GeneratedType, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {
    optional,
    union,
} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.GeneratedDefinition)
    .addSubstitution(
        [
            optional([
                TokenKind.GENERATED,
                TokenKind.ALWAYS,
            ] as const),
            TokenKind.AS,
            TokenKind.OpenParentheses,
            CustomSyntaxKind.Expression,
            TokenKind.CloseParentheses,
            optional(union(
                TokenKind.VIRTUAL,
                TokenKind.STORED,
            ))
        ] as const,
        (data) => {
            const [, , , expr, , generatedType] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.GeneratedDefinition,
                expr,
                generatedType : (
                    generatedType == null ?
                    GeneratedType.VIRTUAL :
                    generatedType[0].tokenKind == TokenKind.STORED ?
                    GeneratedType.STORED :
                    GeneratedType.VIRTUAL
                ),
            }
        }
    );
