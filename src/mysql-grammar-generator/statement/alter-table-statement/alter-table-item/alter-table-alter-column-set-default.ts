import {AlterTableAlterColumnSetDefault, SyntaxKind} from "../../../../parser-node";
import {TokenKind} from "../../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../../factory";
import {optional} from "../../../../nearley-wrapper";
import {getTextRange} from "../../../parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8256
 */
makeCustomRule(SyntaxKind.AlterTableAlterColumnSetDefault)
    .addSubstitution(
        [
            TokenKind.ALTER,
            optional(TokenKind.COLUMN),
            SyntaxKind.ColumnIdentifier,
            TokenKind.SET,
            TokenKind.DEFAULT,
            CustomSyntaxKind.Expression,
        ] as const,
        (data) : AlterTableAlterColumnSetDefault => {
            const [
                ,
                ,
                columnIdentifier,
                ,
                ,
                expr,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterTableAlterColumnSetDefault,
                columnIdentifier,
                expr,
            };
        }
    )
