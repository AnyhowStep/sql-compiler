import {DataType} from "../../data-type";
import {Expression, StringLiteral} from "../../expression";
import {ColumnIdentifier} from "../../identifier";
import {SyntaxKind} from "../../syntax-kind.generated";
import {CreateTableDefinition} from "./create-table-definition";
import {ForeignKeyReferenceDefinition} from "./foreign-key-reference-definition";
import {GeneratedDefinition} from "./generated-definition";

export enum ColumnFormat {
    FIXED,
    DYNAMIC,
    DEFAULT,
}

export enum Storage {
    DISK,
    MEMORY,
}

export interface ColumnDefinition extends CreateTableDefinition {
    syntaxKind : SyntaxKind.ColumnDefinition,
    columnIdentifier : ColumnIdentifier,
    dataType : DataType,

    /**
     * If `generated` is specified, you cannot specify,
     * + `autoIncrement`
     * + `columnFormat`
     * + `storage`
     * + `defaultValue`
     *
     * And `generated` **must** be specified before everything else.
     * Except `COLLATE`, which is a weird thing to have anyway,
     * since it should belong to the data type.
     */
    generated : GeneratedDefinition|undefined,
    autoIncrement : boolean,
    /**
     * Defaults to `ColumnFormat.DEFAULT`
     */
    columnFormat : ColumnFormat|undefined,
    storage : Storage|undefined,

    /**
     * https://dev.mysql.com/doc/refman/5.7/en/data-type-defaults.html
     *
     * With one exception, the default value specified in a DEFAULT clause must be a literal constant;
     * it cannot be a function or an expression.
     * This means, for example, that you cannot set the default for a date column to be the value
     * of a function such as NOW() or CURRENT_DATE.
     *
     * The exception is that, for TIMESTAMP and DATETIME columns,
     * you can specify CURRENT_TIMESTAMP as the default.
     *
     * See Section 11.2.6, “Automatic Initialization and Updating for TIMESTAMP and DATETIME”.
     *
     * The BLOB, TEXT, GEOMETRY, and JSON data types cannot be assigned a default value.
     */
    defaultValue : Expression|undefined,

    /**
     * These below can be specified, regardless of `generated`.
     */

    nullable : boolean,

    uniqueKey : boolean,
    /**
     * If `true`, then `nullable` is automatically set to `false`
     */
    primaryKey : boolean,

    comment : StringLiteral|undefined,

    /**
     * Must be at the very end. Also, this thing is... Ignored.
     * Why.
     *
     * ```sql
     *  CREATE TABLE T (
     *      X CHAR REFERENCES THIS_TABLE_DOES_NOT_EXIST (LOL)
     *  );
     * ```
     *
     * The above executes but does not even attempt to create a foreign key.
     * So, whether it is valid or not, it is useless.
     *
     * > MySQL parses but ignores “inline REFERENCES specifications” (as defined in the SQL standard)
     * > where the references are defined as part of the column specification.
     * > MySQL accepts REFERENCES clauses only when specified as part of a separate FOREIGN KEY specification.
     *
     * https://dev.mysql.com/doc/refman/5.7/en/create-table.html
     */
    foreignKeyReferenceDefinition : ForeignKeyReferenceDefinition|undefined,
}
