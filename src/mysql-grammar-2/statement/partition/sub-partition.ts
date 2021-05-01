import {choice} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";

export const SubPartition = choice(
    SyntaxKind.HashSubPartition,
    SyntaxKind.KeySubPartition,
);
