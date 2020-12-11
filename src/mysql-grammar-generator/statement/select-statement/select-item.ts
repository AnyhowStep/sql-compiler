import {SelectItem, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional, union} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12973
 */
makeCustomRule(SyntaxKind.SelectItem)
    .addSubstitution(
        [
            CustomSyntaxKind.Expression,
            optional([
                optional(TokenKind.AS),
                union(
                    SyntaxKind.Identifier,
                    SyntaxKind.StringLiteral,
                ),
            ] as const),
        ] as const,
        (data) : SelectItem => {
            const [expr, alias] = data;

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.SelectItem,

                expr,
                alias : (
                    alias == undefined ?
                    undefined :
                    alias[1][0]
                ),
            };
        }
    )
