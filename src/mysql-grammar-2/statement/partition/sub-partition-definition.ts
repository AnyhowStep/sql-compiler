import {optional, seq} from "../../../grammar-builder";
import {identifierOrStringLiteral, tuple1} from "../../rule-util";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

export const SubPartitionDefinition = seq(
    TokenKind.SUBPARTITION,
    identifierOrStringLiteral,
    optional(SyntaxKind.PartitionDefinitionOptionRepeat1),
);

export const SubPartitionDefinitionTuple1 = tuple1(SyntaxKind.SubPartitionDefinition);
