import {choice, field, optional, seq} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";

export const TrailingStatement = choice(
    seq(
        field("statement", SyntaxKind.Statement),
        optional(SyntaxKind.StatementTail),
    ),
    SyntaxKind.StatementTail,
);
