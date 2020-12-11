import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9161
 */
export interface SelectOptions extends Node {
    syntaxKind : SyntaxKind.SelectOptions;

    /**
     * Defaults to `false`
     */
    distinct : boolean|undefined,
    highPriority : boolean,
    straightJoin : boolean,
    sqlSmallResult : boolean,
    sqlBigResult : boolean,
    sqlBufferResult : boolean,
    sqlCache : boolean|undefined,
    sqlCalcFoundRows : boolean,
}
