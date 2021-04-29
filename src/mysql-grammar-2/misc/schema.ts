import {tokenSymbol} from "../../grammar-builder";
import {TokenKind} from "../token.generated";

export const Schema = tokenSymbol(
    TokenKind.SCHEMA,
    TokenKind.DATABASE,
);
