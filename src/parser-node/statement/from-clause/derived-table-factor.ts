import {Identifier} from "../../identifier";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {Select, Union, UnionOrderLimit} from "../select-statement";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10554
 *
 * ```sql
 *  -- This is actually allowed but I'm going to pretend I didn't see this for now
 *  SELECT 1 FROM ({ lmao SELECT 2}) AS tmp;
 * ```
 */
export interface DerivedTableFactor extends Node {
    syntaxKind : SyntaxKind.DerivedTableFactor,

    select : Select|Union|UnionOrderLimit,
    alias : Identifier;
}
