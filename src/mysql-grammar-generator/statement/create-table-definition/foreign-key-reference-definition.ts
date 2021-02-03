import {ReferenceOption, ForeignKeyReferenceDefinition, ReferenceMatch, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {getTextRange, toValueNode} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional, union} from "../../../nearley-wrapper";
import {OnUpdateDelete} from "../../custom-data";

makeCustomRule(CustomSyntaxKind.ReferenceOption)
    .addSubstitution(
        [
            union(
                [TokenKind.RESTRICT] as const,
                [TokenKind.CASCADE] as const,
                [TokenKind.SET, TokenKind.NULL] as const,
                [TokenKind.NO, TokenKind.ACTION] as const,
                [TokenKind.SET, TokenKind.DEFAULT] as const,
            ),
        ] as const,
        (data) => {
            const tokens = data[0][0];
            return toValueNode(
                (
                    tokens.length == 1 ?
                    (
                        tokens[0].tokenKind == TokenKind.RESTRICT ?
                        ReferenceOption.RESTRICT :
                        ReferenceOption.CASCADE
                    ) :
                    (
                        tokens[1].tokenKind == TokenKind.NULL ?
                        ReferenceOption.SET_NULL :
                        tokens[1].tokenKind == TokenKind.ACTION ?
                        ReferenceOption.NO_ACTION :
                        ReferenceOption.SET_DEFAULT
                    )
                ),
                getTextRange(data)
            );
        }
    );

makeCustomRule(CustomSyntaxKind.OnUpdateDelete)
    .addSubstitution(
        [
            TokenKind.ON, TokenKind.UPDATE, CustomSyntaxKind.ReferenceOption,
            optional([
                TokenKind.ON, TokenKind.DELETE, CustomSyntaxKind.ReferenceOption,
            ] as const),
        ] as const,
        (data) : OnUpdateDelete => {
            return {
                ...getTextRange(data),
                onUpdate : data[2].value,
                onDelete : (
                    data[3] == undefined ?
                    undefined :
                    data[3][2].value
                ),
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.ON, TokenKind.DELETE, CustomSyntaxKind.ReferenceOption,
            optional([
                TokenKind.ON, TokenKind.UPDATE, CustomSyntaxKind.ReferenceOption,
            ] as const),
        ] as const,
        (data) : OnUpdateDelete => {
            return {
                ...getTextRange(data),
                onDelete : data[2].value,
                onUpdate : (
                    data[3] == undefined ?
                    undefined :
                    data[3][2].value
                ),
            };
        }
    );

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7228
 */
makeCustomRule(SyntaxKind.ForeignKeyReferenceDefinition)
    .addSubstitution(
        [
            TokenKind.REFERENCES,
            SyntaxKind.TableIdentifier,
            SyntaxKind.IdentifierList,
            optional(union(
                [TokenKind.MATCH, TokenKind.FULL] as const,
                [TokenKind.MATCH, TokenKind.PARTIAL] as const,
                [TokenKind.MATCH, TokenKind.SIMPLE] as const,
            )),
            optional(CustomSyntaxKind.OnUpdateDelete),
        ] as const,
        (data) : ForeignKeyReferenceDefinition => {
            const [, referencedTableName, referencedColumns, match, onUpdateDelete] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.ForeignKeyReferenceDefinition,
                referencedTableName,
                referencedColumns,
                match : (
                    match == undefined ?
                    undefined :
                    match[0][1].tokenKind == TokenKind.FULL ?
                    ReferenceMatch.FULL :
                    match[0][1].tokenKind == TokenKind.PARTIAL ?
                    ReferenceMatch.PARTIAL :
                    ReferenceMatch.SIMPLE
                ),
                onUpdate : (
                    onUpdateDelete == undefined ?
                    undefined :
                    onUpdateDelete.onUpdate
                ),
                onDelete : (
                    onUpdateDelete == undefined ?
                    undefined :
                    onUpdateDelete.onDelete
                ),
            };
        }
    )
