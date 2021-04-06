import {TableIdentifierList} from "../../identifier";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/analyze-table.html
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8739-L8759
 */
export interface AnalyzeTableStatement extends Node {
    syntaxKind : SyntaxKind.AnalyzeTableStatement,

    /**
     * Defaults to `false`.
     *
     * `NO_WRITE_TO_BINLOG` and `LOCAL` are synonyms.
     */
    noWriteToBinLog : boolean,

    tableIdentifierList : TableIdentifierList,

}
