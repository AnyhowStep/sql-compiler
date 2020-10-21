import {SyntaxKind} from "../syntax-kind.generated";
import {Expression} from "./expression";

export interface IntegerLiteral extends Expression {
    syntaxKind : SyntaxKind.IntegerLiteral,
    value : bigint,
}
