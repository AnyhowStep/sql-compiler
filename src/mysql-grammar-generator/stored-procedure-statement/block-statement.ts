import {BlockStatement, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {getTextRange} from "../parse-util";
import {makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.BlockStatement)
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4449
     */
    .addSubstitution(
        [
            TokenKind.BEGIN,
            SyntaxKind.StoredProcedureStatementList,
            TokenKind.END,
        ] as const,
        (data) : BlockStatement => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.BlockStatement,
                statements : data[1],
            };
        }
    );
