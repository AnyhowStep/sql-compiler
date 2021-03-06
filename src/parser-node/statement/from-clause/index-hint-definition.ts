import {Node} from "../../node";
import {NodeArray2} from "../../node-array";
import {SyntaxKind} from "../../syntax-kind.generated";
import {KeyUsageList} from "./key-usage-list";

export enum IndexHintType {
    FORCE,
    IGNORE,
    USE,
}

export enum IndexHintClause {
    JOIN,
    ORDER_BY,
    GROUP_BY,
    ALL,
}

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10633
 */
export interface IndexHintDefinition extends Node {
    syntaxKind : SyntaxKind.IndexHintDefinition,

    indexHintType : IndexHintType,

    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10618
     */
    indexHintClause : IndexHintClause,

    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10635
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10677
     */
    indexes : KeyUsageList,

}

export interface IndexHintDefinitionList extends NodeArray2<SyntaxKind.IndexHintDefinitionList, IndexHintDefinition> {

}
