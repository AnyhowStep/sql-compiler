import {CreateServerStatement, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {union} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {makeCustomRule} from "../../factory";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2383
 */
makeCustomRule(SyntaxKind.CreateServerStatement)
    .addSubstitution(
        [
            TokenKind.CREATE,
            TokenKind.SERVER,
            union(
                SyntaxKind.Identifier,
                SyntaxKind.StringLiteral,
            ),

            TokenKind.FOREIGN,
            TokenKind.DATA,
            TokenKind.WRAPPER,
            union(
                SyntaxKind.Identifier,
                SyntaxKind.StringLiteral,
            ),

            TokenKind.OPTIONS,
            TokenKind.OpenParentheses,
            SyntaxKind.CreateServerOptions,
            TokenKind.CloseParentheses,
        ] as const,
        (data) : CreateServerStatement => {
            const [
                ,
                ,
                serverName,

                ,
                ,
                ,
                foreignDataWrapper,

                ,
                ,
                createServerOptions,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CreateServerStatement,

                serverName : serverName[0],
                foreignDataWrapper : foreignDataWrapper[0],
                createServerOptions,
            };
        }
    );
