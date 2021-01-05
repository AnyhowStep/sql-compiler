import {SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {getTextRange} from "../../parse-util";
import {CreateServerOption} from "../../custom-data";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2404
 */
makeCustomRule(CustomSyntaxKind.CreateServerOption)
    .addSubstitution(
        [
            TokenKind.HOST,
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : CreateServerOption => {
            return {
                ...getTextRange(data),
                host : data[1],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.DATABASE,
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : CreateServerOption => {
            return {
                ...getTextRange(data),
                database : data[1],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.USER,
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : CreateServerOption => {
            return {
                ...getTextRange(data),
                user : data[1],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.PASSWORD,
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : CreateServerOption => {
            return {
                ...getTextRange(data),
                password : data[1],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.SOCKET,
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : CreateServerOption => {
            return {
                ...getTextRange(data),
                socket : data[1],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.OWNER,
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : CreateServerOption => {
            return {
                ...getTextRange(data),
                owner : data[1],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.PORT,
            SyntaxKind.IntegerLiteral,
        ] as const,
        (data) : CreateServerOption => {
            return {
                ...getTextRange(data),
                port : data[1],
            };
        }
    )
