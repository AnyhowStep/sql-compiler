import {choice} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";

export const Partition = choice(
    SyntaxKind.HashPartition,
    SyntaxKind.KeyPartition,
    SyntaxKind.ListPartition,
    SyntaxKind.RangePartition,
);
