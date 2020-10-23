import {Identifier} from "../identifier";
import {DefaultCharacterSet, DefaultCollation} from "../misc";
import {NodeArray} from "../node-array";
import {SyntaxKind} from "../syntax-kind.generated";
import {Statement} from "./statement";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5877
 */
export type CreateSchemaOption =
    | DefaultCharacterSet
    | DefaultCollation
;

export interface CreateSchemaOptionList extends NodeArray<CreateSchemaOption> {
    syntaxKind : SyntaxKind.CreateSchemaOptionList;
}

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2348
 */
export interface CreateSchemaStatement extends Statement {
    syntaxKind : SyntaxKind.CreateSchemaStatement,
    ifNotExists : boolean,
    schemaName : Identifier,

    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5867
     */
    createSchemaOptions : CreateSchemaOptionList,
}
