import {AlterTableDropColumn, SyntaxKind} from "../../../../parser-node";
import {TokenKind} from "../../../../scanner";
import {makeCustomRule} from "../../../factory";
import {optional, union} from "../../../../nearley-wrapper";
import {getTextRange, toValueNode} from "../../../parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8208
 */
makeCustomRule(SyntaxKind.AlterTableDropColumn)
    .addSubstitution(
        [
            TokenKind.DROP,
            optional(TokenKind.COLUMN),
            SyntaxKind.ColumnIdentifier,
            optional(union(
                TokenKind.RESTRICT,
                TokenKind.CASCADE,
            )),
        ] as const,
        (data) : AlterTableDropColumn => {
            const [
                ,
                ,
                columnIdentifier,
                dropMode,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterTableDropColumn,
                columnIdentifier,
                dropMode : (
                    dropMode == undefined ?
                    undefined :
                    toValueNode(
                        (
                            dropMode[0].tokenKind == TokenKind.RESTRICT ?
                            "RESTRICT" :
                            "CASCADE"
                        ),
                        getTextRange(dropMode)
                    )
                ),
            };
        }
    )
