import {choice, field, seq, tokenSymbol} from "../../grammar-builder";
import {SyntaxKind} from "../syntax-kind.generated";
import {TokenKind} from "../token.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12854
 */
export const SignedLiteral = choice(
    seq(
        field("literal", SyntaxKind.Literal),
    ),
    seq(
        field("sign", tokenSymbol(
            TokenKind.Minus,
            TokenKind.Plus,
        )),
        field("literal", SyntaxKind.NumberLiteral),
    ),
);
