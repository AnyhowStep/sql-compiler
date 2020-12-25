import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {Statement} from "../statement";
import {Limit} from "./limit";
import {OrderExprList} from "./order-expr";
import {Select} from "./select";
import {Union} from "./union";

export interface UnionOrderLimit extends Node, Statement {
    syntaxKind: SyntaxKind.UnionOrderLimit;

    select : Select|Union;

    order : OrderExprList|undefined;
    limit : Limit|undefined;
}
