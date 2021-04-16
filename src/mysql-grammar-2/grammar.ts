import {
    Grammar,
    buildGrammar,
    choice,
    field,
    repeat,
    repeat1,
    seq,
    optional,
    tokenSymbol,
} from "../grammar-builder";
import {tokenSymbol2} from "../grammar-builder/grammar";
import {MySqlGrammar} from "./mysql-grammar.generated";
import {SyntaxKind} from "./syntax-kind.generated";
import {TokenKind, tokens, nonReservedKeywords} from "./token.generated";

const identifier = tokenSymbol(
    TokenKind.Identifier,
    ...nonReservedKeywords,
);

const mySqlGrammar : MySqlGrammar = {
    tokens,
    extras : [
        TokenKind.WhiteSpace,
        TokenKind.SingleLineComment,
        TokenKind.MultiLineComment,
        TokenKind.ExecutionComment,
        TokenKind.LineBreak,
    ],

    inline : [
        SyntaxKind.CharacterSetNameOrDefault,
        SyntaxKind.CollationNameOrDefault,
        SyntaxKind.Statement,
        SyntaxKind.Schema,
        SyntaxKind.CharSet,
        SyntaxKind.Ident,
    ],
    start : SyntaxKind.SourceFile,
    rules : {
        SourceFile: seq(
            field("statement", repeat(choice(SyntaxKind.LeadingStatement, SyntaxKind.DelimiterStatement))),
            field("statement", choice(SyntaxKind.TrailingStatement, SyntaxKind.DelimiterStatement)),
        ),

        Statement: choice(
            //TODO
            SyntaxKind.BinLogStatement,
            SyntaxKind.CreateSchemaStatement,
        ),

        BinLogStatement: seq(
            field("binLogToken", TokenKind.BINLOG),
            field("str", TokenKind.StringLiteral),
        ),

        CreateSchemaStatement: seq(
            field("createToken", TokenKind.CREATE),
            field("schemaToken", SyntaxKind.Schema),
            field("ifNotExists", optional(SyntaxKind.IfNotExists)),
            field("identifier", SyntaxKind.Ident),
            field("createSchemaOptionList", optional(SyntaxKind.CreateSchemaOptionList)),
        ),

        CreateSchemaOptionList: repeat1(field("item", choice(
            SyntaxKind.DefaultCharacterSet,
            SyntaxKind.DefaultCollate,
        ))),

        DefaultCharacterSet: seq(
            field("defaultToken", optional(TokenKind.DEFAULT)),
            SyntaxKind.CharSet,
            field("equalToken", optional(TokenKind.Equal)),
            field("characterSetName", SyntaxKind.CharacterSetNameOrDefault),
        ),

        DefaultCollate: seq(
            field("defaultToken", optional(TokenKind.DEFAULT)),
            field("collateToken", TokenKind.COLLATE),
            field("equalToken", optional(TokenKind.Equal)),
            field("collationName", SyntaxKind.CollationNameOrDefault),
        ),

        CharacterSetNameOrDefault: choice(
            TokenKind.DEFAULT,
            tokenSymbol2(
                identifier,
                TokenKind.BINARY,
                TokenKind.StringLiteral,
            ),
        ),

        CollationNameOrDefault: choice(
            TokenKind.DEFAULT,
            tokenSymbol2(
                identifier,
                TokenKind.StringLiteral,
            ),
        ),

        CharSet: choice(
            seq(
                field("characterSetToken", TokenKind.CHARACTER),
                field("characterSetToken", TokenKind.SET)
            ),
            field("characterSetToken", TokenKind.CHARSET),
        ),

        Schema: tokenSymbol(
            TokenKind.SCHEMA,
            TokenKind.DATABASE,
        ),

        IfNotExists: seq(
            field("ifToken", TokenKind.IF),
            field("notToken", TokenKind.NOT),
            field("existsToken", TokenKind.EXISTS),
        ),

        LeadingStatement: seq(
            field("statement", SyntaxKind.Statement),
            choice(
                seq(
                    field("semiColonToken", TokenKind.SemiColon),
                    field("customDelimiter", optional(TokenKind.CustomDelimiter)),
                ),
                field("customDelimiter", TokenKind.CustomDelimiter),
            ),
        ),

        TrailingStatement: seq(
            field("statement", SyntaxKind.Statement),
            field("semiColonToken", optional(TokenKind.SemiColon)),
            field("customDelimiter", optional(TokenKind.CustomDelimiter)),
        ),

        /**
         * A client-only statement
         */
        DelimiterStatement: seq(
            field("delimiterStart", TokenKind.DelimiterSpace),
            field("customDelimiter", TokenKind.CustomDelimiter),
        ),

        Ident: identifier,
    },
};
export const compiledGrammar = buildGrammar(mySqlGrammar as unknown as Grammar);
