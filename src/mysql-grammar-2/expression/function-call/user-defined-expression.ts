import {field, seq} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10049
 */
export const UserDefinedExpression = seq(
    field("expression", SyntaxKind.Expression),
    field("alias", SyntaxKind.Alias),
);
