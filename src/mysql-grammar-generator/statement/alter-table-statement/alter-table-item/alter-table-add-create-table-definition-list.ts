import {AlterTableAddCreateTableDefinitionList, SyntaxKind} from "../../../../parser-node";
import {TokenKind} from "../../../../scanner";
import {makeCustomRule} from "../../../factory";
import {optional} from "../../../../nearley-wrapper";
import {getTextRange} from "../../../parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8161
 */
makeCustomRule(SyntaxKind.AlterTableAddCreateTableDefinitionList)
    .addSubstitution(
        [
            TokenKind.ADD,
            optional(TokenKind.COLUMN),
            SyntaxKind.CreateTableDefinitionList,
        ] as const,
        (data) : AlterTableAddCreateTableDefinitionList => {
            const [
                ,
                ,
                createTableDefinitionList,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterTableAddCreateTableDefinitionList,
                createTableDefinitionList,
            };
        }
    )
