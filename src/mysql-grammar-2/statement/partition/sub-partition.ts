import {choice, inline} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";

export const SubPartition = inline(choice(
    SyntaxKind.HashSubPartition,
    SyntaxKind.KeySubPartition,
));
