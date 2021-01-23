import {Node, SyntaxKind} from "../../../parser-node";
import {Identifier} from "../../identifier";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7550
 */
export interface AlterSchemaUpgradeDataDirectoryNameStatement extends Node {
    syntaxKind : SyntaxKind.AlterSchemaUpgradeDataDirectoryNameStatement,

    /**
     * @todo Implement `SchemaIdentifier`?
     */
    schemaName : Identifier,
}
