import {Node} from "../../node";
import {NodeArray} from "../../node-array";
import {SyntaxKind} from "../../syntax-kind.generated";
import {Statement} from "../statement";
import {AsteriskSelectItem} from "./asterisk-select-item";
import {Limit} from "./limit";
import {OrderExpr} from "./order-expr";
import {SelectItem} from "./select-item";
import {SelectOptions} from "./select-options";
import {TableAsteriskSelectItem} from "./table-asterisk-select-item";

export interface Select extends Node, Statement {
    syntaxKind : SyntaxKind.Select,

    selectOptions : SelectOptions,
    selectItems : NodeArray<SelectItem|AsteriskSelectItem|TableAsteriskSelectItem>,

    order : NodeArray<OrderExpr>|undefined,
    limit : Limit|undefined,

}
