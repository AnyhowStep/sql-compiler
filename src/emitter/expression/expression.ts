import {Expression, ReverseSyntaxKind, switchSyntaxKind, SyntaxKind} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitIntegerLiteral} from "./integer-literal";
import {emitStringLiteral} from "./string-literal";

export function emitExpression (expr : Expression) : StringBuilder {
    return switchSyntaxKind(expr)
        .case(SyntaxKind.StringLiteral, emitStringLiteral)
        .case(SyntaxKind.IntegerLiteral, emitIntegerLiteral)
        .default(() => new StringBuilder()
            .append(`TODO_EXPRESSION(${ReverseSyntaxKind[expr.syntaxKind]})`)
        );
}
