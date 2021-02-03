import {Statement, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {
    optional,
    zeroOrMore,
    union,
} from "../../nearley-wrapper";
import {getTextRange, toNodeArray} from "../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

makeCustomRule(CustomSyntaxKind.NonDelimiterStatement)
    .addSubstitution(
        [union(
            SyntaxKind.CreateSchemaStatement,
            SyntaxKind.CreateTableStatement,
            SyntaxKind.CreateFunctionStatement,
            SyntaxKind.CreateProcedureStatement,
            SyntaxKind.CreateTriggerStatement,
            SyntaxKind.CreateEventStatement,
            SyntaxKind.CreateUserDefinedFunctionStatement,
            SyntaxKind.CreateViewStatement,
            SyntaxKind.CreateUserStatement,
            SyntaxKind.CreateLogFileGroupStatement,
            SyntaxKind.CreateTablespaceStatement,
            SyntaxKind.CreateServerStatement,
            SyntaxKind.CreateIndexStatement,
            CustomSyntaxKind.SelectStatement,
            SyntaxKind.CreateTableLikeStatement,
            SyntaxKind.CreateTableSelectStatement,

            SyntaxKind.AlterTableStatement,
            SyntaxKind.AlterTableStandaloneStatement,
            SyntaxKind.AlterSchemaStatement,
            SyntaxKind.AlterSchemaUpgradeDataDirectoryNameStatement,
            SyntaxKind.AlterProcedureStatement,
            SyntaxKind.AlterFunctionStatement,
            SyntaxKind.AlterViewStatement,
            SyntaxKind.AlterEventStatement,
            SyntaxKind.AlterTablespaceStatement,
            SyntaxKind.AlterTablespaceChangeStatement,
            SyntaxKind.AlterTablespaceAccessStatement,
            SyntaxKind.AlterServerStatement,
            SyntaxKind.AlterUserStatement,
        )] as const,
        (data) : Statement => {
            return data[0][0];
        }
    );

makeCustomRule(CustomSyntaxKind.LeadingStatement)
    .addSubstitution(
        [
            CustomSyntaxKind.NonDelimiterStatement,
            TokenKind.SemiColon,
            optional(TokenKind.CustomDelimiter),
        ] as const,
        (data) : Statement => {
            data[0].customDelimiter = data[2]?.value ?? undefined
            return data[0] as Statement
        }
    )
    .addSubstitution(
        [
            SyntaxKind.DelimiterStatement,
        ] as const,
        (data) : Statement => data[0]
    );

makeCustomRule(CustomSyntaxKind.TrailingStatement)
    .addSubstitution(
        [
            CustomSyntaxKind.NonDelimiterStatement,
            optional(TokenKind.SemiColon),
            optional(TokenKind.CustomDelimiter),
        ] as const,
        (data) : Statement => {
            data[0].customDelimiter = data[2]?.value ?? undefined
            return data[0]
        }
    )
    .addSubstitution(
        [
            SyntaxKind.DelimiterStatement,
        ] as const,
        (data) : Statement => data[0]
    )

makeCustomRule(SyntaxKind.SourceFileLite)
    .addSubstitution(
        [
            zeroOrMore(CustomSyntaxKind.LeadingStatement),
            CustomSyntaxKind.TrailingStatement
        ] as const,
        (data) => {
            const arr = data.flat(1);
            const statements = toNodeArray(
                arr,
                SyntaxKind.SourceElementList,
                getTextRange(data)
            );
            return {
                start : statements.start,
                end : statements.end,
                syntaxKind : SyntaxKind.SourceFileLite,
                statements,
            };
        }
    );
