import {SyntaxKind} from "../syntax-kind.generated";
import {Expression} from "./expression";

export interface UnknownExpression extends Expression {
    syntaxKind : SyntaxKind.UnknownExpression,
}
