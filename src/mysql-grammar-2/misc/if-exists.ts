import {field, seq} from "../../grammar-builder";
import {TokenKind} from "../token.generated";

export const IfExists = seq(
    field("ifToken", TokenKind.IF),
    field("existsToken", TokenKind.EXISTS),
);
