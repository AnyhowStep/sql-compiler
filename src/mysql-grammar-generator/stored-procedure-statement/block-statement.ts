import {BlockStatement, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {optional} from "../../nearley-wrapper";
import {getTextRange} from "../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.BlockStatement)
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4415
     */
    .addSubstitution(
        [
            CustomSyntaxKind.LabelIdentifier,
            TokenKind.Colon,
            TokenKind.BEGIN,
            SyntaxKind.StoredProcedureStatementList,
            TokenKind.END,
            optional(CustomSyntaxKind.LabelIdentifier),
        ] as const,
        (data) : BlockStatement => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.BlockStatement,
                beginLabel : data[0],
                statements : data[3],
                endLabel : data[5] ?? undefined,
            };
        }
    )
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4449
     */
    .addSubstitution(
        [
            TokenKind.BEGIN,
            SyntaxKind.StoredProcedureStatementList,
            TokenKind.END,
            /**
             * Providing this is actually a syntax error.
             * However, it might be better to just parse it here
             * and catch it with a lint rule?
             *
             * If this creates an ambiguous grammar, we should remove this.
             *
             * @todo Catch with lint rule
             */
            optional(CustomSyntaxKind.LabelIdentifier),
        ] as const,
        (data) : BlockStatement => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.BlockStatement,
                beginLabel : undefined,
                statements : data[1],
                endLabel : data[3] ?? undefined,
            };
        }
    );
