import {AlterTableConvertToCharacterSet, SyntaxKind} from "../../../../parser-node";
import {TokenKind} from "../../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../../factory";
import {optional, union} from "../../../../nearley-wrapper";
import {getTextRange} from "../../../parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8314
 */
makeCustomRule(SyntaxKind.AlterTableConvertToCharacterSet)
    .addSubstitution(
        [
            TokenKind.CONVERT,
            TokenKind.TO,
            union(
                [
                    TokenKind.CHARACTER,
                    TokenKind.SET,
                ] as const,
                TokenKind.CHARSET
            ),
            CustomSyntaxKind.CharacterSetNameOrDefault,
            optional([
                TokenKind.COLLATE,
                CustomSyntaxKind.CollationNameOrDefault,
            ] as const),
        ] as const,
        (data) : AlterTableConvertToCharacterSet => {
            const [
                ,
                ,
                ,
                characterSetName,
                collationName,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterTableConvertToCharacterSet,
                characterSetName,
                collationName : (
                    collationName == undefined ?
                    undefined :
                    collationName[1]
                ),
            };
        }
    )
