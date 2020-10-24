import {SyntaxKind} from "../syntax-kind.generated";
import {Expression} from "./expression";

export interface RealLiteral extends Expression {
    syntaxKind : SyntaxKind.RealLiteral,
    value : number,
    sourceText : string,
}
