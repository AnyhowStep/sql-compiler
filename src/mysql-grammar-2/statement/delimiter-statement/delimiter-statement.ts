import {field, seq, useCustomExtra} from "../../../grammar-builder";
import {CustomExtras} from "../../custom-extras";
import {TokenKind} from "../../token.generated";

/**
 * A client-only statement
 */
export const DelimiterStatement = useCustomExtra(CustomExtras.noLineBreak, seq(
    field("delimiterStart", TokenKind.DelimiterSpace),
    field("customDelimiter", TokenKind.CustomDelimiter),
));
