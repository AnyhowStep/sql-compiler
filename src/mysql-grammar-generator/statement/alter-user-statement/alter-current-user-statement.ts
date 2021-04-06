import {AlterCurrentUserStatement, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.AlterCurrentUserStatement)
    .addSubstitution(
        [
            TokenKind.ALTER,
            TokenKind.USER,
            optional([TokenKind.IF, TokenKind.EXISTS] as const),

            TokenKind.USER,
            TokenKind.OpenParentheses,
            TokenKind.CloseParentheses,

            TokenKind.IDENTIFIED,
            TokenKind.BY,
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : AlterCurrentUserStatement => {
            const [
                ,
                ,
                ifExists,

                ,
                ,
                ,

                ,
                ,
                identifiedBy,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterCurrentUserStatement,
                ifExists : ifExists != undefined,
                identifiedBy,
            }
        }
    )
