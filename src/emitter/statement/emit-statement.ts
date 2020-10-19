import {Statement, switchSyntaxKind, SyntaxKind} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitCreateSchemaStatement} from "./emit-create-schema-statement";
import {emitDelimiterStatement} from "./emit-delimiter-statement";

export function emitStatement (statement : Statement) : StringBuilder {
    return switchSyntaxKind(statement)
        .case(SyntaxKind.CreateSchemaStatement, emitCreateSchemaStatement)
        //.case(SyntaxKind.CreateTableStatement, emitCreateTableStatement)
        /**
         * We do not emit this because this is our custom syntax
         * that gets erased.
         */
        //.case(SyntaxKind.CreateMacroStatement, () => new StringBuilder())
        //.case(SyntaxKind.SetStatement, emitSetStatement)
        /*.case(SyntaxKind.SelectStatement, statement => emitSelectStatement(
            statement,
            {
                emitExtraParentheses : false,
                multiLineBinaryOp : undefined,
                macroCallExpression : undefined,
            }
        ))*/
        .case(SyntaxKind.DelimiterStatement, emitDelimiterStatement)
        .case(SyntaxKind.DeclareFunctionStatement, () => new StringBuilder())
        .case(SyntaxKind.UnknownStatement, () => new StringBuilder())
        .default(() => new StringBuilder().append("UNKNOWN_STATEMENT"));
}
