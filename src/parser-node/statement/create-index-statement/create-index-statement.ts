import {IntegerLiteral, StringLiteral} from "../../expression";
import {Identifier, TableIdentifier} from "../../identifier";
import {Node, ValueNode} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {IndexClass, IndexPartList, IndexType} from "../create-table-definition";
import {AlterTableLockAndAlgorithmOptions} from "./alter-table-lock-and-algorithm-options";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/create-index.html
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2313
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2324
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2336
 */
export interface CreateIndexStatement extends Node {
    syntaxKind : SyntaxKind.CreateIndexStatement;

    indexClass : IndexClass;
    indexName : Identifier;

    tableIdentifier : TableIdentifier,

    indexParts : IndexPartList;

    /**
     * BTREE is the default
     */
    indexType : ValueNode<IndexType>|undefined;
    keyBlockSize : IntegerLiteral|undefined;
    comment : StringLiteral|undefined;
    withParser : Identifier|undefined;

    alterTableLockAndAlgorithmOptions : AlterTableLockAndAlgorithmOptions;
}
