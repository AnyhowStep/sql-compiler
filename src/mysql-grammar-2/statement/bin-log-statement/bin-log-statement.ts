import {field, seq} from "../../../grammar-builder";
import {stringLiteral} from "../../rule-util";
import {TokenKind} from "../../token.generated";

export const BinLogStatement = seq(
    field("binLogToken", TokenKind.BINLOG),
    field("str", stringLiteral),
);
