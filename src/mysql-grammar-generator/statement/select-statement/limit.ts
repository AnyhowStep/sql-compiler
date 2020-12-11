import {Identifier, IntegerLiteral, Limit, ParamMarker, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {union} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10956
 */
makeCustomRule(CustomSyntaxKind.LimitOption)
    .addSubstitution(
        [
            union(
                SyntaxKind.Identifier,
                SyntaxKind.ParamMarker,
                SyntaxKind.IntegerLiteral,
            ),
        ] as const,
        (data) : Identifier|IntegerLiteral|ParamMarker => {
            return data[0][0];
        }
    );

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10935
 */
makeCustomRule(SyntaxKind.Limit)
    .addSubstitution(
        [
            TokenKind.LIMIT,
            CustomSyntaxKind.LimitOption,
        ] as const,
        (data) : Limit => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.Limit,

                offset : undefined,
                rowCount : data[1],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.LIMIT,
            CustomSyntaxKind.LimitOption,
            TokenKind.Comma,
            CustomSyntaxKind.LimitOption,
        ] as const,
        (data) : Limit => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.Limit,

                offset : data[1],
                rowCount : data[3],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.LIMIT,
            CustomSyntaxKind.LimitOption,
            TokenKind.OFFSET,
            CustomSyntaxKind.LimitOption,
        ] as const,
        (data) : Limit => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.Limit,

                offset : data[3],
                rowCount : data[1],
            };
        }
    );
