import {field, seq} from "../../../grammar-builder";
import {TokenKind} from "../../token.generated";

export const BinLogStatement = seq(
    field("binLogToken", TokenKind.BINLOG),
    field("str", TokenKind.StringLiteral),
);
