import {Node, SyntaxKind} from "../../../parser-node";
import {Identifier} from "../../identifier";
import {CreateSchemaOptionList} from "../create-schema-statement";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7536
 */
export interface AlterSchemaStatement extends Node {
    syntaxKind : SyntaxKind.AlterSchemaStatement,

    /**
     * @todo Implement `SchemaIdentifier`?
     *
     * If `undefined`, it defaults to the database selected by the current session
     */
    schemaName : Identifier|undefined,

    createSchemaOptions : CreateSchemaOptionList,
}
