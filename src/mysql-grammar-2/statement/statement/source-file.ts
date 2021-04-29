import {choice, field, optional, repeat, seq} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";

export const SourceFile = optional(seq(
    field("statement", repeat(choice(SyntaxKind.LeadingStatement, SyntaxKind.DelimiterStatement))),
    field("statement", choice(SyntaxKind.TrailingStatement, SyntaxKind.DelimiterStatement)),
));
