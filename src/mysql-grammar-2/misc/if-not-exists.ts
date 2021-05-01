import {field, seq} from "../../grammar-builder";
import {TokenKind} from "../token.generated";

export const IfNotExists = seq(
    field("ifToken", TokenKind.IF),
    field("notToken", TokenKind.NOT),
    field("existsToken", TokenKind.EXISTS),
);
