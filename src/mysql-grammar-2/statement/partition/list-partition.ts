import {choice, inline} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";

export const ListPartition = inline(choice(
    SyntaxKind.ListPartitionByExpression,
    SyntaxKind.ListPartitionByColumn,
    SyntaxKind.ListPartitionByColumnTuple2,
));
