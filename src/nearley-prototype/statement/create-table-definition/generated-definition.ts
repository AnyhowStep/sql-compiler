import {GeneratedType, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {ExpressionRule} from "../../expression/expression";
import {
    makeRule,
    optional,
    union,
} from "../../nearley-util";
import {getTextRange} from "../../parse-util";

makeRule(SyntaxKind.GeneratedDefinition)
    .addSubstitution(
        [
            optional([
                TokenKind.GENERATED,
                TokenKind.ALWAYS,
            ] as const),
            TokenKind.AS,
            TokenKind.OpenParentheses,
            ExpressionRule,
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
