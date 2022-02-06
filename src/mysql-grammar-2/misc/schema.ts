import {inline, tokenSymbol} from "../../grammar-builder";
import {TokenKind} from "../token.generated";

export const Schema = inline(tokenSymbol(
    TokenKind.SCHEMA,
    TokenKind.DATABASE,
));
