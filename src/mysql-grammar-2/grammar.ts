import {MySqlGrammar} from "./mysql-grammar.generated";
import {SyntaxKind} from "./syntax-kind.generated";
import {tokens, extras, TokenKind} from "./token.generated";
import * as rules from "./rules.generated";
import {buildGrammar, Grammar} from "../grammar-builder";

export const mySqlGrammar : MySqlGrammar = {
    tokens,
    extras,
    lineBreakToken : TokenKind.LineBreak,
    cannotUnexpect : [
        TokenKind.EndOfStatement,
    ],

    noLineBreak : [
        SyntaxKind.DelimiterStatement,
    ],
    inline : [
        SyntaxKind.CharacterSetNameOrDefault,
        SyntaxKind.CollationNameOrDefault,
        SyntaxKind.Statement,
        SyntaxKind.Schema,
        SyntaxKind.CharSet,
        SyntaxKind.Ident,
        SyntaxKind.StatementTail,
        SyntaxKind.Partition,
        SyntaxKind.CreateSchemaOption,
        SyntaxKind.Expression,
        SyntaxKind.BooleanPrimaryExpression,
        SyntaxKind.Predicate,

        SyntaxKind.BitExpression,
        SyntaxKind.BitwiseXor,
        SyntaxKind.MulDivMod,
        SyntaxKind.PlusMinus,
        SyntaxKind.BitwiseShift,
        SyntaxKind.BitwiseAnd,
        SyntaxKind.BitwiseOr,

        SyntaxKind.SimpleExpression,
        SyntaxKind.SelectStatement,
    ],
    start : SyntaxKind.SourceFile,
    rules,
};
export const compiledGrammar = buildGrammar(mySqlGrammar as unknown as Grammar);
