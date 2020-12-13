import {Identifier, TableIdentifier} from "../../identifier";
import {Node} from "../../node";
import {NodeArray} from "../../node-array";
import {SyntaxKind} from "../../syntax-kind.generated";
import {IndexHintDefinition} from "./index-hint-definition";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10528
 */
export interface NamedTableFactor extends Node {
    syntaxKind : SyntaxKind.NamedTableFactor,

    tableIdentifier : TableIdentifier;

    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10512
     */
    usedPartitions : NodeArray<Identifier>|undefined;

    alias : Identifier|undefined;

    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10648
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10633
     */
    indexHintDefinitions : NodeArray<IndexHintDefinition>|undefined,
}
