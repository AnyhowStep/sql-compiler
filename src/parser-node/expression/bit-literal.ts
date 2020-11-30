import {SyntaxKind} from "../syntax-kind.generated";
import {Expression} from "./expression";

export interface BitLiteral extends Expression {
    syntaxKind : SyntaxKind.BitLiteral,
    value : string,
    sourceText : string,
}
