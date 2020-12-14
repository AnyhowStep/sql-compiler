import {ProcedureAnalyseClause, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {makeCustomRule} from "../../factory";
import {getTextRange} from "../../parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L11026
 */
makeCustomRule(SyntaxKind.ProcedureAnalyseClause)
    .addSubstitution(
        [
            TokenKind.PROCEDURE,
            TokenKind.ANALYSE,
            TokenKind.OpenParentheses,
            TokenKind.CloseParentheses,
        ] as const,
        (data) : ProcedureAnalyseClause => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.ProcedureAnalyseClause,

                args : undefined,
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.PROCEDURE,
            TokenKind.ANALYSE,
            TokenKind.OpenParentheses,
            SyntaxKind.IntegerLiteral,
            TokenKind.CloseParentheses,
        ] as const,
        (data) : ProcedureAnalyseClause => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.ProcedureAnalyseClause,

                args : {
                    maxElements : data[3],
                    maxMemory : undefined,
                },
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.PROCEDURE,
            TokenKind.ANALYSE,
            TokenKind.OpenParentheses,
            SyntaxKind.IntegerLiteral,
            TokenKind.Comma,
            SyntaxKind.IntegerLiteral,
            TokenKind.CloseParentheses,
        ] as const,
        (data) : ProcedureAnalyseClause => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.ProcedureAnalyseClause,

                args : {
                    maxElements : data[3],
                    maxMemory : data[5],
                },
            };
        }
    )
