import {choice, field, seq} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

/**
 * @todo
 */
export const Select = seq(
    field("selectToken", TokenKind.SELECT),
    field("selectItemList1", SyntaxKind.SelectItemList1),
);

/**
 * @todo
 */
export const SelectStatement = choice(
    SyntaxKind.Select,
);
