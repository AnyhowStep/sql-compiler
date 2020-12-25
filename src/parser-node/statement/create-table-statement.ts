import {TableIdentifier} from "../identifier/table-identifier";
import {SyntaxKind} from "../syntax-kind.generated";
import {CreateTableDefinitionList} from "./create-table-definition";
import {CreateTableOptions} from "./create-table-options";
import {Partition} from "./partition";
import {Statement} from "./statement";

export interface CreateTableStatement extends Statement {
    syntaxKind : SyntaxKind.CreateTableStatement,
    temporary : boolean,
    ifNotExists : boolean,
    tableIdentifier : TableIdentifier,
    createTableDefinitions : CreateTableDefinitionList,
    createTableOptions : CreateTableOptions,
    partition : Partition|undefined,
}
