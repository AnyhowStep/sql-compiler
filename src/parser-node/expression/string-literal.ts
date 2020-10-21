import {SyntaxKind} from "../syntax-kind.generated";
import {Expression} from "./expression";

export interface StringLiteral extends Expression {
    syntaxKind : SyntaxKind.StringLiteral,
    value : string,
    sourceText : string,
}
