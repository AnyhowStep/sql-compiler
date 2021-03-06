import {Statement, SwitchSyntaxKind, switchSyntaxKind, SyntaxKind} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitAlterEventStatement} from "./alter-event-statement";
import {emitAlterInstanceStatement} from "./alter-instance-statement/alter-instance-rotate-master-key";
import {emitAlterFunctionStatement, emitAlterProcedureStatement} from "./alter-procedure-statement";
import {emitAlterSchemaStatement, emitAlterSchemaUpgradeDataDirectoryNameStatement} from "./alter-schema-statement";
import {emitAlterServerStatement} from "./alter-server-statement";
import {emitAlterTableStandaloneStatement, emitAlterTableStatement} from "./alter-table-statement";
import {emitAlterTablespaceAccessStatement, emitAlterTablespaceChangeStatement, emitAlterTablespaceStatement} from "./alter-tablespace-statement";
import {emitAlterCurrentUserStatement} from "./alter-user-statement/alter-current-user-statement";
import {emitAlterUserStatement} from "./alter-user-statement/alter-user-statement";
import {emitAlterViewStatement} from "./alter-view-statement";
import {emitAnalyzeTableStatement} from "./analyze-table-statement/analyze-table-statement";
import {emitBinLogStatement} from "./bin-log-statement";
import {emitCreateEventStatement} from "./create-event-statement";
import {emitCreateFunctionStatement, emitCreateProcedureStatement, emitCreateUserDefinedFunctionStatement} from "./create-function-statement";
import {emitCreateIndexStatement} from "./create-index-statement";
import {emitCreateLogFileGroupStatement} from "./create-log-file-group-statement";
import {emitCreateServerStatement} from "./create-server-statement";
import {emitCreateTableLikeStatement} from "./create-table-like-statement";
import {emitCreateTableSelectStatement} from "./create-table-statement";
import {emitCreateTableStatement} from "./create-table-statement";
import {emitCreateTablespaceStatement} from "./create-tablespace-statement";
import {emitCreateTriggerStatement} from "./create-trigger-statement";
import {emitCreateUserStatement} from "./create-user-statement";
import {emitCreateViewStatement} from "./create-view-statement";
import {emitCreateSchemaStatement} from "./emit-create-schema-statement";
import {emitDelimiterStatement} from "./emit-delimiter-statement";
import {emitSelectStatement} from "./select-statement";

export function addStatementCases (switchBuilder : SwitchSyntaxKind<never>) : SwitchSyntaxKind<StringBuilder> {
    return switchBuilder
        .case(SyntaxKind.AlterEventStatement, emitAlterEventStatement)
        .case(SyntaxKind.AlterInstanceStatement, emitAlterInstanceStatement)
        .case(SyntaxKind.AlterFunctionStatement, emitAlterFunctionStatement)
        .case(SyntaxKind.AlterProcedureStatement, emitAlterProcedureStatement)
        .case(SyntaxKind.AlterSchemaStatement, emitAlterSchemaStatement)
        .case(SyntaxKind.AlterSchemaUpgradeDataDirectoryNameStatement, emitAlterSchemaUpgradeDataDirectoryNameStatement)
        .case(SyntaxKind.AlterServerStatement, emitAlterServerStatement)
        .case(SyntaxKind.AlterTableStandaloneStatement, emitAlterTableStandaloneStatement)
        .case(SyntaxKind.AlterTableStatement, emitAlterTableStatement)
        .case(SyntaxKind.AlterTablespaceAccessStatement, emitAlterTablespaceAccessStatement)
        .case(SyntaxKind.AlterTablespaceChangeStatement, emitAlterTablespaceChangeStatement)
        .case(SyntaxKind.AlterTablespaceStatement, emitAlterTablespaceStatement)
        .case(SyntaxKind.AlterCurrentUserStatement, emitAlterCurrentUserStatement)
        .case(SyntaxKind.AlterUserStatement, emitAlterUserStatement)
        .case(SyntaxKind.AlterViewStatement, emitAlterViewStatement)

        .case(SyntaxKind.AnalyzeTableStatement, emitAnalyzeTableStatement)

        .case(SyntaxKind.BinLogStatement, emitBinLogStatement)

        .case(SyntaxKind.CreateSchemaStatement, emitCreateSchemaStatement)
        .case(SyntaxKind.CreateTableStatement, emitCreateTableStatement)
        .case(SyntaxKind.CreateFunctionStatement, emitCreateFunctionStatement)
        .case(SyntaxKind.CreateProcedureStatement, emitCreateProcedureStatement)
        .case(SyntaxKind.CreateTriggerStatement, emitCreateTriggerStatement)
        .case(SyntaxKind.CreateEventStatement, emitCreateEventStatement)
        .case(SyntaxKind.CreateUserDefinedFunctionStatement, emitCreateUserDefinedFunctionStatement)
        .case(SyntaxKind.CreateViewStatement, emitCreateViewStatement)
        .case(SyntaxKind.CreateUserStatement, emitCreateUserStatement)
        .case(SyntaxKind.CreateLogFileGroupStatement, emitCreateLogFileGroupStatement)
        .case(SyntaxKind.CreateTablespaceStatement, emitCreateTablespaceStatement)
        .case(SyntaxKind.CreateServerStatement, emitCreateServerStatement)
        .case(SyntaxKind.CreateIndexStatement, emitCreateIndexStatement)
        .case(SyntaxKind.CreateTableLikeStatement, emitCreateTableLikeStatement)
        .case(SyntaxKind.CreateTableSelectStatement, emitCreateTableSelectStatement)
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
