import {SyntaxKind} from "../syntax-kind.generated";
import {Expression} from "./expression";

export interface HexLiteral extends Expression {
    syntaxKind : SyntaxKind.HexLiteral,
    value : string,
    sourceText : string,
}
