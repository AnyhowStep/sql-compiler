import {Identifier} from "../../identifier";
import {ValueNode} from "../../node";
import {NodeArray2} from "../../node-array";
import {SyntaxKind} from "../../syntax-kind.generated";

export interface KeyUsageList extends NodeArray2<SyntaxKind.KeyUsageList, Identifier|ValueNode<"PRIMARY">> {

}
