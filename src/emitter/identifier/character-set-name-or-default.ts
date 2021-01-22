import {Identifier, StringLiteral, SyntaxKind, ValueNode} from "../../parser-node";
import {emitExpression} from "../expression";
import {StringBuilder} from "../string-builder";

export function emitCharacterSetNameOrDefault (item : Identifier|StringLiteral|ValueNode<"DEFAULT">) {
    if (item.syntaxKind == SyntaxKind.Value) {
        return new StringBuilder()
            .append("DEFAULT")
    }

    return emitExpression(item)

}
