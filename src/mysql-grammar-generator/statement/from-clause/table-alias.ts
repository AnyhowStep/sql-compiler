import {Identifier, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional, union} from "../../../nearley-wrapper";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10772
 */
makeCustomRule(CustomSyntaxKind.TableAlias)
    .addSubstitution(
        [
            optional(union(
                TokenKind.AS,
                TokenKind.Equal,
            )),
            SyntaxKind.Identifier,
        ] as const,
        (data) : Identifier => {
            return data[1];
        }
    )
