import {choice} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";

export const ListPartition = choice(
    SyntaxKind.ListPartitionByExpression,
    SyntaxKind.ListPartitionByColumn,
    SyntaxKind.ListPartitionByColumnTuple2,
);
