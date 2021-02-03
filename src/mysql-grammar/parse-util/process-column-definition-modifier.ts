import {TextRange} from "../../parser-node";
import {ColumnDefinitionModifier} from "../custom-data";

export function createDefaultColumnDefinitionModifier () : Omit<ColumnDefinitionModifier, keyof TextRange> {
    return {
        autoIncrement : false,
        columnFormat : undefined,
        storage : undefined,
        defaultValue : undefined,

        /**
         * If `undefined`, it's nullable.
         */
        nullable : undefined,

        uniqueKey : false,
        primaryKey : false,
        comment : undefined,
        foreignKeyReferenceDefinition : undefined,

        onUpdate : undefined,

        checkDefinition : undefined,
    };
}
