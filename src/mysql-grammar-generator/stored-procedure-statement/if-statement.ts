import {ElseBranch, ElseIf, ElseIfList, IfStatement, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {optional, oneOrMore} from "../../nearley-wrapper";
import {getTextRange, toNodeArray, toValueNode} from "../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4142
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4062
 */
makeCustomRule(SyntaxKind.ElseIf)
    .addSubstitution(
        [
            TokenKind.ELSEIF,
            CustomSyntaxKind.Expression,
            TokenKind.THEN,
            SyntaxKind.StoredProcedureStatementList,
        ] as const,
        (data) : ElseIf => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.ElseIf,
                elseIfToken : toValueNode(
                    "ELSEIF",
                    getTextRange(data[0]),
                ),
                expr : data[1],
                statements : data[3],
            };
        }
    );

makeCustomRule(SyntaxKind.ElseIfList)
    .addSubstitution(
        [
            oneOrMore(SyntaxKind.ElseIf)
        ] as const,
        (data) : ElseIfList => {
            return toNodeArray(
                data[0],
                SyntaxKind.ElseIfList,
                getTextRange(data)
            )
        }
    )

makeCustomRule(SyntaxKind.ElseBranch)
    .addSubstitution(
        [
            TokenKind.ELSE,
            SyntaxKind.StoredProcedureStatementList,
        ] as const,
        (data) : ElseBranch => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.ElseBranch,
                elseToken : toValueNode(
                    "ELSE",
                    getTextRange(data[0]),
                ),
                statements : data[1],
            };
        }
    );

makeCustomRule(SyntaxKind.IfStatement)
    .addSubstitution(
        [
            TokenKind.IF,
            CustomSyntaxKind.Expression,
            TokenKind.THEN,
            SyntaxKind.StoredProcedureStatementList,
            optional(SyntaxKind.ElseIfList),
            optional(SyntaxKind.ElseBranch),
            TokenKind.END,
            TokenKind.IF,
        ] as const,
        (data) : IfStatement => {
            const [
                ,
                expr,
                ,
                statements,
                elseIfs,
                elseBranch,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.IfStatement,
                ifToken : toValueNode(
                    "IF",
                    getTextRange(data[0]),
                ),
                expr,
                statements,
                elseIfs : elseIfs ?? undefined,
                elseBranch : elseBranch ?? undefined,
            };
        }
    );
