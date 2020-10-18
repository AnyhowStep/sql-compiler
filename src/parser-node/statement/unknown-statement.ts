import {SyntaxKind} from "../syntax-kind.generated";
import {Statement} from "./statement";

export interface UnknownStatement extends Statement {
    readonly syntaxKind : SyntaxKind.UnknownStatement,
}
