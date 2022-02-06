import {choice, field, inline, optional, seq} from "../../../grammar-builder";
import {TokenKind} from "../../token.generated";

export const StatementTail = inline(seq(
    choice(
        seq(
            field("semiColonToken", TokenKind.SemiColon),
            field("customDelimiter", optional(TokenKind.CustomDelimiter)),
        ),
        field("customDelimiter", TokenKind.CustomDelimiter),
    ),
    TokenKind.EndOfStatement,
));
