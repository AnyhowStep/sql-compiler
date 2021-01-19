import {AlterTableChangeColumn, SyntaxKind} from "../../../../parser-node";
import {TokenKind} from "../../../../scanner";
import {makeCustomRule} from "../../../factory";
import {optional, union} from "../../../../nearley-wrapper";
import {getTextRange, toValueNode} from "../../../parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8171-L8177
 */
makeCustomRule(SyntaxKind.AlterTableChangeColumn)
    .addSubstitution(
        [
            TokenKind.CHANGE,
            optional(TokenKind.COLUMN),
            SyntaxKind.ColumnIdentifier,
            SyntaxKind.ColumnDefinition,
            optional(union(
                TokenKind.FIRST,
                [
                    TokenKind.AFTER,
                    SyntaxKind.Identifier,
                ] as const,
            )),
        ] as const,
        (data) : AlterTableChangeColumn => {
            const [
                ,
                ,
                oldColumnIdentifier,
                columnDefinition,
                placeAfter,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterTableChangeColumn,
                oldColumnIdentifier,
                columnDefinition,
                placeAfter : (
                    placeAfter == undefined ?
                    undefined :
                    placeAfter[0] instanceof Array ?
                    placeAfter[0][1] :
                    toValueNode(
                        "FIRST",
                        getTextRange(placeAfter)
                    )
                ),
            };
        }
    )
