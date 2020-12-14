import {Node} from "../../node";
import {NodeArray} from "../../node-array";
import {SyntaxKind} from "../../syntax-kind.generated";
import {FromClause} from "../from-clause";
import {GroupByClause} from "../group-by-clause";
import {Statement} from "../statement";
import {AsteriskSelectItem} from "./asterisk-select-item";
import {HavingClause} from "./having-clause";
import {Limit} from "./limit";
import {OrderExpr} from "./order-expr";
import {SelectItem} from "./select-item";
import {SelectOptions} from "./select-options";
import {TableAsteriskSelectItem} from "./table-asterisk-select-item";
import {WhereClause} from "./where-clause";

export interface Select extends Node, Statement {
    syntaxKind : SyntaxKind.Select,

    parenthesized : boolean,

    selectOptions : SelectOptions,
    selectItems : NodeArray<SelectItem|AsteriskSelectItem|TableAsteriskSelectItem>,

    fromClause : FromClause|undefined,
    whereClause : WhereClause|undefined,
    groupByClause : GroupByClause|undefined,
    havingClause : HavingClause|undefined,

    order : NodeArray<OrderExpr>|undefined,
    limit : Limit|undefined,

}
