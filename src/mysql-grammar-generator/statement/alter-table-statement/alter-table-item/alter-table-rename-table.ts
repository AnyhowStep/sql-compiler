import {AlterTableRenameTable, SyntaxKind} from "../../../../parser-node";
import {TokenKind} from "../../../../scanner";
import {makeCustomRule} from "../../../factory";
import {optional, union} from "../../../../nearley-wrapper";
import {getTextRange} from "../../../parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8274
 */
makeCustomRule(SyntaxKind.AlterTableRenameTable)
    .addSubstitution(
        [
            TokenKind.RENAME,
            optional(union(
                TokenKind.TO,
                TokenKind.Equal,
                TokenKind.AS,
            )),
            SyntaxKind.TableIdentifier,
        ] as const,
        (data) : AlterTableRenameTable => {
            const [
                ,
                ,
                newTableIdentifier,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterTableRenameTable,
                newTableIdentifier,
            };
        }
    )
