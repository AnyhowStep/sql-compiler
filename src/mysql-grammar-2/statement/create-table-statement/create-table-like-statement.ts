import {field, seq, optional, repeat} from "../../../grammar-builder";
import {parentheses} from "../../rule-util";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5084
 */
export const CreateTableLikeStatement = seq(
    field("createToken", TokenKind.CREATE),
    field("temporaryToken", repeat(TokenKind.TEMPORARY)),
    field("tableToken", TokenKind.TABLE),
    field("ifNotExists", optional(SyntaxKind.IfNotExists)),
    field("tableIdentifier", SyntaxKind.TableIdentifier),
    field("likeToken", TokenKind.LIKE),
    field("sourceTableIdentifier", SyntaxKind.TableIdentifier),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5099
 */
export const CreateTableLikeStatement2 = seq(
    field("createToken", TokenKind.CREATE),
    field("temporaryToken", repeat(TokenKind.TEMPORARY)),
    field("tableToken", TokenKind.TABLE),
    field("ifNotExists", optional(SyntaxKind.IfNotExists)),
    field("tableIdentifier", SyntaxKind.TableIdentifier),
    parentheses(seq(
        field("likeToken", TokenKind.LIKE),
        field("sourceTableIdentifier", SyntaxKind.TableIdentifier),
    )),
);
