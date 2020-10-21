import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {
    makeRule,
    makeUnionRule,
    optional,
    toNodeArray,
    zeroOrMore,
} from "../nearley-util";

const LeadingStatement = makeUnionRule("LeadingStatement")
    .addSubstitution(
        [
            SyntaxKind.CreateSchemaStatement,
            TokenKind.SemiColon,
            optional(TokenKind.CustomDelimiter),
        ] as const,
        (data) => {
            data[0].customDelimiter = data[2]?.value ?? undefined
            return data[0]
        }
    )
    .addSubstitution(
        [
            SyntaxKind.DelimiterStatement,
        ] as const,
        (data) => data[0]
    )

const TrailingStatement = makeUnionRule("TrailingStatement")
    .addSubstitution(
        [
            SyntaxKind.CreateSchemaStatement,
            optional(TokenKind.SemiColon),
            optional(TokenKind.CustomDelimiter),
        ] as const,
        (data) => {
            data[0].customDelimiter = data[2]?.value ?? undefined
            return data[0]
        }
    )
    .addSubstitution(
        [
            SyntaxKind.DelimiterStatement,
        ] as const,
        (data) => data[0]
    )

makeRule(SyntaxKind.SourceFile)
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
                0
            );
            return {
                start : statements.start,
                end : statements.end,
                syntaxKind : SyntaxKind.SourceFile,
                statements,
            };
        }
    );
