import {AlterTableDropIndex, SyntaxKind} from "../../../../parser-node";
import {TokenKind} from "../../../../scanner";
import {makeCustomRule} from "../../../factory";
import {union} from "../../../../nearley-wrapper";
import {getTextRange} from "../../../parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8235
 */
makeCustomRule(SyntaxKind.AlterTableDropIndex)
    .addSubstitution(
        [
            TokenKind.DROP,
            union(
                TokenKind.INDEX,
                TokenKind.KEY,
            ),
            SyntaxKind.ColumnIdentifier,
        ] as const,
        (data) : AlterTableDropIndex => {
            const [
                ,
                ,
                indexIdentifier,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterTableDropIndex,
                indexIdentifier,
            };
        }
    )
