import {CreateViewStatement, SyntaxKind, ViewAlgorithm, ViewCheckOption, ViewSecurityContext} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional, union} from "../../../nearley-wrapper";
import {getStart, getTextRange, toValueNode} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.CreateViewStatement)
    .addSubstitution(
        [
            TokenKind.CREATE,
            optional([
                TokenKind.OR,
                TokenKind.REPLACE,
            ] as const),
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
        (data) : CreateViewStatement => {
            const [
                ,
                createOrReplace,
                algorithm,
                definer,
                viewSecurityContext,
                viewToken,
                tableIdentifier,
                columns,
                ,
                selectStatement,
                checkOption,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CreateViewStatement,

                createOrReplace : (
                    createOrReplace == undefined ?
                    toValueNode(
                        false,
                        {
                            start : getStart([algorithm, definer, viewSecurityContext, viewToken]),
                            end : getStart([algorithm, definer, viewSecurityContext, viewToken]),
                        }
                    ) :
                    toValueNode(
                        true,
                        getTextRange(createOrReplace)
                    )
                ),
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
                    toValueNode(
                        "CURRENT_USER",
                        {
                            start : viewToken.start,
                            end : viewToken.start,
                        }
                    ) :
                    definer[2]
                ),
                viewSecurityContext : (
                    viewSecurityContext == undefined ?
                    toValueNode(
                        ViewSecurityContext.DEFINER,
                        {
                            start : viewToken.start,
                            end : viewToken.start,
                        }
                    ) :
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
