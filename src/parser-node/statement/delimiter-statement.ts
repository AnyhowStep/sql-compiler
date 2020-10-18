import {SyntaxKind} from "../syntax-kind.generated";
import {Statement} from "./statement";

export interface DelimiterStatement extends Statement {
    syntaxKind : SyntaxKind.DelimiterStatement,
    /**
     * This is the custom delimiter the delimiter statement is setting
     */
    customDelimiter : string,
}
