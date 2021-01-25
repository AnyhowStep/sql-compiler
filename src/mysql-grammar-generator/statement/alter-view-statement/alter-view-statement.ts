import {AlterViewStatement, SyntaxKind, ViewAlgorithm, ViewCheckOption, ViewSecurityContext} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional, union} from "../../../nearley-wrapper";
import {getTextRange, toValueNode} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.AlterViewStatement)
    .addSubstitution(
        [
            TokenKind.ALTER,
            optional([
                TokenKind.ALGORITHM,
                TokenKind.Equal,
                union(
                    TokenKind.UNDEFINED,
                    TokenKind.MERGE,
                    TokenKind.TEMPTABLE,
                ),
            ] as const),
            optional([
                TokenKind.DEFINER,
                TokenKind.Equal,
                CustomSyntaxKind.AccountIdentifierOrCurrentUser,
            ] as const),
            optional([
                TokenKind.SQL,
                TokenKind.SECURITY,
                union(
                    TokenKind.DEFINER,
                    TokenKind.INVOKER,
                ),
            ] as const),
            TokenKind.VIEW,
            SyntaxKind.TableIdentifier,
            optional(SyntaxKind.IdentifierList),
            TokenKind.AS,
            CustomSyntaxKind.SelectStatement,
            optional([
                TokenKind.WITH,
                optional(union(
                    TokenKind.CASCADED,
                    TokenKind.LOCAL,
                )),
                TokenKind.CHECK,
                TokenKind.OPTION,
            ] as const),
        ] as const,
        (data) : AlterViewStatement => {
            const [
                ,
                algorithm,
                definer,
                viewSecurityContext,
                ,
                tableIdentifier,
                columns,
                ,
                selectStatement,
                checkOption,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterViewStatement,

                algorithm : (
                    algorithm == undefined ?
                    undefined :
                    toValueNode(
                        (
                            algorithm[2][0].tokenKind == TokenKind.MERGE ?
                            ViewAlgorithm.MERGE :
                            algorithm[2][0].tokenKind == TokenKind.TEMPTABLE ?
                            ViewAlgorithm.TEMPTABLE :
                            ViewAlgorithm.UNDEFINED
                        ),
                        getTextRange(algorithm[2])
                    )
                ),
                definer : (
                    definer == undefined ?
                    undefined :
                    definer[2]
                ),
                viewSecurityContext : (
                    viewSecurityContext == undefined ?
                    undefined :
                    toValueNode(
                        (
                            viewSecurityContext[2][0].tokenKind == TokenKind.DEFINER ?
                            ViewSecurityContext.DEFINER :
                            ViewSecurityContext.INVOKER
                        ),
                        getTextRange(viewSecurityContext[2])
                    )
                ),
                tableIdentifier,
                columns : columns ?? undefined,
                selectStatement,
                checkOption : (
                    checkOption == undefined ?
                    undefined :
                    toValueNode(
                        (
                            checkOption[1] == undefined ?
                            ViewCheckOption.CASCADED :
                            checkOption[1][0].tokenKind == TokenKind.CASCADED ?
                            ViewCheckOption.CASCADED :
                            ViewCheckOption.LOCAL
                        ),
                        getTextRange(checkOption)
                    )
                ),
            };
        }
    );
