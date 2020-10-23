import {Expression, ReverseSyntaxKind, switchSyntaxKind, SyntaxKind} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitStringLiteral} from "./string-literal";

export function emitExpression (expr : Expression) : StringBuilder {
    return switchSyntaxKind(expr)
        .case(SyntaxKind.StringLiteral, emitStringLiteral)
        .default(() => new StringBuilder()
            .append(`TODO_EXPRESSION(${ReverseSyntaxKind[expr.syntaxKind]})`)
        );
}
