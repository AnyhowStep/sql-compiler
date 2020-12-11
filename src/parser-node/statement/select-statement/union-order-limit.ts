import {Node} from "../../node";
import {NodeArray} from "../../node-array";
import {SyntaxKind} from "../../syntax-kind.generated";
import {Statement} from "../statement";
import {Limit} from "./limit";
import {OrderExpr} from "./order-expr";
import {Select} from "./select";
import {Union} from "./union";

export interface UnionOrderLimit extends Node, Statement {
    syntaxKind: SyntaxKind.UnionOrderLimit;

    select : Select|Union;

    order : NodeArray<OrderExpr>|undefined;
    limit : Limit|undefined;
}
