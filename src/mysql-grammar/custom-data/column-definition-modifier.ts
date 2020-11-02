import {ColumnFormat, Expression, ForeignKeyReferenceDefinition, Storage, StringLiteral, TextRange} from "../../parser-node";

export interface ColumnDefinitionModifier extends TextRange {
    autoIncrement : boolean,
    columnFormat : ColumnFormat|undefined,
    storage : Storage|undefined,
    defaultValue : Expression|undefined,

    nullable : boolean,

    uniqueKey : boolean,
    primaryKey : boolean,

    comment : StringLiteral|undefined,
    foreignKeyReferenceDefinition : ForeignKeyReferenceDefinition|undefined,
}