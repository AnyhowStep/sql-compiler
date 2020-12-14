import {SyntaxKind} from "../syntax-kind.generated";
import {Expression} from "./expression";

/**
 * https://dev.mysql.com/doc/refman/8.0/en/user-variables.html
 */
export interface UserVariableIdentifier extends Expression {
    syntaxKind : SyntaxKind.UserVariableIdentifier,
    identifier : string,
    sourceText : string,
}
