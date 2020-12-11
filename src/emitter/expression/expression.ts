import {Expression, ReverseSyntaxKind, switchSyntaxKind, SyntaxKind} from "../../parser-node";
import {emitIdentifier} from "../identifier";
import {StringBuilder} from "../string-builder";
import {emitBitLiteral} from "./bit-literal";
import {emitHexLiteral} from "./hex-literal";
import {emitIntegerLiteral} from "./integer-literal";
import {emitParamMarker} from "./param-marker";
import {emitRealLiteral} from "./real-literal";
import {emitStringLiteral} from "./string-literal";

export function emitExpression (expr : Expression) : StringBuilder {
    return switchSyntaxKind(expr)
        .case(SyntaxKind.StringLiteral, emitStringLiteral)
        .case(SyntaxKind.HexLiteral, emitHexLiteral)
        .case(SyntaxKind.BitLiteral, emitBitLiteral)
        .case(SyntaxKind.IntegerLiteral, emitIntegerLiteral)
        .case(SyntaxKind.Identifier, emitIdentifier)
        .case(SyntaxKind.RealLiteral, emitRealLiteral)
        .case(SyntaxKind.ParamMarker, emitParamMarker)
        .default(() => new StringBuilder()
            .append(`TODO_EXPRESSION(${ReverseSyntaxKind[expr.syntaxKind]})`)
        );
}
