import {Identifier} from "../identifier";
import {SyntaxKind} from "../syntax-kind.generated";
import {Statement} from "./statement";

export interface CreateSchemaStatement extends Statement {
    readonly syntaxKind : SyntaxKind.CreateSchemaStatement,
    readonly ifNotExists : boolean,
    readonly schemaName : Identifier,
    readonly characterSet : Identifier|undefined,
    readonly collate : Identifier|undefined,
}
