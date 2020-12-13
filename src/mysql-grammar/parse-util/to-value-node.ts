import {SyntaxKind, TextRange, ValueNode} from "../../parser-node";

export function toValueNode<ValueT extends unknown> (
    value : ValueT,
    textRange : TextRange
) : ValueNode<ValueT> {
    return {
        start : textRange.start,
        end : textRange.end,
        syntaxKind : SyntaxKind.Value,
        value,
    }
}
