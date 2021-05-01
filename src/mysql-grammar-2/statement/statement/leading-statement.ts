import {field, optional, seq} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";

export const LeadingStatement = seq(
    field("statement", optional(SyntaxKind.Statement)),
    SyntaxKind.StatementTail,
);
