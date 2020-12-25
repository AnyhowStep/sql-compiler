import {IdentifierList, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10513
 */
makeCustomRule(CustomSyntaxKind.UsePartition)
    .addSubstitution(
        [
            TokenKind.PARTITION,
            SyntaxKind.IdentifierList,
        ] as const,
        (data) : IdentifierList => {
            return data[1];
        }
    )
