import {IntegerLiteral, StringLiteral} from "../../expression";
import {Identifier} from "../../identifier";
import {SizeNumber} from "../../misc/size-number";
import {Node, ValueNode} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4805
 */
export interface CreateLogFileGroupOptions extends Node {
    syntaxKind : SyntaxKind.CreateLogFileGroupOptions,

    /**
     * Defaults to `128M`
     *
     * Identifiers must have a certain format,
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5025
     *
     * > The minimum allowed value for `INITIAL_SIZE` is `1048576` (1 MB).
     */
    initialSize : SizeNumber,

    /**
     * Defaults to `8M`
     *
     * Identifiers must have a certain format,
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5025
     *
     * > The maximum permitted for `UNDO_BUFFER_SIZE` is `629145600` (600 MB).
     */
    undoBufferSize : SizeNumber,

    /**
     *
     * Identifiers must have a certain format,
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5025
     *
     * > `REDO_BUFFER_SIZE`, `NODEGROUP`, `WAIT`, and `COMMENT` are parsed but ignored,
     * > and so have no effect in MySQL 5.7.
     * > These options are intended for future expansion.
     */
    redoBufferSize : SizeNumber|undefined,

    /**
     * > `REDO_BUFFER_SIZE`, `NODEGROUP`, `WAIT`, and `COMMENT` are parsed but ignored,
     * > and so have no effect in MySQL 5.7.
     * > These options are intended for future expansion.
     */
    nodeGroup : IntegerLiteral|undefined,

    /**
     * Should only be `NDB` or `NDBCLUSTER`.
     * Otherwise, it is an error.
     *
     * If `undefined`, uses `default_storage_engine`
     */
    engine : Identifier|StringLiteral|undefined,

    /**
     * > `REDO_BUFFER_SIZE`, `NODEGROUP`, `WAIT`, and `COMMENT` are parsed but ignored,
     * > and so have no effect in MySQL 5.7.
     * > These options are intended for future expansion.
     *
     * @todo Using `NO_WAIT` twice without a `WAIT` in the middle is not allowed.
     */
    wait : ValueNode<boolean>|undefined,

    /**
     * > `REDO_BUFFER_SIZE`, `NODEGROUP`, `WAIT`, and `COMMENT` are parsed but ignored,
     * > and so have no effect in MySQL 5.7.
     * > These options are intended for future expansion.
     */
    comment : StringLiteral|undefined,
}
