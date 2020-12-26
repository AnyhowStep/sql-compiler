import {Statement, SwitchSyntaxKind, switchSyntaxKind, SyntaxKind} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitCreateEventStatement} from "./create-event-statement";
import {emitCreateFunctionStatement, emitCreateProcedureStatement} from "./create-function-statement";
import {emitCreateTableStatement} from "./create-table-statement";
import {emitCreateTriggerStatement} from "./create-trigger-statement";
import {emitCreateSchemaStatement} from "./emit-create-schema-statement";
import {emitDelimiterStatement} from "./emit-delimiter-statement";
import {emitSelectStatement} from "./select-statement";

export function addStatementCases (switchBuilder : SwitchSyntaxKind<never>) : SwitchSyntaxKind<StringBuilder> {
    return switchBuilder
        .case(SyntaxKind.CreateSchemaStatement, emitCreateSchemaStatement)
        .case(SyntaxKind.CreateTableStatement, emitCreateTableStatement)
        .case(SyntaxKind.CreateFunctionStatement, emitCreateFunctionStatement)
        .case(SyntaxKind.CreateProcedureStatement, emitCreateProcedureStatement)
        .case(SyntaxKind.CreateTriggerStatement, emitCreateTriggerStatement)
        .case(SyntaxKind.CreateEventStatement, emitCreateEventStatement)
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
        .case(SyntaxKind.Select, emitSelectStatement)
        .case(SyntaxKind.Union, emitSelectStatement)
        .case(SyntaxKind.UnionOrderLimit, emitSelectStatement)
        .case(SyntaxKind.DeclareFunctionStatement, () => new StringBuilder())
        .case(SyntaxKind.UnknownStatement, () => new StringBuilder())
}

export function emitStatement (statement : Statement) : StringBuilder {
    return addStatementCases(switchSyntaxKind(statement))
        .default(() => new StringBuilder().append("UNKNOWN_STATEMENT"));
}
