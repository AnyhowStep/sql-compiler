import {precedence, repeat, tokenSymbol} from "../../grammar-builder";
import {TokenKind} from "../token.generated";

export const Missing = precedence(-100, repeat(tokenSymbol(
    TokenKind.Identifier,
    ...Object.keys(TokenKind)
)));
