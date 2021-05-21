import {MySqlGrammar} from "./mysql-grammar.generated";
import {SyntaxKind} from "./syntax-kind.generated";
import {tokens, extras, TokenKind} from "./token.generated";
import * as rules from "./rules.generated";
import {CustomExtras} from "./custom-extras";

export const mySqlGrammar : MySqlGrammar = {
    tokens,
    extras,
    lineBreakToken : TokenKind.LineBreak,
    customExtras : {
        [CustomExtras.noWhiteSpace] : [
            TokenKind.MultiLineComment,
            TokenKind.ExecutionComment,
        ],
        [CustomExtras.noLineBreak] : extras
            .filter(e => e != TokenKind.LineBreak),
    },
    cannotUnexpect : [
        TokenKind.EndOfStatement,
    ],

    //TODO Phase out
    inline : [
        SyntaxKind.CharacterSetNameOrDefault,
        SyntaxKind.CollationNameOrDefault,
        SyntaxKind.Statement,
        SyntaxKind.Schema,
        SyntaxKind.CharSet,
        SyntaxKind.IdentOrReserved,
        SyntaxKind.StatementTail,
        SyntaxKind.Partition,
        SyntaxKind.CreateSchemaOption,


        SyntaxKind.Expression,
        SyntaxKind.BooleanPrimaryExpression,
        SyntaxKind.Predicate,

        SyntaxKind.BitExpression,

        SyntaxKind.SimpleExpression,
        SyntaxKind.Literal,
        SyntaxKind.TextLiteral,
        SyntaxKind.NumberLiteral,
        SyntaxKind.TextString,


        SyntaxKind.SelectStatement,

        SyntaxKind.VarChar,
        SyntaxKind.Char,
        SyntaxKind.CharacterSetName,
        SyntaxKind.CollationName,

        SyntaxKind.CreateTableDefinition,
        SyntaxKind.ColumnDefinition,
        SyntaxKind.DataType,
        SyntaxKind.CharacterDataType,
        SyntaxKind.CharacterDataTypeOption,
        SyntaxKind.IntegerDataTypeOption,
    ],
    start : SyntaxKind.SourceFile,
    rules,
};
