import {Identifier} from "../identifier";
import {SyntaxKind} from "../syntax-kind.generated";
import {Statement} from "./statement";

export interface CreateSchemaStatement extends Statement {
    readonly syntaxKind : SyntaxKind.CreateSchemaStatement,
    readonly ifNotExists : boolean,
    readonly schemaName : Identifier,
    readonly collate : Identifier|undefined,
    readonly characterSet : Identifier|undefined,
}
