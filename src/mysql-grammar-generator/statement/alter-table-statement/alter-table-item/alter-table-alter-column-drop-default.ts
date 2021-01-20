import {AlterTableAlterColumnDropDefault, SyntaxKind} from "../../../../parser-node";
import {TokenKind} from "../../../../scanner";
import {makeCustomRule} from "../../../factory";
import {optional} from "../../../../nearley-wrapper";
import {getTextRange} from "../../../parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8265
 */
makeCustomRule(SyntaxKind.AlterTableAlterColumnDropDefault)
    .addSubstitution(
        [
            TokenKind.ALTER,
            optional(TokenKind.COLUMN),
            SyntaxKind.ColumnIdentifier,
            TokenKind.DROP,
            TokenKind.DEFAULT,
        ] as const,
        (data) : AlterTableAlterColumnDropDefault => {
            const [
                ,
                ,
                columnIdentifier,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterTableAlterColumnDropDefault,
                columnIdentifier,
            };
        }
    )
