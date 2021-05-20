import {choice, field, seq} from "../../../grammar-builder";
import {parentheses} from "../../rule-util";
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

export const ParenthesizedSelect = parentheses(field("item", choice(
    SyntaxKind.Select,
    SyntaxKind.ParenthesizedSelect,
)));
