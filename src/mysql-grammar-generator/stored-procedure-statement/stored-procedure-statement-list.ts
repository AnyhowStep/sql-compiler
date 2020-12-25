import {StoredProcedureStatementList, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {zeroOrMore} from "../../nearley-wrapper";
import {getTextRange, toNodeArray} from "../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.StoredProcedureStatementList)
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2890
     */
    .addSubstitution(
        [
            zeroOrMore([
                CustomSyntaxKind.StoredProcedureStatement,
                TokenKind.SemiColon,
            ] as const),
        ] as const,
        (data) : StoredProcedureStatementList => {
            const arr = data[0].map(item => item[0]);
            return toNodeArray(
                arr,
                SyntaxKind.StoredProcedureStatementList,
                getTextRange(data)
            );
        }
    );
