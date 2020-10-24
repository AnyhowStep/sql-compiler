import {SyntaxKind} from "../syntax-kind.generated";
import {Expression} from "./expression";

export interface DecimalLiteral extends Expression {
    syntaxKind : SyntaxKind.DecimalLiteral,
    value : string,
}
