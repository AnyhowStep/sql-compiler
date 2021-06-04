import {choice, inline} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";

export const ListPartitionDefinitionTuple1 = inline(choice(
    SyntaxKind.SingletonListPartitionDefinitionTuple1,
    SyntaxKind.MultitonListPartitionDefinitionTuple1,
));
