import {GrantUser, GrantUserList, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional, union, zeroOrMore} from "../../../nearley-wrapper";
import {makeCustomRule} from "../../factory";
import {getTextRange, toNodeArray, toValueNode} from "../../parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L14484
 */
makeCustomRule(SyntaxKind.GrantUser)
    .addSubstitution(
        [
            SyntaxKind.AccountIdentifier,
        ] as const,
        (data) : GrantUser => {
            const end = data[0].end;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.GrantUser,
                accountIdentifier : data[0],
                authenticationPlugin : undefined,
                identifiedByPasswordToken : undefined,
                password : {
                    start : end,
                    end : end,
                    syntaxKind : SyntaxKind.StringLiteral,
                    value : "",
                    sourceText : `''`,
                },
            }
        }
    )
    .addSubstitution(
        [
            SyntaxKind.AccountIdentifier,
            TokenKind.IDENTIFIED,
            TokenKind.BY,
            /**
             * @todo
             * The `IDENTIFIED BY PASSWORD` syntax is deprecated.
             * Use `IDENTIFIED BY` instead.
             */
            optional(TokenKind.PASSWORD),
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : GrantUser => {
            const [
                accountIdentifier,
                identifiedToken,
                ,
                passwordToken,
                password,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.GrantUser,
                accountIdentifier,
                authenticationPlugin : undefined,
                identifiedByPasswordToken : (
                    passwordToken == undefined ?
                    undefined :
                    toValueNode(
                        "IDENTIFIED BY PASSWORD",
                        getTextRange([identifiedToken, passwordToken])
                    )
                ),
                password,
            }
        }
    )
    .addSubstitution(
        [
            SyntaxKind.AccountIdentifier,
            TokenKind.IDENTIFIED,
            TokenKind.WITH,
            union(SyntaxKind.Identifier, SyntaxKind.StringLiteral),
            optional([
                union(
                    TokenKind.AS,
                    TokenKind.BY,
                ),
                SyntaxKind.StringLiteral,
            ] as const),
        ] as const,
        (data) : GrantUser => {
            const [
                accountIdentifier,
                ,
                ,
                authenticationPlugin,
                password,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.GrantUser,
                accountIdentifier,
                authenticationPlugin : authenticationPlugin[0],
                identifiedByPasswordToken : undefined,
                password : (
                    password == undefined ?
                    {
                        start : authenticationPlugin[0].end,
                        end : authenticationPlugin[0].end,
                        syntaxKind : SyntaxKind.StringLiteral,
                        value : "",
                        sourceText : `''`,
                    } :
                    password[1]
                ),
            }
        }
    )

makeCustomRule(SyntaxKind.GrantUserList)
    .addSubstitution(
        [
            SyntaxKind.GrantUser,
            zeroOrMore([
                TokenKind.Comma,
                SyntaxKind.GrantUser,
            ] as const),
        ] as const,
        (data) : GrantUserList => {
            const arr = data
                .flat(2)
                .filter((item) : item is GrantUser => {
                    return "syntaxKind" in item
                })
            return toNodeArray(
                arr,
                SyntaxKind.GrantUserList,
                getTextRange(data)
            )
        }
    )
