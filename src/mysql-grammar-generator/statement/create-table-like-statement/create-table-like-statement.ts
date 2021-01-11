import {CreateTableLikeStatement, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.CreateTableLikeStatement)
    .addSubstitution(
        [
            TokenKind.CREATE,
            optional(TokenKind.TEMPORARY),
            TokenKind.TABLE,
            optional([TokenKind.IF, TokenKind.NOT, TokenKind.EXISTS]),
            SyntaxKind.TableIdentifier,

            TokenKind.LIKE,
            SyntaxKind.TableIdentifier,
        ] as const,
        (data) : CreateTableLikeStatement => {
            const [
                ,
                temporary,
                ,
                ifNotExists,
                tableIdentifier,
                ,
                likeTableIdentifier,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CreateTableLikeStatement,
                temporary : temporary != null,
                ifNotExists : ifNotExists != null,
                tableIdentifier,
                likeTableIdentifier,
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.CREATE,
            optional(TokenKind.TEMPORARY),
            TokenKind.TABLE,
            optional([TokenKind.IF, TokenKind.NOT, TokenKind.EXISTS]),
            SyntaxKind.TableIdentifier,

            TokenKind.OpenParentheses,
            TokenKind.LIKE,
            SyntaxKind.TableIdentifier,
            TokenKind.CloseParentheses,
        ] as const,
        (data) : CreateTableLikeStatement => {
            const [
                ,
                temporary,
                ,
                ifNotExists,
                tableIdentifier,
                ,
                ,
                likeTableIdentifier,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CreateTableLikeStatement,
                temporary : temporary != null,
                ifNotExists : ifNotExists != null,
                tableIdentifier,
                likeTableIdentifier,
            };
        }
    );
