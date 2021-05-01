import {choice} from "../../grammar-builder";
import {SyntaxKind} from "../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9299
 *
 * @todo
 */
export const BooleanPrimaryExpression = choice(
    SyntaxKind.Predicate,
);
