import {CheckDefinition, ColumnFormat, CurrentTimestamp, Expression, ForeignKeyReferenceDefinition, Storage, StringLiteral, SyntacticErrorContainer, TextRange} from "../../parser-node";

export interface ColumnDefinitionModifier extends TextRange {
    autoIncrement : boolean,
    columnFormat : ColumnFormat|undefined,
    storage : Storage|undefined,
    defaultValue : Expression|undefined,

    nullable : (TextRange & { nullable : boolean })|undefined,

    uniqueKey : boolean,
    primaryKey : boolean,

    comment : StringLiteral|undefined,
    foreignKeyReferenceDefinition : ForeignKeyReferenceDefinition|undefined,

    onUpdate : CurrentTimestamp|undefined,
    checkDefinition : CheckDefinition|undefined,
}

type MakeColumnDefinitionModifierOption<T, K extends keyof T = Exclude<keyof T, keyof TextRange>> =
    K extends keyof T ?
    Pick<T, K> :
    never
;

export type ColumnDefinitionModifierOption = MakeColumnDefinitionModifierOption<ColumnDefinitionModifier> & TextRange & SyntacticErrorContainer
