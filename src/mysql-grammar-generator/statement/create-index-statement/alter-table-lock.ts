import {AlterTableLock, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional} from "../../../nearley-wrapper";
import {makeCustomRule} from "../../factory";
import {getTextRange} from "../../parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8389
 */
makeCustomRule(SyntaxKind.AlterTableLock)
    .addSubstitution(
        [
            TokenKind.LOCK,
            optional(TokenKind.Equal),
            SyntaxKind.Identifier,
        ] as const,
        (data) : AlterTableLock => {
            const [
                ,
                ,
                identifier,
            ] = data;

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterTableLock,
                identifier : (
                    identifier.quoted ?
                    identifier :
                    identifier.identifier.toUpperCase() == "DEFAULT" ?
                    {
                        ...identifier,
                        syntacticErrors : undefined,
                    } :
                    identifier
                ),
            };
        }
    )
