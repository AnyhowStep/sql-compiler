import {field, inline} from "../../grammar-builder";
import {identifier, identifierOrReserved, parentheses, tuple1, tuple2} from "../rule-util";
import {SyntaxKind} from "../syntax-kind.generated";

export const Ident = inline(identifier);

export const IdentOrReserved = inline(identifierOrReserved);

export const IdentTuple1 = tuple1(SyntaxKind.Ident);
export const IdentTuple2 = tuple2(SyntaxKind.Ident);

export const ParenthesizedIdent = parentheses(
    field("item", SyntaxKind.Ident)
);
