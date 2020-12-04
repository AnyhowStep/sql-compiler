import {ReferenceOption, ForeignKeyReferenceDefinition, ReferenceMatch, SyntaxKind, TextRange} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {getTextRange} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule, makeRule} from "../../factory";
import {optional, union} from "../../../nearley-wrapper";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7275
 */
interface OnUpdateDelete extends TextRange {
    onDelete : ReferenceOption|undefined,
    onUpdate : ReferenceOption|undefined,
}
const referenceOptionRule = makeRule<TextRange & { referenceOption : ReferenceOption }>("ReferenceOption")
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
        (data) : TextRange & { referenceOption : ReferenceOption } => {
            const tokens = data[0][0];
            return {
                ...getTextRange(data),
                referenceOption : (
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
            };
        }
    );

const onUpdateDeleteRule = makeRule<OnUpdateDelete>("OnUpdateDelete")
    .addSubstitution(
        [
            TokenKind.ON, TokenKind.UPDATE, referenceOptionRule,
            optional([
                TokenKind.ON, TokenKind.DELETE, referenceOptionRule,
            ] as const),
        ] as const,
        (data) : OnUpdateDelete => {
            return {
                ...getTextRange(data),
                onUpdate : data[2].referenceOption,
                onDelete : (
                    data[3] == undefined ?
                    undefined :
                    data[3][2].referenceOption
                ),
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.ON, TokenKind.DELETE, referenceOptionRule,
            optional([
                TokenKind.ON, TokenKind.UPDATE, referenceOptionRule,
            ] as const),
        ] as const,
        (data) : OnUpdateDelete => {
            return {
                ...getTextRange(data),
                onDelete : data[2].referenceOption,
                onUpdate : (
                    data[3] == undefined ?
                    undefined :
                    data[3][2].referenceOption
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
            CustomSyntaxKind.IdentifierList,
            optional(union(
                [TokenKind.MATCH, TokenKind.FULL] as const,
                [TokenKind.MATCH, TokenKind.PARTIAL] as const,
                [TokenKind.MATCH, TokenKind.SIMPLE] as const,
            )),
            optional(onUpdateDeleteRule),
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
