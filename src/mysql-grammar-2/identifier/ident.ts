import {tokenSymbol2} from "../../grammar-builder";
import {identifier, tuple1, tuple2} from "../rule-util";
import {SyntaxKind} from "../syntax-kind.generated";
import {reservedKeywords, TokenKind} from "../token.generated";

export const Ident = identifier;

export const IdentOrReserved = tokenSymbol2(
    identifier,
    ...reservedKeywords,
    TokenKind.UnderscoreCharacterSet,
);

export const IdentTuple1 = tuple1(SyntaxKind.Ident);
export const IdentTuple2 = tuple2(SyntaxKind.Ident);
