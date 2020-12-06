import {TableIdentifier} from "../identifier/table-identifier";
import {NodeArray} from "../node-array";
import {SyntaxKind} from "../syntax-kind.generated";
import {CreateTableDefinition} from "./create-table-definition";
import {CreateTableOptions} from "./create-table-options";
import {Partition} from "./partition";
import {Statement} from "./statement";

export interface CreateTableStatement extends Statement {
    syntaxKind : SyntaxKind.CreateTableStatement,
    temporary : boolean,
    ifNotExists : boolean,
    tableIdentifier : TableIdentifier,
    createTableDefinitions : NodeArray<CreateTableDefinition>,
    createTableOptions : CreateTableOptions,
    partition : Partition|undefined,
}
