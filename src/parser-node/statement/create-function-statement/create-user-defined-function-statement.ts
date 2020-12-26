import {Identifier} from "../../identifier";
import {SyntaxKind} from "../../syntax-kind.generated";
import {Statement} from "../statement";
import {ValueNode} from "../../node";
import {StringLiteral} from "../../expression";

/**
 * https://dev.mysql.com/doc/refman/5.7/en/create-function-udf.html
 * > DECIMAL is a legal value after RETURNS,
 * > but currently DECIMAL functions return string values
 * > and should be written like STRING functions.
 *
 * @todo Add some way to specify other data types like,
 * + `BOOLEAN`
 * + `JSON`
 * + Spatial data types
 * + etc.
 */
export enum UserDefinedFunctionReturnType {
    STRING,
    INTEGER,
    REAL,
    DECIMAL,
}

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L15187
 *
 * @todo Add some way to specify parameter lists
 * @todo Add some way to specify overloads
 */
export interface CreateUserDefinedFunctionStatement extends Statement {
    syntaxKind : SyntaxKind.CreateUserDefinedFunctionStatement,

    aggregate : ValueNode<boolean>,
    /**
     * https://dev.mysql.com/doc/refman/5.7/en/create-procedure.html
     *
     * > Stored functions share their namespace with UDFs.
     *
     * https://dev.mysql.com/doc/refman/5.7/en/function-resolution.html
     * > User-defined functions and stored functions share the same namespace,
     * > so you cannot create a UDF and a stored function with the same name.
     */
    identifier : Identifier,
    returnType : ValueNode<UserDefinedFunctionReturnType>,

    sharedLibraryName : StringLiteral,
}
