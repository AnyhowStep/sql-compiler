import {TableIdentifier} from "../../identifier/table-identifier";
import {SyntaxKind} from "../../syntax-kind.generated";
import {CreateTableDefinitionList} from "../create-table-definition";
import {CreateTableOptions} from "../create-table-options";
import {Partition} from "../partition";
import {Statement} from "../statement";
import {CreateTableSelect} from "./create-table-select";

export interface CreateTableSelectStatement extends Statement {
    syntaxKind : SyntaxKind.CreateTableSelectStatement,
    temporary : boolean,
    ifNotExists : boolean,
    tableIdentifier : TableIdentifier,

    /**
     *
     * May be `undefined`,
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5081
     */
    createTableDefinitions : CreateTableDefinitionList|undefined,
    createTableOptions : CreateTableOptions,
    partition : Partition|undefined,

    createTableSelect : CreateTableSelect,
}
