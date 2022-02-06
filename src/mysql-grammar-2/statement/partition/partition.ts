import {choice, inline} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";

export const Partition = inline(choice(
    SyntaxKind.HashPartition,
    SyntaxKind.KeyPartition,
    SyntaxKind.ListPartition,
    SyntaxKind.RangePartition,
));
