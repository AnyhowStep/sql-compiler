import {field, seq} from "../../../grammar-builder";
import {TokenKind} from "../../token.generated";

/**
 * A client-only statement
 */
export const DelimiterStatement = seq(
    field("delimiterStart", TokenKind.DelimiterSpace),
    field("customDelimiter", TokenKind.CustomDelimiter),
);
