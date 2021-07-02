import {field, seq} from "../../grammar-builder";
import {SyntaxKind} from "../syntax-kind.generated";
import {TokenKind} from "../token.generated";

export const IfNotExists = seq(
    field("ifToken", TokenKind.IF),
    field("notToken", SyntaxKind.Not),
    field("existsToken", TokenKind.EXISTS),
);
