import {MySqlGrammar} from "./mysql-grammar.generated";
import {SyntaxKind} from "./syntax-kind.generated";
import {tokens, extras, TokenKind} from "./token.generated";
import * as rules from "./rules.generated";
import {CustomExtras} from "./custom-extras";

export const mySqlGrammar : MySqlGrammar = {
    tokens,
    extras,
    lineBreakToken : TokenKind.LineBreak,
    singleLineCommentToken : TokenKind.SingleLineComment,
    customExtras : {
        [CustomExtras.noExtras] : [],
        [CustomExtras.noLineBreak] : extras
            .filter(e => e != TokenKind.LineBreak),
    },
    cannotUnexpect : [
        TokenKind.EndOfStatement,
    ],

    //TODO Phase out
    inline : [
    ],
    start : SyntaxKind.SourceFile,
    rules,
};
