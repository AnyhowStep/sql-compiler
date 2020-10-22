import {Statement, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {
    makeRule,
    makeCustomRule,
    optional,
    zeroOrMore,
    union,
} from "../nearley-util";
import {getTextRange, toNodeArray} from "../parse-util";

const NonDelimiterStatementRule = makeCustomRule<Statement>("NonDelimiterStatement")
    .addSubstitution(
        [union(
            SyntaxKind.CreateSchemaStatement,
            SyntaxKind.CreateTableStatement,
        )] as const,
        (data) : Statement => {
            return data[0][0];
        }
    );

const LeadingStatement = makeCustomRule<Statement>("LeadingStatement")
    .addSubstitution(
        [
            NonDelimiterStatementRule,
            TokenKind.SemiColon,
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

const TrailingStatement = makeCustomRule<Statement>("TrailingStatement")
    .addSubstitution(
        [
            NonDelimiterStatementRule,
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

makeRule(SyntaxKind.SourceFileLite)
    .addSubstitution(
        [
            zeroOrMore(LeadingStatement),
            TrailingStatement
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
