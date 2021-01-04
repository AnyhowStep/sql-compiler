import {Identifier} from "../../identifier";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {CreateLogFileGroupAddFile} from "./create-log-file-group-add-file";
import {CreateLogFileGroupOptions} from "./create-log-file-group-options";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2375
 *
 * https://dev.mysql.com/doc/refman/5.7/en/create-logfile-group.html
 */
export interface CreateLogFileGroupStatement extends Node {
    syntaxKind : SyntaxKind.CreateLogFileGroupStatement,

    identifier : Identifier,

    /**
     * Exactly one of `undoFile` or `redoFile` must be specified
     */
    addFile : CreateLogFileGroupAddFile,

    createLogFileGroupOptions : CreateLogFileGroupOptions,
}
